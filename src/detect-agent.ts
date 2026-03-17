import { identifyReplicant } from "voight-kampff-test";
import { setOutput } from "./utils";

const { GITHUB_TOKEN, PR_AUTHOR } = process.env;
if (!GITHUB_TOKEN || !PR_AUTHOR) {
	throw new Error(
		`Missing input.\nRequired environment variables: GITHUB_TOKEN, PR_AUTHOR\n`,
	);
}

const headers = {
	Accept: "application/vnd.github+json",
	Authorization: `Bearer ${GITHUB_TOKEN}`,
	"X-GitHub-Api-Version": "2022-11-28",
};

const userRes = await fetch(`https://api.github.com/users/${PR_AUTHOR}`, {
	headers,
});
if (!userRes.ok) {
	throw new Error(`Failed to fetch user ${PR_AUTHOR}: ${userRes.status}`);
}
const user = await userRes.json();

// Fetch up to 2 pages of public events (200 max)
const events = [];
for (let page = 1; page <= 2; page++) {
	const eventsRes = await fetch(
		`https://api.github.com/users/${PR_AUTHOR}/events/public?per_page=100&page=${page}`,
		{ headers },
	);
	if (!eventsRes.ok) break;
	const pageEvents = await eventsRes.json();
	events.push(...pageEvents);
	if (pageEvents.length < 100) break;
}

const { classification, score, flags } = identifyReplicant({
	accountName: PR_AUTHOR,
	reposCount: user.public_repos,
	createdAt: user.created_at,
	events,
});

console.log(`Classification: ${classification} (score: ${score})`);
for (const flag of flags) {
	console.log(`  [${flag.points > 0 ? "+" : ""}${flag.points}] ${flag.label}: ${flag.detail}`);
}

setOutput("CLASSIFICATION", classification);
setOutput("SCORE", String(score));
setOutput("IS_AGENT", classification === "automation" ? "true" : "false");

const flagsTable = flags
	.map((f) => `| ${f.label} | ${f.points > 0 ? "+" : ""}${f.points} | ${f.detail} |`)
	.join("\n");
setOutput("COMMENT", `### 🤖 Automated account detected

[@${PR_AUTHOR}](https://github.com/${PR_AUTHOR}) has been flagged as a likely automated account.

**Classification:** \`${classification}\` (score: ${score})

| Signal | Points | Detail |
|--------|--------|--------|
${flagsTable}

<sub>Analyzed ${events.length} public events via <a href="https://www.npmjs.com/package/voight-kampff-test">voight-kampff-test</a></sub>`);
