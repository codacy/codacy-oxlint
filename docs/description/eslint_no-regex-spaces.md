# No Regex Spaces (eslint)

**Pattern ID:** `eslint_no-regex-spaces`
**Plugin:** `eslint`

## What it does

Disallow 2+ consecutive spaces in regular expressions.

## Why is this bad?

In a regular expression, it is hard to tell how many spaces are intended to be matched. It is better to use only one space and then specify how many spaces are expected using a quantifier.
javascript
`var re = /foo {3}bar/;`

## Examples

Examples of incorrect code for this rule:
javascript
`var re = /foo   bar/;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-regex-spaces": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-regex-spaces": "error",
},
});`bash
`oxlint --deny no-regex-spaces`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_regex_spaces.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-regex-spaces)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-regex-spaces)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-regex-spaces.html)
- [oxc project](https://github.com/oxc-project/oxc)