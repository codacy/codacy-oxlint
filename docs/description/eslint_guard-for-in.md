# Guard For In (eslint)

**Pattern ID:** `eslint_guard-for-in`
**Plugin:** `eslint`

## What it does

Require for-in loops to include an if statement.

## Why is this bad?

Looping over objects with a `for in` loop will include properties that are inherited through the prototype chain. Using a `for in` loop without filtering the results in the loop can lead to unexpected items in your for loop which can then lead to unexpected behaviour.

## Examples

Examples of incorrect code for this rule:
javascript
`for (key in foo) {
doSomething(key);
}`
Examples of correct code for this rule:
javascript
`for (key in foo) {
if (Object.hasOwn(foo, key)) {
doSomething(key);
}
}`javascript
`for (key in foo) {
if (Object.prototype.hasOwnProperty.call(foo, key)) {
doSomething(key);
}
}`javascript
`for (key in foo) {
if ({}.hasOwnProperty.call(foo, key)) {
doSomething(key);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"guard-for-in": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"guard-for-in": "error",
},
});`bash
`oxlint --deny guard-for-in`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/guard_for_in.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/guard-for-in)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fguard-for-in)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/guard-for-in.html)
- [oxc project](https://github.com/oxc-project/oxc)