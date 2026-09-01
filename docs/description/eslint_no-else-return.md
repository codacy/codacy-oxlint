# No Else Return (eslint)

**Pattern ID:** `eslint_no-else-return`
**Plugin:** `eslint`

## What it does

Disallow `else` blocks after `return` statements in `if` statements.

## Why is this bad?

If an `if` block contains a `return` statement, the `else` block becomes unnecessary. Its contents can be placed outside of the block.
javascript
`function foo() {
if (x) {
return y;
} else {
return z;
}
}`
This rule is aimed at highlighting an unnecessary block of code following an `if` containing a return statement. As such, it will warn when it encounters an `else` following a chain of `if`s, all of them containing a `return` statement.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-else-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-else-return": "error",
},
});`bash
`oxlint --deny no-else-return`

## Version

This rule was added in v0.9.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_else_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-else-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-else-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html)
- [oxc project](https://github.com/oxc-project/oxc)