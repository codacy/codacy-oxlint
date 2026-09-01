# No Conditional Tests (vitest)

**Pattern ID:** `vitest_no-conditional-tests`
**Plugin:** `vitest`

## What it does

The rule disallows the use of conditional statements within test cases to ensure that tests are deterministic and clearly readable.

## Why is this bad?

Conditional statements in test cases can make tests unpredictable and harder to understand. Tests should be consistent and straightforward to ensure reliable results and maintainability.

## Examples

Examples of incorrect code for this rule:
js
`describe("my tests", () => {
if (true) {
it("is awesome", () => {
doTheThing();
});
}
});`
Examples of correct code for this rule:
js
`describe("my tests", () => {
it("is awesome", () => {
doTheThing();
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-conditional-tests": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-conditional-tests": "error",
},
});`bash
`oxlint --deny vitest/no-conditional-tests --vitest-plugin`

## Version

This rule was added in v0.8.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_conditional_tests.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-conditional-tests)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-conditional-tests.html)
- [oxc project](https://github.com/oxc-project/oxc)