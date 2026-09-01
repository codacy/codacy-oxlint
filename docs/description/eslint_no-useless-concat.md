# No Useless Concat (eslint)

**Pattern ID:** `eslint_no-useless-concat`
**Plugin:** `eslint`

## What it does

Disallow unnecessary concatenation of literals or template literals.

## Why is this bad?

It’s unnecessary to concatenate two strings together when they could be combined into a single literal.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = "a" + "b";`javascript
`var foo = "a" + "b" + "c";`
Examples of correct code for this rule:
javascript
`var foo = "a" + bar;
// When the string concatenation is multiline
var foo = "a" + "b" + "c";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-concat": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-concat": "error",
},
});`bash
`oxlint --deny no-useless-concat`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_concat.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-concat)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-concat)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-concat.html)
- [oxc project](https://github.com/oxc-project/oxc)