# No Func Assign (eslint)

**Pattern ID:** `eslint_no-func-assign`
**Plugin:** `eslint`

## What it does

Disallow reassigning `function` declarations.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

Overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo() {}
foo = bar;`javascript
`function foo() {
foo = bar;
}`javascript
`let a = function hello() {
hello = 123;
};`
Examples of correct code for this rule:
javascript
`let foo = function () {};
foo = bar;`javascript
`function baz(baz) {
// `baz` is shadowed.
baz = bar;
}`
`function qux() {
const qux = bar;  // `qux` is shadowed.
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-func-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-func-assign": "error",
},
});`bash
`oxlint --deny no-func-assign`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_func_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-func-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-func-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-func-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)