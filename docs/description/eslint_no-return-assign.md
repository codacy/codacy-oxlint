# No Return Assign (eslint)

**Pattern ID:** `eslint_no-return-assign`
**Plugin:** `eslint`

## What it does

Disallows assignment operators in return statements.

## Why is this bad?

Assignment is allowed by js in return expressions, but usually, an expression with only one equal sign is intended to be a comparison. However, because of the missing equal sign, this turns to assignment, which is valid js code Because of this ambiguity, it’s considered a best practice to not use assignment in return statements.

## Examples

Examples of incorrect code for this rule:
js
`() => (a = b);
function x() {
return (a = b);
}`
Examples of correct code for this rule:
js
`() => (a = b);
function x() {
var result = (a = b);
return result;
}`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-return-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-return-assign": "error",
},
});`bash
`oxlint --deny no-return-assign`

## Version

This rule was added in v0.9.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_return_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-return-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-return-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)