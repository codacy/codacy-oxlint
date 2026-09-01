# No Nested Ternary (eslint)

**Pattern ID:** `eslint_no-nested-ternary`
**Plugin:** `eslint`

## What it does

Disallow nested ternary expressions.

## Why is this bad?

Nested ternary expressions make code harder to read and understand. Nesting of these expressions can lead to complex logic that is difficult to understand.

## Examples

Examples of incorrect code for this rule:
js
`const result = condition1 ? (condition2 ? "a" : "b") : "c";`
Examples of correct code for this rule:
js
`let result;
if (condition1) {
result = condition2 ? "a" : "b";
} else {
result = "c";
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-nested-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-nested-ternary": "error",
},
});`bash
`oxlint --deny no-nested-ternary`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_nested_ternary.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-nested-ternary)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-nested-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nested-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)