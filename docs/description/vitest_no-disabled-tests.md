# No Disabled Tests (vitest)

**Pattern ID:** `vitest_no-disabled-tests`
**Plugin:** `vitest`

## What it does

This rule raises a warning about disabled tests.

## Why is this bad?

Jest has a feature that allows you to temporarily mark tests as disabled. This feature is often helpful while debugging or to create placeholders for future tests. Before committing changes we may want to check that all tests are running.

## Examples

js
`describe.skip("foo", () => {});
it.skip("foo", () => {});
test.skip("foo", () => {});
describe["skip"]("bar", () => {});
it["skip"]("bar", () => {});
test["skip"]("bar", () => {});
xdescribe("foo", () => {});
xit("foo", () => {});
xtest("foo", () => {});
it("bar");
test("bar");
it("foo", () => {
pending();
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-disabled-tests": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-disabled-tests": "error",
},
});`bash
`oxlint --deny vitest/no-disabled-tests --vitest-plugin`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_disabled_tests.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-disabled-tests)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-disabled-tests.html)
- [oxc project](https://github.com/oxc-project/oxc)