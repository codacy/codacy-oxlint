# Prefer Lowercase Title (vitest)

**Pattern ID:** `vitest_prefer-lowercase-title`
**Plugin:** `vitest`

## What it does

Enforce `it`, `test`, `describe`, and `bench` to have descriptions that begin with a lowercase letter. This provides more readable test failures.

## Why is this bad?

Lowercase messages for test failures generally result in more grammatically correct failure messages when you have a test failure.

## Examples

Examples of incorrect code for this rule:
javascript
`it("Adds 1 + 2 to equal 3", () => {
expect(sum(1, 2)).toBe(3);
});`
Examples of correct code for this rule:
javascript
`it("adds 1 + 2 to equal 3", () => {
expect(sum(1, 2)).toBe(3);
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-lowercase-title": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-lowercase-title": "error",
},
});`bash
`oxlint --deny vitest/prefer-lowercase-title --vitest-plugin`

## Version

This rule was added in v0.15.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_lowercase_title.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-lowercase-title)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-lowercase-title.html)
- [oxc project](https://github.com/oxc-project/oxc)