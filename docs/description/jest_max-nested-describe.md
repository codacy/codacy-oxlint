# Max Nested Describe (jest)

**Pattern ID:** `jest_max-nested-describe`
**Plugin:** `jest`

## What it does

This rule enforces a maximum depth to nested `describe()` calls.

## Why is this bad?

Nesting `describe()` blocks too deeply can make the test suite hard to read and understand.

## Examples

The following patterns are considered warnings (with the default option of `{ "max": 5 } `):
Examples of incorrect code for this rule:
javascript
`describe("foo", () => {
describe("bar", () => {
describe("baz", () => {
describe("qux", () => {
describe("quxx", () => {
describe("too many", () => {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
});
});
});
});
});
describe("foo", function () {
describe("bar", function () {
describe("baz", function () {
describe("qux", function () {
describe("quxx", function () {
describe("too many", function () {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
});
});
});
});
});`
Examples of correct code for this rule:
ts
`describe("foo", () => {
describe("bar", () => {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
describe("qux", () => {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
});
describe("foo2", function () {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
describe("foo", function () {
describe("bar", function () {
describe("baz", function () {
describe("qux", function () {
describe("this is the limit", function () {
it("should get something", () => {
expect(getSomething()).toBe("Something");
});
});
});
});
});
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/max-nested-describe": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/max-nested-describe": "error",
},
});`bash
`oxlint --deny jest/max-nested-describe --jest-plugin`

## Version

This rule was added in v0.4.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/max_nested_describe.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fmax-nested-describe)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/max-nested-describe.html)
- [oxc project](https://github.com/oxc-project/oxc)