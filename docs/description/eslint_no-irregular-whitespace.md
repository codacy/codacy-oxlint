# No Irregular Whitespace (eslint)

**Pattern ID:** `eslint_no-irregular-whitespace`
**Plugin:** `eslint`

## What it does

Disallows the use of irregular whitespace characters in the code.

## Why is this bad?

Irregular whitespace characters are invisible to most editors and can cause unexpected behavior, making code harder to debug and maintain. They can also cause issues with code formatting and parsing.

## Examples

Examples of incorrect code for this rule:
javascript
`// Contains irregular whitespace characters (invisible)
function example() {
var foo = "bar"; // irregular whitespace before 'bar'
}`
Examples of correct code for this rule:
javascript
`function example() {
var foo = "bar"; // regular spaces only
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-irregular-whitespace": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-irregular-whitespace": "error",
},
});`bash
`oxlint --deny no-irregular-whitespace`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/eslint/no_irregular_whitespace.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-irregular-whitespace)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html)
- [oxc project](https://github.com/oxc-project/oxc)