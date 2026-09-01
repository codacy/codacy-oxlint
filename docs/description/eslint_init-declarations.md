# Init Declarations (eslint)

**Pattern ID:** `eslint_init-declarations`
**Plugin:** `eslint`

## What it does

Require or disallow initialization in variable declarations.

## Why is this bad?

In JavaScript, variables can be assigned during declaration, or at any point afterwards using an assignment statement. For example, in the following code, `foo` is initialized during declaration, while `bar` is initialized later.
js
`var foo = 1;
var bar;
if (foo) {
bar = 1;
} else {
bar = 2;
}`

## Examples

Examples of incorrect code for the default `"always"` option:
js
`/* init-declarations: ["error", "always"] */
function foo() {
var bar;
let baz;
}`
Examples of incorrect code for the `"never"` option:
js
`/* init-declarations: ["error", "never"] */
function foo() {
var bar = 1;
let baz = 2;
for (var i = 0; i < 1; i++) {}
}`
Examples of correct code for the default `"always"` option:
js
`/* init-declarations: ["error", "always"] */
function foo() {
var bar = 1;
let baz = 2;
const qux = 3;
}`
Examples of correct code for the `"never"` option:
js
`/* init-declarations: ["error", "never"] */
function foo() {
var bar;
let baz;
const buzz = 1;
}`
Examples of correct code for the `"never", { "ignoreForLoopInit": true }` options:
js
`/* init-declarations: ["error", "never", { "ignoreForLoopInit": true }] */
for (var i = 0; i < 1; i++) {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"init-declarations": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"init-declarations": "error",
},
});`bash
`oxlint --deny init-declarations`

## Version

This rule was added in v0.15.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/init_declarations.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/init-declarations)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Finit-declarations)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html)
- [oxc project](https://github.com/oxc-project/oxc)