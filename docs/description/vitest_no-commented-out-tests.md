# No Commented Out Tests (vitest)

**Pattern ID:** `vitest_no-commented-out-tests`
**Plugin:** `vitest`

## What it does

This rule raises a warning about commented-out tests. It's similar to the `no-disabled-tests` rule.

## Why is this bad?

You may forget to uncomment some tests. This rule raises a warning about commented-out tests.
It is generally better to skip a test if it's flaky, or remove it if it's no longer needed.

## Examples

Examples of incorrect code for this rule:
javascript
`// describe('foo', () => {});
// it('foo', () => {});
// test('foo', () => {});
// describe.skip('foo', () => {});
// it.skip('foo', () => {});
// test.skip('foo', () => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-commented-out-tests": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-commented-out-tests": "error",
},
});`bash
`oxlint --deny vitest/no-commented-out-tests --vitest-plugin`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_commented_out_tests.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-commented-out-tests)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-commented-out-tests.html)
- [oxc project](https://github.com/oxc-project/oxc)