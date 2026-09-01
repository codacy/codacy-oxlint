# No Eq Null (eslint)

**Pattern ID:** `eslint_no-eq-null`
**Plugin:** `eslint`

## What it does

Disallow `null` comparisons without type-checking operators.

## Why is this bad?

Comparing to `null` without a type-checking operator (`==` or `!=`), can have unintended results as the comparison will evaluate to `true` when comparing to not just a `null`, but also an `undefined` value.

## Examples

Examples of incorrect code for this rule:
js
`if (foo == null) {
bar();
}
if (baz != null) {
bar();
}`
Examples of correct code for this rule:
js
`if (foo === null) {
bar();
}
if (baz !== null) {
bar();
}
if (bang === undefined) {
bar();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-eq-null": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-eq-null": "error",
},
});`bash
`oxlint --deny no-eq-null`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_eq_null.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-eq-null)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-eq-null)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eq-null.html)
- [oxc project](https://github.com/oxc-project/oxc)