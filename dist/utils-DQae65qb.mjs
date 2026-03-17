import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as os from "node:os";
//#region src/utils.ts
/** Based on https://github.com/actions/toolkit/blob/4e3b068ce116d28cb840033c02f912100b4592b0/packages/core/src/file-command.ts */
function setOutput(key, value) {
	if (process.env.GITHUB_OUTPUT || "") return issueFileCommand("OUTPUT", prepareKeyValueMessage(key, value));
	process.stdout.write(os.EOL);
}
function issueFileCommand(command, message) {
	const filePath = process.env[`GITHUB_${command}`];
	if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
	if (!fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
	fs.appendFileSync(filePath, `${toCommandValue(message)}${os.EOL}`, { encoding: "utf8" });
}
function prepareKeyValueMessage(key, value) {
	const delimiter = `gh-delimiter-${crypto.randomUUID()}`;
	const convertedValue = toCommandValue(value);
	if (key.includes(delimiter)) throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
	if (convertedValue.includes(delimiter)) throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
	return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
function toCommandValue(input) {
	if (input === null || input === void 0) return "";
	if (typeof input === "string" || input instanceof String) return input;
	return JSON.stringify(input);
}
//#endregion
export { setOutput as t };

//# sourceMappingURL=utils-DQae65qb.mjs.map