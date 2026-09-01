# Prefer Object Has Own (eslint)

**Pattern ID:** `eslint_prefer-object-has-own`
**Plugin:** `eslint`

## What it does

Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`

## Why is this bad?

It is very common to write code like:
javascript
`if (Object.prototype.hasOwnProperty.call(object, "foo")) {
console.log("has property foo");
}`
This is a common practice because methods on `Object.prototype` can sometimes be unavailable or redefined (see the no-prototype-builtins rule). Introduced in ES2022, `Object.hasOwn()` is a shorter alternative to `Object.prototype.hasOwnProperty.call()`:
javascript
`if (Object.hasOwn(object, "foo")) {
console.log("has property foo");
}`

## Examples

Examples of incorrect code for this rule:
js
`Object.prototype.hasOwnProperty.call(obj, "a");
Object.hasOwnProperty.call(obj, "a");
({}).hasOwnProperty.call(obj, "a");
const hasProperty = Object.prototype.hasOwnProperty.call(object, property);`
Examples of correct code for this rule:
js
`Object.hasOwn(obj, "a");
const hasProperty = Object.hasOwn(object, property);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-object-has-own": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-object-has-own": "error",
},
});`bash
`oxlint --deny prefer-object-has-own`

## Version

This rule was added in v0.11.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_object_has_own.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-object-has-own)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-object-has-own)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html)
- [oxc project](https://github.com/oxc-project/oxc)