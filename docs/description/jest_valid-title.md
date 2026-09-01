# Valid Title (jest)

**Pattern ID:** `jest_valid-title`
**Plugin:** `jest`

## What it does

Checks that the titles of Jest and Vitest blocks are valid.
Titles must be:
- not empty,
- strings,
- not prefixed with their block name,
- have no leading or trailing spaces.

## Why is this bad?

Titles that are not valid can be misleading and make it harder to understand the purpose of the test.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("", () => {});
describe("foo", () => {
it("", () => {});
});
it("", () => {});
test("", () => {});
xdescribe("", () => {});
xit("", () => {});
xtest("", () => {});`
Examples of correct code for this rule:
javascript
`describe("foo", () => {});
it("bar", () => {});
test("baz", () => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/valid-title": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/valid-title": "error",
},
});`bash
`oxlint --deny jest/valid-title --jest-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/valid_title.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fvalid-title)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-title.html)
- [oxc project](https://github.com/oxc-project/oxc)