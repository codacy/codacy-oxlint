# Prefer Math Min Max (unicorn)

**Pattern ID:** `unicorn_prefer-math-min-max`
**Plugin:** `unicorn`

## What it does

Prefers use of `Math.min()` and `Math.max()` instead of ternary expressions when performing simple comparisons.

## Why is this bad?

Using `Math.min()` and `Math.max()` for simple comparisons is more concise, easier to understand, and less prone to errors than ternary expressions. They clearly express the intent to find the minimum or maximum value.

## Examples

Examples of incorrect code for this rule:
javascript
`height > 50 ? 50 : height;
height > 50 ? height : 50;`
Examples of correct code for this rule:
javascript
`Math.min(height, 50);
Math.max(height, 50);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-math-min-max": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-math-min-max": "error",
},
});`bash
`oxlint --deny unicorn/prefer-math-min-max`

## Version

This rule was added in v0.10.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_math_min_max.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-math-min-max)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html)
- [oxc project](https://github.com/oxc-project/oxc)