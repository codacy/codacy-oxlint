# Double Comparisons (oxc)

**Pattern ID:** `oxc_double-comparisons`
**Plugin:** `oxc`

## What it does

This rule checks for double comparisons in logical expressions.

## Why is this bad?

Redundant comparisons can be confusing and make code harder to understand.

## Examples

Examples of incorrect code for this rule:
javascript
`x === y || x < y;
x < y || x === y;`
Examples of correct code for this rule:
javascript
`x <= y;
x >= y;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/double-comparisons": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/double-comparisons": "error",
},
});`bash
`oxlint --deny oxc/double-comparisons`

## Version

This rule was added in v0.0.22.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/double_comparisons.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fdouble-comparisons)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html)
- [oxc project](https://github.com/oxc-project/oxc)