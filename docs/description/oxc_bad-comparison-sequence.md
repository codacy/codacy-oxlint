# Bad Comparison Sequence (oxc)

**Pattern ID:** `oxc_bad-comparison-sequence`
**Plugin:** `oxc`

## What it does

This rule applies when the comparison operator is applied two or more times in a row.

## Why is this bad?

Because comparison operator is a binary operator, it is impossible to compare three or more operands at once. If comparison operator is used to compare three or more operands, only the first two operands are compared and the rest is compared with its result of boolean type.

## Examples

Examples of incorrect code for this rule:
javascript
`if ((a == b) == c) {
console.log("a, b, and c are the same");
}`
Examples of correct code for this rule:
javascript
`if (a == b && b == c) {
console.log("a, b, and c are the same");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-comparison-sequence": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-comparison-sequence": "error",
},
});`bash
`oxlint --deny oxc/bad-comparison-sequence`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_comparison_sequence.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-comparison-sequence)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html)
- [oxc project](https://github.com/oxc-project/oxc)