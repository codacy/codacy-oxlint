# No Label Var (eslint)

**Pattern ID:** `eslint_no-label-var`
**Plugin:** `eslint`

## What it does

Disallow labels that share a name with a variable.

## Why is this bad?

This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.

## Examples

Examples of incorrect code for this rule:
js
`var x = foo;
function bar() {
x: for (;;) {
break x;
}
}`
Examples of correct code for this rule:
js
`// The variable that has the same name as the label is not in scope.
function foo() {
var q = t;
}
function bar() {
q: for (;;) {
break q;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-label-var": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-label-var": "error",
},
});`bash
`oxlint --deny no-label-var`

## Version

This rule was added in v0.6.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_label_var.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-label-var)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-label-var)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-label-var.html)
- [oxc project](https://github.com/oxc-project/oxc)