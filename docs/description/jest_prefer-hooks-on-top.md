# Prefer Hooks On Top (jest)

**Pattern ID:** `jest_prefer-hooks-on-top`
**Plugin:** `jest`

## What it does

While hooks can be setup anywhere in a test file, they are always called in a specific order, which means it can be confusing if they're intermixed with test cases.

## Why is this bad?

When hooks are mixed with test cases, it becomes harder to understand the test setup and execution order. This can lead to confusion about which hooks apply to which tests and when they run. Grouping hooks at the top of each `describe` block makes the test structure clearer and more maintainable.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("foo", () => {
beforeEach(() => {
seedMyDatabase();
});
it("accepts this input", () => {
// ...
});
beforeAll(() => {
createMyDatabase();
});
it("returns that value", () => {
// ...
});
describe("when the database has specific values", () => {
const specificValue = "...";
beforeEach(() => {
seedMyDatabase(specificValue);
});
it("accepts that input", () => {
// ...
});
it("throws an error", () => {
// ...
});
afterEach(() => {
clearLogger();
});
beforeEach(() => {
mockLogger();
});
it("logs a message", () => {
// ...
});
});
afterAll(() => {
removeMyDatabase();
});
});`
Examples of correct code for this rule:
javascript
`describe("foo", () => {
beforeAll(() => {
createMyDatabase();
});
beforeEach(() => {
seedMyDatabase();
});
afterAll(() => {
clearMyDatabase();
});
it("accepts this input", () => {
// ...
});
it("returns that value", () => {
// ...
});
describe("when the database has specific values", () => {
const specificValue = "...";
beforeEach(() => {
seedMyDatabase(specificValue);
});
beforeEach(() => {
mockLogger();
});
afterEach(() => {
clearLogger();
});
it("accepts that input", () => {
// ...
});
it("throws an error", () => {
// ...
});
it("logs a message", () => {
// ...
});
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-hooks-on-top": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-hooks-on-top": "error",
},
});`bash
`oxlint --deny jest/prefer-hooks-on-top --jest-plugin`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_hooks_on_top.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-hooks-on-top)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-hooks-on-top.html)
- [oxc project](https://github.com/oxc-project/oxc)