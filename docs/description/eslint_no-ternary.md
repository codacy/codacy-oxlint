# No Ternary (eslint)

**Pattern ID:** `eslint_no-ternary`
**Plugin:** `eslint`

## What it does

Disallow ternary operators.

## Why is this bad?

The ternary operator is used to conditionally assign a value to a variable. Some believe that the use of ternary operators leads to unclear code.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = isBar ? baz : qux;`javascript
`function quux() {
return foo ? bar() : baz();
}`
Examples of correct code for this rule:
javascript
`let foo;
if (isBar) {
foo = baz;
} else {
foo = qux;
}`javascript
`function quux() {
if (foo) {
return bar();
} else {
return baz();
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-ternary": "error",
},
});`bash
`oxlint --deny no-ternary`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_ternary.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-ternary)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)