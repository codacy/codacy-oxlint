# No Div Regex (eslint)

**Pattern ID:** `eslint_no-div-regex`
**Plugin:** `eslint`

## What it does

Disallow equal signs explicitly at the beginning of regular expressions.

## Why is this bad?

Characters /= at the beginning of a regular expression literal can be confused with a division assignment operator.

## Examples

Examples of incorrect code for this rule:
javascript
`function bar() {
return /=foo/;
}`
Examples of correct code for this rule:
javascript
`function bar() {
return /[=]foo/;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-div-regex": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-div-regex": "error",
},
});`bash
`oxlint --deny no-div-regex`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_div_regex.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-div-regex)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-div-regex)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-div-regex.html)
- [oxc project](https://github.com/oxc-project/oxc)