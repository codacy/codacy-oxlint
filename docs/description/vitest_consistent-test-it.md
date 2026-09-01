# Consistent Test It (vitest)

**Pattern ID:** `vitest_consistent-test-it`
**Plugin:** `vitest`

## What it does

Vitest allows you to choose how you want to define your tests, using the `it` or the `test` keywords, with multiple permutations for each:
- it: `it`, `it.only`, `it.skip`, `it.concurrent`, `it.each`.
- test: `test`, `test.only`, `test.skip`, `test.concurrent`, `test.each`.

## Why is this bad?

It's a good practice to be consistent in your test suite, so that all tests are written in the same way.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/consistent-test-it": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/consistent-test-it": "error",
},
});`bash
`oxlint --deny vitest/consistent-test-it --vitest-plugin`

## Version

This rule was added in v0.5.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/consistent_test_it.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fconsistent-test-it)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-it.html)
- [oxc project](https://github.com/oxc-project/oxc)