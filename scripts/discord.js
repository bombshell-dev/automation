const {
	GITHUB_ACTION,
	GITHUB_EVENT_NAME,
	GITHUB_EVENT_PATH,
	DISCORD_WEBHOOK,
	DISCORD_MESSAGE,
	DISCORD_USERNAME,
	DISCORD_AVATAR,
} = process.env;
if (!GITHUB_ACTION || !DISCORD_WEBHOOK) {
	throw new Error(
		`Missing input.\nRequired environment variables: GITHUB_ACTION, GITHUB_EVENT_NAME, DISCORD_WEBHOOK\n\nAvailable environment variables: ${Object.keys(
			process.env,
		).join(", ")}\n`,
	);
}

const body = {
	content: DISCORD_MESSAGE,
};
if (DISCORD_USERNAME) {
	body.username = DISCORD_USERNAME;
}
if (DISCORD_AVATAR) {
	body.avatar_url = DISCORD_AVATAR;
}
const headers = {
	"Content-Type": "application/json",
	"X-GitHub-Event": GITHUB_EVENT_NAME,
};

await fetch(`${DISCORD_WEBHOOK}?wait=true`, {
	body: JSON.stringify(body),
	headers,
});
