# Vars On Top (eslint)

**Pattern ID:** `eslint_vars-on-top`
**Plugin:** `eslint`

## What it does

Enforces that all `var` declarations are placed at the top of their containing scope.

## Why is this bad?

In JavaScript, `var` declarations are hoisted to the top of their containing scope. Placing `var` declarations at the top explicitly improves code readability and maintainability by making the scope of variables clear.

## Examples

Examples of incorrect code for this rule:
js
`function doSomething() {
if (true) {
var first = true;
}
var second;
}
function doSomethingElse() {
for (var i = 0; i < 10; i++) {}
}
f();
var a;
class C {
static {
if (something) {
var a = true;
}
}
static {
f();
var a;
}
}`
Examples of correct code for this rule:
js
`function doSomething() {
var first;
var second;
if (true) {
first = true;
}
}
function doSomethingElse() {
var i;
for (i = 0; i < 10; i++) {}
}
var a;
f();
class C {
static {
var a;
if (something) {
a = true;
}
}
static {
var a;
f();
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"vars-on-top": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"vars-on-top": "error",
},
});`bash
`oxlint --deny vars-on-top`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/vars_on_top.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/vars-on-top)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fvars-on-top)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html)
- [oxc project](https://github.com/oxc-project/oxc)