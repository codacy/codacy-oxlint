# No Self Compare (eslint)

**Pattern ID:** `eslint_no-self-compare`
**Plugin:** `eslint`

## What it does

Disallow comparisons where both sides are exactly the same.

## Why is this bad?

Comparing a variable against itself is usually an error, either a typo or refactoring error. It is confusing to the reader and may potentially introduce a runtime error.

## Examples

Examples of incorrect code for this rule:
javascript
`var x = 10;
if (x === x) {
x = 20;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-self-compare": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-self-compare": "error",
},
});`bash
`oxlint --deny no-self-compare`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_self_compare.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-self-compare)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-self-compare)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-compare.html)
- [oxc project](https://github.com/oxc-project/oxc)