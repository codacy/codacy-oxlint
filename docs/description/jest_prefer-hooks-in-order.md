# Prefer Hooks In Order (jest)

**Pattern ID:** `jest_prefer-hooks-in-order`
**Plugin:** `jest`

## What it does

Ensures that hooks are in the order that they are called in.

## Why is this bad?

While hooks can be setup in any order, they're always called by `jest` in this specific order:
- `beforeAll`
- `beforeEach`
- `afterEach`
- `afterAll`
This rule aims to make that more obvious by enforcing grouped hooks be setup in that order within tests.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("foo", () => {
beforeEach(() => {
seedMyDatabase();
});
beforeAll(() => {
createMyDatabase();
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
it("accepts that input", () => {
// ...
});
it("throws an error", () => {
// ...
});
beforeEach(() => {
mockLogger();
});
afterEach(() => {
clearLogger();
});
it("logs a message", () => {
// ...
});
});
afterAll(() => {
removeMyDatabase();
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-hooks-in-order": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-hooks-in-order": "error",
},
});`bash
`oxlint --deny jest/prefer-hooks-in-order --jest-plugin`

## Version

This rule was added in v0.6.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_hooks_in_order.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-hooks-in-order)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-hooks-in-order.html)
- [oxc project](https://github.com/oxc-project/oxc)