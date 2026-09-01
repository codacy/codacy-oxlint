# Prefer Comparison Matcher (jest)

**Pattern ID:** `jest_prefer-comparison-matcher`
**Plugin:** `jest`

## What it does

This rule checks for comparisons in tests that could be replaced with one of the following built-in comparison matchers:
- `toBeGreaterThan`
- `toBeGreaterThanOrEqual`
- `toBeLessThan`
- `toBeLessThanOrEqual`

## Why is this bad?

Using generic matchers like `toBe(true)` with comparison expressions makes tests less readable and provides less helpful error messages when they fail. Jest's specific comparison matchers offer clearer intent and better error output that shows the actual values being compared.

## Examples

Examples of incorrect code for this rule:
js
`expect(x > 5).toBe(true);
expect(x < 7).not.toEqual(true);
expect(x <= y).toStrictEqual(true);`
Examples of correct code for this rule:
js
`expect(x).toBeGreaterThan(5);
expect(x).not.toBeLessThanOrEqual(7);
expect(x).toBeLessThanOrEqual(y);
// special case - see below
expect(x < "Carl").toBe(true);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-comparison-matcher": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-comparison-matcher": "error",
},
});`bash
`oxlint --deny jest/prefer-comparison-matcher --jest-plugin`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_comparison_matcher.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-comparison-matcher)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-comparison-matcher.html)
- [oxc project](https://github.com/oxc-project/oxc)