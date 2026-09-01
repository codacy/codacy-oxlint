# Require To Throw Message (jest)

**Pattern ID:** `jest_require-to-throw-message`
**Plugin:** `jest`

## What it does

This rule triggers a warning if `toThrow()` or `toThrowError()` is used without an error message.

## Why is this bad?

Using `toThrow()` or `toThrowError()` without specifying an expected error message makes tests less specific and harder to debug. When a test only checks that an error was thrown but not what kind of error, it can pass even when the wrong error is thrown, potentially hiding bugs. Providing an expected error message or error type makes tests more precise and helps catch regressions more effectively.

## Examples

Examples of incorrect code for this rule:
javascript
`test("all the things", async () => {
expect(() => a()).toThrow();
expect(() => a()).toThrowError();
await expect(a()).rejects.toThrow();
await expect(a()).rejects.toThrowError();
});`
Examples of correct code for this rule:
javascript
`test("all the things", async () => {
expect(() => a()).toThrow("a");
expect(() => a()).toThrowError("a");
await expect(a()).rejects.toThrow("a");
await expect(a()).rejects.toThrowError("a");
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/require-to-throw-message": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/require-to-throw-message": "error",
},
});`bash
`oxlint --deny jest/require-to-throw-message --jest-plugin`

## Version

This rule was added in v0.2.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/require_to_throw_message.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Frequire-to-throw-message)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/require-to-throw-message.html)
- [oxc project](https://github.com/oxc-project/oxc)