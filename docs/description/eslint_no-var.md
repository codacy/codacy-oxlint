# No Var (eslint)

**Pattern ID:** `eslint_no-var`
**Plugin:** `eslint`

## What it does

ECMAScript 2015 allows programmers to create variables with block scope instead of function scope using the `let` and `const` keywords. Block scope is common in many other programming languages and helps programmers avoid mistakes.

## Why is this bad?

Using `var` in an ES2015 environment triggers this error

## Examples

Examples of incorrect code for this rule:
javascript
`var x = "y";
var CONFIG = {};`
Examples of correct code for this rule:
javascript
`let x = "y";
const CONFIG = {};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-var": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-var": "error",
},
});`bash
`oxlint --deny no-var`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_var.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-var)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-var)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html)
- [oxc project](https://github.com/oxc-project/oxc)