# No Jasmine Globals (jest)

**Pattern ID:** `jest_no-jasmine-globals`
**Plugin:** `jest`

## What it does

This rule reports on any usage of Jasmine globals, which are not ported to Jest, and suggests alternatives from Jest's own API.

## Why is this bad?

When migrating from Jasmine to Jest, relying on Jasmine-specific globals creates compatibility issues and prevents taking advantage of Jest's improved testing features and better error reporting.

## Examples

Examples of incorrect code for this rule:
javascript
`jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
test("my test", () => {
pending();
});
test("my test", () => {
jasmine.createSpy();
});`
Examples of correct code for this rule:
javascript
`jest.setTimeout(5000);
test("my test", () => {
// Use test.skip() instead of pending()
});
test.skip("my test", () => {
// Skipped test
});
test("my test", () => {
jest.fn(); // Use jest.fn() instead of jasmine.createSpy()
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-jasmine-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-jasmine-globals": "error",
},
});`bash
`oxlint --deny jest/no-jasmine-globals --jest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_jasmine_globals.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-jasmine-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-jasmine-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)