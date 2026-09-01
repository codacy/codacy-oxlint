# Func Style (eslint)

**Pattern ID:** `eslint_func-style`
**Plugin:** `eslint`

## What it does

Enforce the consistent use of either function declarations or expressions assigned to variables.

## Why is this bad?

This rule enforces a particular type of function style, either function declarations or expressions assigned to variables. You can specify which you prefer in the configuration.

## Examples

js
`// function declaration
function doSomething() {
// ...
}
// arrow function expression assigned to a variable
const doSomethingElse = () => {
// ...
};
// function expression assigned to a variable
const doSomethingAgain = function () {
// ...
};`
Examples of incorrect code for this rule with the default `"expression"` option:
js
`/* func-style: ["error", "expression"] */
function foo() {
// ...
}`
Examples of incorrect code for this rule with the `"declaration"` option:
js
`/* func-style: ["error", "declaration"] */
var foo = function () {
// ...
};
var foo = () => {};`
Examples of incorrect code for this rule with the `"declaration"` and `{"overrides": { "namedExports": "expression" }}` option:
js
`/* func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }] */
export function foo() {
// ...
}`
Examples of incorrect code for this rule with the `"expression"` and `{"overrides": { "namedExports": "declaration" }}` option:
js
`/* func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }] */
export var foo = function () {
// ...
};
export var bar = () => {};`
Examples of correct code for this rule with the default `"expression"` option:
js
`/* func-style: ["error", "expression"] */
var foo = function () {
// ...
};`
Examples of correct code for this rule with the `"declaration"` option:
js
`/* func-style: ["error", "declaration"] */
function foo() {
// ...
}
// Methods (functions assigned to objects) are not checked by this rule
SomeObject.foo = function () {
// ...
};`
Examples of additional correct code for this rule with the `"declaration"`, `{ "allowArrowFunctions": true }` options:
js
`/* func-style: ["error", "declaration", { "allowArrowFunctions": true }] */
var foo = () => {};`
Examples of correct code for this rule with the `"declaration"` and `{"overrides": { "namedExports": "expression" }}` option:
js
`/* func-style: ["error", "declaration", { "overrides": { "namedExports": "expression" } }] */
export var foo = function () {
// ...
};
export var bar = () => {};`
Examples of correct code for this rule with the `"expression"` and `{"overrides": { "namedExports": "declaration" }}` option:
js
`/* func-style: ["error", "expression", { "overrides": { "namedExports": "declaration" } }] */
export function foo() {
// ...
}`
Examples of correct code for this rule with the `{"overrides": { "namedExports": "ignore" }}` option:
js
`/* func-style: ["error", "expression", { "overrides": { "namedExports": "ignore" } }] */
export var foo = function () {
// ...
};
export var bar = () => {};
export function baz() {
// ...
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"func-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"func-style": "error",
},
});`bash
`oxlint --deny func-style`

## Version

This rule was added in v0.15.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/func_style.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/func-style)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Ffunc-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style.html)
- [oxc project](https://github.com/oxc-project/oxc)