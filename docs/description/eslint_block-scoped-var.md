# Block Scoped Var (eslint)

**Pattern ID:** `eslint_block-scoped-var`
**Plugin:** `eslint`

## What it does

Enforces that variables are both declared and used within the same block scope. This rule prevents accidental use of variables outside their intended block, mimicking C-style block scoping in JavaScript.

## Why is this bad?

JavaScript’s `var` declarations are hoisted to the top of their enclosing function, which can cause variables declared in a block (e.g., inside an `if` or `for`) to be accessible outside of it. This can lead to hard-to-find bugs. By enforcing block scoping, this rule helps avoid hoisting issues and aligns more closely with how other languages treat block variables.

## Examples

Examples of incorrect code for this rule:
js
`/* block-scoped-var: "error" */
function doIf() {
if (true) {
var build = true;
}
console.log(build);
}
function doLoop() {
for (var i = 0; i < 10; i++) {
// do something
}
console.log(i); // i is accessible here
}
function doSomething() {
if (true) {
var foo = 1;
}
if (false) {
foo = 2;
}
}
function doTry() {
try {
var foo = 1;
} catch (e) {
console.log(foo);
}
}`
Examples of correct code for this rule:
js
`/* block-scoped-var: "error" */
function doIf() {
var build;
if (true) {
build = true;
}
console.log(build);
}
function doLoop() {
var i;
for (i = 0; i < 10; i++) {
// do something
}
console.log(i);
}
function doSomething() {
var foo;
if (true) {
foo = 1;
}
if (false) {
foo = 2;
}
}
function doTry() {
var foo;
try {
foo = 1;
} catch (e) {
console.log(foo);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"block-scoped-var": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"block-scoped-var": "error",
},
});`bash
`oxlint --deny block-scoped-var`

## Version

This rule was added in v0.16.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/block_scoped_var.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/block-scoped-var)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fblock-scoped-var)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html)
- [oxc project](https://github.com/oxc-project/oxc)