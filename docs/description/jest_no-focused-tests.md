# No Focused Tests (jest)

**Pattern ID:** `jest_no-focused-tests`
**Plugin:** `jest`

## What it does

This rule reminds you to remove `.only` from your tests by raising a warning whenever you are using the exclusivity feature.

## Why is this bad?

Jest has a feature that allows you to focus tests by appending `.only` or prepending `f` to a test-suite or a test-case. This feature is really helpful to debug a failing test, so you don’t have to execute all of your tests. After you have fixed your test and before committing the changes you have to remove `.only` to ensure all tests are executed on your build system.

## Examples

Examples of incorrect code for this rule:
javascript
`describe.only("foo", () => {});
it.only("foo", () => {});
describe["only"]("bar", () => {});
it["only"]("bar", () => {});
test.only("foo", () => {});
test["only"]("bar", () => {});
fdescribe("foo", () => {});
fit("foo", () => {});
fit.each`
table
`();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-focused-tests": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-focused-tests": "error",
},
});`bash
`oxlint --deny jest/no-focused-tests --jest-plugin`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_focused_tests.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-focused-tests)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-focused-tests.html)
- [oxc project](https://github.com/oxc-project/oxc)