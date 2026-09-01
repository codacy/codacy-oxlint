# Consistent Test Filename (vitest)

**Pattern ID:** `vitest_consistent-test-filename`
**Plugin:** `vitest`

## What it does

This rule triggers an error when a file is considered a test file, but its name does not match an expected filename format.

## Why is this bad?

Files that are tests but with an unexpected filename make it hard to distinguish between source code files and test files.

## Examples

An example of an incorrect file path for this rule configured as `{"allTestPattern": "__tests__", "pattern": ".*\.spec\.ts$"}`:
`__tests__/2.ts`
An example of a correct file path for this rule configured as `{"allTestPattern": "__tests__", "pattern": ".*\.spec\.ts$"}`:
`__tests__/2.spec.ts`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/consistent-test-filename": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/consistent-test-filename": "error",
},
});`bash
`oxlint --deny vitest/consistent-test-filename --vitest-plugin`

## Version

This rule was added in v1.36.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/consistent_test_filename.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fconsistent-test-filename)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-filename.html)
- [oxc project](https://github.com/oxc-project/oxc)