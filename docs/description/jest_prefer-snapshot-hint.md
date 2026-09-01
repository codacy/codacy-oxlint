# Prefer Snapshot Hint (jest)

**Pattern ID:** `jest_prefer-snapshot-hint`
**Plugin:** `jest`

## What it does

Enforces including a hint string with snapshot matchers (toMatchSnapshot and toThrowErrorMatchingSnapshot).

## Why is this bad?

Auto-numbered snapshot names are fragile — adding or reordering assertions shifts all subsequent numbers, causing unrelated snapshots to appear changed and obscuring real differences in code review.

## Examples

Examples of incorrect code for this rule configured as `always`:
js
`const snapshotOutput = ({ stdout, stderr }) => {
expect(stdout).toMatchSnapshot();
expect(stderr).toMatchSnapshot();
};
describe("cli", () => {
describe("--version flag", () => {
it("prints the version", async () => {
snapshotOutput(await runCli(["--version"]));
});
});
describe("--config flag", () => {
it("reads the config", async () => {
const { stdout, parsedConfig } = await runCli(["--config", "jest.config.js"]);
expect(stdout).toMatchSnapshot();
expect(parsedConfig).toMatchSnapshot();
});
it("prints nothing to stderr", async () => {
const { stderr } = await runCli(["--config", "jest.config.js"]);
expect(stderr).toMatchSnapshot();
});
describe("when the file does not exist", () => {
it("throws an error", async () => {
await expect(
runCli(["--config", "does-not-exist.js"]),
).rejects.toThrowErrorMatchingSnapshot();
});
});
});
});`
Examples of incorrect code for this rule configured as `multi`:
js
`const snapshotOutput = ({ stdout, stderr }) => {
expect(stdout).toMatchSnapshot();
expect(stderr).toMatchSnapshot();
};
describe("cli", () => {
describe("--version flag", () => {
it("prints the version", async () => {
snapshotOutput(await runCli(["--version"]));
});
});
describe("--config flag", () => {
it("reads the config", async () => {
const { stdout, parsedConfig } = await runCli(["--config", "jest.config.js"]);
expect(stdout).toMatchSnapshot();
expect(parsedConfig).toMatchSnapshot();
});
it("prints nothing to stderr", async () => {
const { stderr } = await runCli(["--config", "jest.config.js"]);
expect(stderr).toMatchSnapshot();
});
});
});`
Examples of correct code for this rule configured as `always`:
js
`const snapshotOutput = ({ stdout, stderr }, hints) => {
expect(stdout).toMatchSnapshot({}, `stdout: ${hints.stdout}`);
expect(stderr).toMatchSnapshot({}, `stderr: ${hints.stderr}`);
};
describe("cli", () => {
describe("--version flag", () => {
it("prints the version", async () => {
snapshotOutput(await runCli(["--version"]), {
stdout: "version string",
stderr: "empty",
});
});
});
describe("--config flag", () => {
it("reads the config", async () => {
const { stdout } = await runCli(["--config", "jest.config.js"]);
expect(stdout).toMatchSnapshot({}, "stdout: config settings");
});
it("prints nothing to stderr", async () => {
const { stderr } = await runCli(["--config", "jest.config.js"]);
expect(stderr).toMatchInlineSnapshot();
});
describe("when the file does not exist", () => {
it("throws an error", async () => {
await expect(
runCli(["--config", "does-not-exist.js"]),
).rejects.toThrowErrorMatchingSnapshot("stderr: config error");
});
});
});
});`
Examples of correct code for this rule configured as `multi`:
js
`const snapshotOutput = ({ stdout, stderr }, hints) => {
expect(stdout).toMatchSnapshot({}, `stdout: ${hints.stdout}`);
expect(stderr).toMatchSnapshot({}, `stderr: ${hints.stderr}`);
};
describe("cli", () => {
describe("--version flag", () => {
it("prints the version", async () => {
snapshotOutput(await runCli(["--version"]), {
stdout: "version string",
stderr: "empty",
});
});
});
describe("--config flag", () => {
it("reads the config", async () => {
const { stdout } = await runCli(["--config", "jest.config.js"]);
expect(stdout).toMatchSnapshot();
});
it("prints nothing to stderr", async () => {
const { stderr } = await runCli(["--config", "jest.config.js"]);
expect(stderr).toMatchInlineSnapshot();
});
describe("when the file does not exist", () => {
it("throws an error", async () => {
await expect(
runCli(["--config", "does-not-exist.js"]),
).rejects.toThrowErrorMatchingSnapshot();
});
});
});
});`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-snapshot-hint": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-snapshot-hint": "error",
},
});`bash
`oxlint --deny jest/prefer-snapshot-hint --jest-plugin`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_snapshot_hint.rs)
- [Upstrea
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-snapshot-hint.html)
- [oxc project](https://github.com/oxc-project/oxc)