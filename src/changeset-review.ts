import { setOutput } from "./utils";

const { GITHUB_TOKEN, BOT_TOKEN, PR_NUMBER, REPO, HEAD_SHA, MODEL } =
	process.env;
if (!GITHUB_TOKEN || !BOT_TOKEN || !PR_NUMBER || !REPO || !HEAD_SHA || !MODEL) {
	throw new Error(
		`Missing input.\nRequired environment variables: GITHUB_TOKEN, BOT_TOKEN, PR_NUMBER, REPO, HEAD_SHA, MODEL\n`,
	);
}

const ghHeaders = {
	Accept: "application/vnd.github+json",
	Authorization: `Bearer ${BOT_TOKEN}`,
	"X-GitHub-Api-Version": "2022-11-28",
};

// Check if bombshell-bot already reviewed this PR
const reviewsRes = await fetch(
	`https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}/reviews`,
	{ headers: ghHeaders },
);
if (!reviewsRes.ok) {
	throw new Error(`Failed to fetch reviews: ${reviewsRes.status}`);
}
const reviews: Array<{ user: { login: string } }> = await reviewsRes.json();
if (reviews.some((r) => r.user.login === "bombshell-bot[bot]")) {
	console.log("bombshell-bot has already reviewed this PR, exiting.");
	process.exit(0);
}

// Fetch PR diff
const diffRes = await fetch(
	`https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}`,
	{
		headers: {
			...ghHeaders,
			Accept: "application/vnd.github.diff",
		},
	},
);
if (!diffRes.ok) {
	throw new Error(`Failed to fetch PR diff: ${diffRes.status}`);
}
let diff = await diffRes.text();
if (!diff.trim()) {
	console.log("Empty diff, exiting.");
	process.exit(0);
}

// Check if diff only touches .changeset/ files
const diffFiles = diff
	.split(/^diff --git /m)
	.filter(Boolean)
	.map((chunk) => {
		const match = chunk.match(/^a\/(.+?) b\//);
		return match?.[1] ?? "";
	});
const onlyChangesets = diffFiles.every(
	(f) => f.startsWith(".changeset/") || f === "",
);
if (onlyChangesets) {
	console.log("PR only touches .changeset/ files, exiting.");
	process.exit(0);
}

// Truncate large diffs
const MAX_DIFF_CHARS = 50_000;
let diffTruncated = false;
if (diff.length > MAX_DIFF_CHARS) {
	diffTruncated = true;
	diff = diff.slice(0, MAX_DIFF_CHARS);
}

// Find existing changesets in the PR
type PRFile = {
	filename: string;
	status: string;
};
const filesRes = await fetch(
	`https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}/files`,
	{ headers: ghHeaders },
);
if (!filesRes.ok) {
	throw new Error(`Failed to fetch PR files: ${filesRes.status}`);
}
const prFiles: PRFile[] = await filesRes.json();
const changesetFiles = prFiles.filter(
	(f) =>
		f.filename.startsWith(".changeset/") &&
		f.filename.endsWith(".md") &&
		!f.filename.endsWith("README.md") &&
		(f.status === "added" || f.status === "modified"),
);

type ChangesetFile = { filename: string; content: string };
const existingChangesets: ChangesetFile[] = [];
for (const file of changesetFiles) {
	const contentRes = await fetch(
		`https://api.github.com/repos/${REPO}/contents/${file.filename}?ref=${HEAD_SHA}`,
		{ headers: ghHeaders },
	);
	if (!contentRes.ok) continue;
	const data: { content?: string } = await contentRes.json();
	if (data.content) {
		existingChangesets.push({
			filename: file.filename,
			content: Buffer.from(data.content, "base64").toString("utf-8"),
		});
	}
}

// Build LLM prompt
const systemPrompt = `You are a semver analysis assistant for open-source JavaScript/TypeScript packages.
You analyze pull request diffs to determine:
1. Whether the changes have user-facing impact requiring a changeset
2. The appropriate semver bump level

You MUST respond with valid JSON matching this exact schema:
{
  "needsChangeset": boolean,
  "semverImpact": "none" | "patch" | "minor" | "major",
  "reasoning": "string explaining the classification in one sentence",
  "packages": ["package-name-1"],
  "suggestedMessage": "string - a changeset description"
}

Classification rules:
- "none": CI configs, docs, tests, dev dependencies, repo tooling, .github/ changes, lockfile changes
- "patch": Bug fixes, refactors with no API changes, internal improvements that affect output, dependency updates
- "minor": New features, new exported functions/components/types, new options/parameters, new CLI flags
- "major": Removed exports, renamed public APIs, changed default behavior, changed function signatures, dropped Node/platform support

Guidelines for suggestedMessage:
- Start with a present-tense verb: Adds, Removes, Fixes, Updates, Refactors, Improves, Deprecates
- Focus on user-facing impact, not implementation details
- Describe the change as a user of the package will experience it
- For patch: one line is enough (e.g. "Fixes a bug where X happened when Y")
- For minor: describe what people can now do (e.g. "Adds a new \`timeout\` option for \`client:idle\`")
- For major: include migration guidance after the initial sentence
- Do not end with punctuation unless writing multiple sentences

If semverImpact is "none", set needsChangeset to false and suggestedMessage to empty string.
If you cannot determine the packages affected, set packages to an empty array.`;

let userPrompt = "";
if (existingChangesets.length > 0) {
	userPrompt += "Existing changesets in this PR:\n\n";
	for (const cs of existingChangesets) {
		userPrompt += `--- ${cs.filename} ---\n${cs.content}\n---\n\n`;
	}
	userPrompt +=
		"Review the existing changesets for correctness. If the semver level and message are appropriate, set suggestedMessage to an empty string. If they need changes, write the corrected full changeset message in suggestedMessage and explain what should change in reasoning.\n\n";
}
userPrompt += `PR Diff:\n\`\`\`diff\n${diff}\n\`\`\``;
if (diffTruncated) {
	userPrompt += `\n\n[Note: diff was truncated to ${MAX_DIFF_CHARS} characters]`;
}

// Call GitHub Models API
type LLMAnalysis = {
	needsChangeset: boolean;
	semverImpact: "none" | "patch" | "minor" | "major";
	reasoning: string;
	packages: string[];
	suggestedMessage: string;
};

const modelsRes = await fetch(
	"https://models.github.ai/inference/chat/completions",
	{
		method: "POST",
		headers: {
			Authorization: `Bearer ${GITHUB_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			model: MODEL,
			messages: [
				{ role: "system", content: systemPrompt },
				{ role: "user", content: userPrompt },
			],
			response_format: { type: "json_object" },
		}),
	},
);

if (!modelsRes.ok) {
	console.log(`GitHub Models API returned ${modelsRes.status}, exiting.`);
	process.exit(0);
}

const modelsData: {
	choices: Array<{ message: { content: string } }>;
} = await modelsRes.json();
const raw = modelsData.choices?.[0]?.message?.content;
if (!raw) {
	console.log("No content in LLM response, exiting.");
	process.exit(0);
}

let analysis: LLMAnalysis;
try {
	analysis = JSON.parse(raw);
} catch {
	// Try extracting JSON from markdown fences
	const fenceMatch = raw.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
	if (fenceMatch) {
		try {
			analysis = JSON.parse(fenceMatch[1]);
		} catch {
			console.log("Could not parse LLM response, exiting.");
			process.exit(0);
		}
	} else {
		console.log("Could not parse LLM response, exiting.");
		process.exit(0);
	}
}

// Compose review — only actionable cases remain
let reviewBody: string;

if (!analysis.needsChangeset) {
	console.log(`No changeset needed: ${analysis.reasoning}`);
	setOutput("REVIEW_EVENT", "none");
	setOutput("SEMVER_IMPACT", analysis.semverImpact);
	setOutput("NEEDS_CHANGESET", "false");
	process.exit(0);
} else if (existingChangesets.length === 0) {
	// Changeset needed but missing — draft one
	const packages = analysis.packages.length > 0 ? analysis.packages : ["package-name"];
	const frontmatter = packages
		.map((p) => `'${p}': ${analysis.semverImpact}`)
		.join("\n");

	reviewBody = `### Changeset Review

This PR includes user-facing changes but no changeset was found.

**Semver impact:** \`${analysis.semverImpact}\`
**Reasoning:** ${analysis.reasoning}

#### Suggested changeset

Create a file in \`.changeset/\` (e.g. \`.changeset/cool-changes.md\`):

\`\`\`markdown
---
${frontmatter}
---

${analysis.suggestedMessage}
\`\`\`

> **Tip:** Run \`pnpm changeset\` to create this interactively.

<sub>🤖 This is an automated analysis by <code>bombshell-bot</code>. Please review the suggestion and adjust as needed.</sub>`;
} else if (!analysis.suggestedMessage) {
	// Existing changeset looks good — nothing actionable
	console.log(`Existing changeset looks good: ${analysis.reasoning}`);
	setOutput("REVIEW_EVENT", "none");
	setOutput("SEMVER_IMPACT", analysis.semverImpact);
	setOutput("NEEDS_CHANGESET", "true");
	process.exit(0);
} else {
	// Changeset exists but needs revision
	const packages = analysis.packages.length > 0 ? analysis.packages : ["package-name"];
	const frontmatter = packages
		.map((p) => `'${p}': ${analysis.semverImpact}`)
		.join("\n");

	reviewBody = `### Changeset Review

The existing changeset could be improved.

**Expected semver impact:** \`${analysis.semverImpact}\`
**Reasoning:** ${analysis.reasoning}

#### Suggested revision

\`\`\`markdown
---
${frontmatter}
---

${analysis.suggestedMessage}
\`\`\`

<sub>🤖 This is an automated analysis by <code>bombshell-bot</code>. Please review and adjust as needed.</sub>`;
}

// Submit review as bombshell-bot
const submitRes = await fetch(
	`https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}/reviews`,
	{
		method: "POST",
		headers: {
			...ghHeaders,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			commit_id: HEAD_SHA,
			body: reviewBody,
			event: "COMMENT",
		}),
	},
);

if (!submitRes.ok) {
	const err = await submitRes.text();
	throw new Error(`Failed to submit review: ${submitRes.status} ${err}`);
}

console.log("Review submitted");
setOutput("REVIEW_EVENT", "COMMENT");
setOutput("SEMVER_IMPACT", analysis.semverImpact);
setOutput("NEEDS_CHANGESET", analysis.needsChangeset ? "true" : "false");
