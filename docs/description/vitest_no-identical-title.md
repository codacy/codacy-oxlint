# No Identical Title (vitest)

**Pattern ID:** `vitest_no-identical-title`
**Plugin:** `vitest`

## What it does

This rule looks at the title of every test and test suite. It will report when two test suites or two test cases at the same level of a test suite have the same title.

## Why is this bad?

Having identical titles for two different tests or test suites may create confusion. For example, when a test with the same title as another test in the same test suite fails, it is harder to know which one failed and thus harder to fix.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("baz", () => {
//...
});
describe("baz", () => {
// Has the same title as a previous test suite
// ...
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-identical-title": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-identical-title": "error",
},
});`bash
`oxlint --deny vitest/no-identical-title --vitest-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_identical_title.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-identical-title)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-identical-title.html)
- [oxc project](https://github.com/oxc-project/oxc)