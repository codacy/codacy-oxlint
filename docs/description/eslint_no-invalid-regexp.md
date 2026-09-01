# No Invalid Regexp (eslint)

**Pattern ID:** `eslint_no-invalid-regexp`
**Plugin:** `eslint`

## What it does

Disallow invalid regular expression strings in RegExp constructors.

## Why is this bad?

An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed, but an invalid string in RegExp constructors throws a SyntaxError only when the code is executed.

## Examples

Examples of incorrect code for this rule:
js
`RegExp("[");
RegExp(".", "z");
new RegExp("\\");`
Examples of correct code for this rule:
js
`RegExp(".");
new RegExp();
this.RegExp("[");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-invalid-regexp": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-invalid-regexp": "error",
},
});`bash
`oxlint --deny no-invalid-regexp`

## Version

This rule was added in v0.9.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_invalid_regexp.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-invalid-regexp)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-invalid-regexp)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html)
- [oxc project](https://github.com/oxc-project/oxc)