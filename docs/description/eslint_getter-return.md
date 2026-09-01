# Getter Return (eslint)

**Pattern ID:** `eslint_getter-return`
**Plugin:** `eslint`

## What it does

Requires all getters to have a `return` statement.

## Why is this bad?

Getters should always return a value. If they don't, it's probably a mistake.
This rule does not run on TypeScript files, since type checking will catch getters that do not return a value.

## Examples

Examples of incorrect code for this rule:
javascript
`class Person {
get name() {
// no return
}
}
const obj = {
get foo() {
// object getter are also checked
},
};`
Examples of correct code for this rule:
javascript
`class Person {
get name() {
return this._name;
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"getter-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"getter-return": "error",
},
});`bash
`oxlint --deny getter-return`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/getter_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/getter-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fgetter-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html)
- [oxc project](https://github.com/oxc-project/oxc)