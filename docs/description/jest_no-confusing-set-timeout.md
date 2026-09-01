# No Confusing Set Timeout (jest)

**Pattern ID:** `jest_no-confusing-set-timeout`
**Plugin:** `jest`

## What it does

Disallow confusing usages of `jest.setTimeout`.

## Why is this bad?

- being called anywhere other than in global scope
- being called multiple times
- being called after other Jest functions like hooks, `describe`, `test`, or `it`

## Examples

All of these are invalid case:
javascript
`escribe("test foo", () => {
jest.setTimeout(1000);
it("test-description", () => {
// test logic;
});
});
describe("test bar", () => {
it("test-description", () => {
jest.setTimeout(1000);
// test logic;
});
});
test("foo-bar", () => {
jest.setTimeout(1000);
});
describe("unit test", () => {
beforeEach(() => {
jest.setTimeout(1000);
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-confusing-set-timeout": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-confusing-set-timeout": "error",
},
});`bash
`oxlint --deny jest/no-confusing-set-timeout --jest-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_confusing_set_timeout.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-confusing-set-timeout.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-confusing-set-timeout)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-confusing-set-timeout.html)
- [oxc project](https://github.com/oxc-project/oxc)