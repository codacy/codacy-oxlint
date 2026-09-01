# No Duplicate Hooks (jest)

**Pattern ID:** `jest_no-duplicate-hooks`
**Plugin:** `jest`

## What it does

Disallows duplicate hooks in describe blocks.

## Why is this bad?

Having duplicate hooks in a describe block can lead to confusion and unexpected behavior. When multiple hooks of the same type exist, they all execute in order, which can make it difficult to understand the test setup flow and may result in redundant or conflicting operations. This makes tests harder to maintain and debug.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("foo", () => {
beforeEach(() => {
// some setup
});
beforeEach(() => {
// some setup
});
test("foo_test", () => {
// some test
});
});
// Nested describe scenario
describe("foo", () => {
beforeEach(() => {
// some setup
});
test("foo_test", () => {
// some test
});
describe("bar", () => {
test("bar_test", () => {
afterAll(() => {
// some teardown
});
afterAll(() => {
// some teardown
});
});
});
});`
Examples of correct code for this rule:
javascript
`describe("foo", () => {
beforeEach(() => {
// some setup
});
test("foo_test", () => {
// some test
});
});
// Nested describe scenario
describe("foo", () => {
beforeEach(() => {
// some setup
});
test("foo_test", () => {
// some test
});
describe("bar", () => {
test("bar_test", () => {
beforeEach(() => {
// some setup
});
});
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-duplicate-hooks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-duplicate-hooks": "error",
},
});`bash
`oxlint --deny jest/no-duplicate-hooks --jest-plugin`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_duplicate_hooks.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-duplicate-hooks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-duplicate-hooks.html)
- [oxc project](https://github.com/oxc-project/oxc)