# Default Param Last (eslint)

**Pattern ID:** `eslint_default-param-last`
**Plugin:** `eslint`

## What it does

Requires default parameters in functions to be the last ones.

## Why is this bad?

Placing default parameters last allows function calls to omit optional trailing arguments, which improves readability and consistency. This rule applies equally to JavaScript and TypeScript functions.

## Examples

Examples of incorrect code for this rule:
js
`/* default-param-last: "error" */
function f(a = 0, b) {}
function f(a, b = 0, c) {}
function createUser(isAdmin = false, id) {}
createUser(undefined, "tabby");`
Examples of correct code for this rule:
js
`/* default-param-last: "error" */
function f(a, b = 0) {}
function f(a = 0, b = 0) {}
function createUser(id, isAdmin = false) {}
createUser("tabby");`
Examples of incorrect TypeScript code for this rule:
ts
`/* default-param-last: "error" */
function greet(message: string = "Hello", name: string) {}
function combine(a: number = 1, b: number, c: number) {}
function combine(a: number, b: number = 2, c: number) {}
function combine(a: number = 1, b?: number, c: number) {}`
Examples of correct TypeScript code for this rule:
ts
`/* default-param-last: "error" */
function greet(name: string, message: string = "Hello") {}
function combine(a: number, b: number = 2, c: number = 3) {}
function combine(a: number, b?: number, c: number = 3) {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"default-param-last": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"default-param-last": "error",
},
});`bash
`oxlint --deny default-param-last`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/default_param_last.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/default-param-last)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fdefault-param-last)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-param-last.html)
- [oxc project](https://github.com/oxc-project/oxc)