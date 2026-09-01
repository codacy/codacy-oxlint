# No Inner Declarations (eslint)

**Pattern ID:** `eslint_no-inner-declarations`
**Plugin:** `eslint`

## What it does

Disallow variable or function declarations in nested blocks.

## Why is this bad?

A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks. This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity. Note that block bindings (let, const) are not hoisted and therefore they are not affected by this rule.

## Examples

Examples of incorrect code for this rule:
javascript
`if (test) {
function doSomethingElse() {}
}`
Examples of correct code for this rule:
javascript
`function doSomethingElse() {}
if (test) {
// your code here
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-inner-declarations": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-inner-declarations": "error",
},
});`bash
`oxlint --deny no-inner-declarations`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_inner_declarations.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-inner-declarations)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-inner-declarations)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html)
- [oxc project](https://github.com/oxc-project/oxc)