# No With (eslint)

**Pattern ID:** `eslint_no-with`
**Plugin:** `eslint`

## What it does

Disallow `with` statements.

## Why is this bad?

The with statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to.
It is generally considered a bad practice and is forbidden in strict mode.
This rule is not necessary in TypeScript code if `alwaysStrict` is enabled.

## Examples

Examples of incorrect code for this rule:
javascript
`with (point) {
r = Math.sqrt(x * x + y * y); // is r a member of point?
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-with": "error",
},
});`bash
`oxlint --deny no-with`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_with.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-with)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-with)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-with.html)
- [oxc project](https://github.com/oxc-project/oxc)