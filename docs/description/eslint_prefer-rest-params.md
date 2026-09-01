# Prefer Rest Params (eslint)

**Pattern ID:** `eslint_prefer-rest-params`
**Plugin:** `eslint`

## What it does

Disallows the use of the `arguments` object and instead enforces the use of rest parameters.

## Why is this bad?

The `arguments` object does not have methods from `Array.prototype`, making it inconvenient for array-like operations. Using rest parameters provides a more intuitive and efficient way to handle variadic arguments.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo() {
console.log(arguments);
}
function foo(action) {
var args = Array.prototype.slice.call(arguments, 1);
action.apply(null, args);
}
function foo(action) {
var args = [].slice.call(arguments, 1);
action.apply(null, args);
}`
Examples of correct code for this rule:
javascript
`function foo(...args) {
console.log(args);
}
function foo(action, ...args) {
action.apply(null, args); // Or use `action(...args)` (related to `prefer-spread` rule).
}
// Note: Implicit `arguments` can be shadowed.
function foo(arguments) {
console.log(arguments); // This refers to the first argument.
}
function foo() {
var arguments = 0;
console.log(arguments); // This is a local variable.
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-rest-params": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-rest-params": "error",
},
});`bash
`oxlint --deny prefer-rest-params`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_rest_params.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-rest-params)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-rest-params)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-rest-params.html)
- [oxc project](https://github.com/oxc-project/oxc)