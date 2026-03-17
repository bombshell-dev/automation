import { setOutput } from "./utils";

const { COMMIT_AUTHOR, COMMIT_ID, COMMIT_MESSAGE, GITHUB_REPO } = process.env;
if (!COMMIT_AUTHOR || !COMMIT_ID || !COMMIT_MESSAGE || !GITHUB_REPO) {
	throw new Error(
		`Missing input.\nRequired environment variables: COMMIT_AUTHOR, COMMIT_ID, COMMIT_MESSAGE, GITHUB_REPO\n\nAvailable environment variables: ${Object.keys(process.env).join(", ")}\n`,
	);
}
setDiscordMessage(COMMIT_AUTHOR, COMMIT_ID, COMMIT_MESSAGE, GITHUB_REPO);

function setDiscordMessage(author: string, id: string, commitMsg: string, repo: string) {
	const commitMessage = commitMsg
		.split("\n")[0]
		.replaceAll("`", "")
		.replaceAll("-", "–");

	const coAuthors = commitMsg
		.split("\n")
		.slice(2)
		.filter((line) => line.match(/Co-authored-by: (.+) <.+>/i))
		.map((line) => line.match(/Co-authored-by: (.+) <.+>/i)![1])
		.filter((name) => name !== "github-actions[bot]");

	let coAuthorThanks = "";
	if (coAuthors.length > 0) {
		const uniqueCoAuthors = [...new Set(coAuthors)];
		const names = formatAsCommaSeparatedList(uniqueCoAuthors);
		coAuthorThanks = `\n${getCoAuthorsMessage(names)}`;
	}

	const defaultEmoji = ["🎉", "🎊", "🧑‍🚀", "🥳", "🙌", "🚀"];
	const userEmoji = process.env.EMOJIS?.split(",");
	const emoji = pick(
		userEmoji && userEmoji.length > 0 ? userEmoji : defaultEmoji,
	);

	setOutput(
		"DISCORD_MESSAGE",
		`${emoji} **Merged!** ${author}: [\`${commitMessage}\`](<https://github.com/${repo}/commit/${id}>)${coAuthorThanks}`,
	);
}

function formatAsCommaSeparatedList(list: string[]) {
	if (list.length === 1) return list[0];
	return `${list.slice(0, -1).join(", ")} & ${list.at(-1)}`;
}

function pick(items: string[]) {
	return items[Math.floor(Math.random() * items.length)];
}

function getCoAuthorsMessage(names: string) {
	let messages: string[] = [];
	try {
		messages = JSON.parse(process.env.COAUTHOR_TEMPLATES || "[]");
	} catch (err) {
		console.error(
			"Failed to parse `COAUTHOR_TEMPLATES` as JSON. Falling back to default templates.\n ",
			err,
		);
	}
	if (!messages || messages.length === 0) {
		messages = [
			"Thanks <names> for helping! ✨",
			"<names> stepped up to lend a hand — thank you! 🙌",
			"<names> with the assist! 💪",
			"Couldn't have done this without <names>! 💜",
			"Made even better by <names>! 🚀",
			"And the team effort award goes to… <names>! 🏆",
			"Featuring contributions by <names>! 🌟",
		];
	}
	const chosenMessage = pick(messages);
	return `_${chosenMessage.replace("<names>", names).trim()}_`;
}
