# No Standalone Expect (jest)

**Pattern ID:** `jest_no-standalone-expect`
**Plugin:** `jest`

## What it does

Prevents `expect` statements outside of a `test` or `it` block. An `expect` within a helper function (but outside of a `test` or `it` block) will not trigger this rule.
Statements like `expect.hasAssertions()` will NOT trigger this rule since these calls will execute if they are not in a test block.

## Why is this bad?

`expect` statements outside of test blocks will not be executed by the Jest test runner, which means they won't actually test anything. This can lead to false confidence in test coverage and may hide bugs that would otherwise be caught by proper testing.

## Examples

Examples of incorrect code for this rule:
javascript
`describe("a test", () => {
expect(1).toBe(1);
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-standalone-expect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-standalone-expect": "error",
},
});`bash
`oxlint --deny jest/no-standalone-expect --jest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_standalone_expect.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-standalone-expect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-standalone-expect.html)
- [oxc project](https://github.com/oxc-project/oxc)