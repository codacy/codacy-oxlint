# Prefer Modern Math Apis (unicorn)

**Pattern ID:** `unicorn_prefer-modern-math-apis`
**Plugin:** `unicorn`

## What it does

Checks for usage of legacy patterns for mathematical operations.

## Why is this bad?

Modern JavaScript provides more concise and readable alternatives to legacy patterns.
Currently, the following cases are checked:
- Prefer `Math.log10(x)` over alternatives
- Prefer `Math.hypot(…)` over alternatives

## Examples

Examples of incorrect code for this rule:
javascript
`Math.log(x) * Math.LOG10E;
Math.sqrt(a * a + b * b);`
Examples of correct code for this rule:
javascript
`Math.log10(x);
Math.hypot(a, b);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-modern-math-apis": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-modern-math-apis": "error",
},
});`bash
`oxlint --deny unicorn/prefer-modern-math-apis`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_modern_math_apis.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-modern-math-apis)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-math-apis.html)
- [oxc project](https://github.com/oxc-project/oxc)