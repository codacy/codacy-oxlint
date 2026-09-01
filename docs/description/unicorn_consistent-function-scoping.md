# Consistent Function Scoping (unicorn)

**Pattern ID:** `unicorn_consistent-function-scoping`
**Plugin:** `unicorn`

## What it does

Disallow functions that are declared in a scope which does not capture any variables from the outer scope.

## Why is this bad?

Moving function declarations to the highest possible scope improves readability, directly [improves performance](https://stackoverflow.com/questions/80802/does-use-of-anonymous-functions-affect-performance/81329#81329) and allows JavaScript engines to better [optimize your performance](https://ponyfoo.com/articles/javascript-performance-pitfalls-v8#optimization-limit).

## Examples

Examples of incorrect code for this rule:
js
`export function doFoo(foo) {
// Does not capture anything from the scope, can be moved to the outer scope
function doBar(bar) {
return bar === "bar";
}
return doBar;
}
function doFoo(foo) {
const doBar = (bar) => {
return bar === "bar";
};
}`
Examples of correct code for this rule:
js
`function doBar(bar) {
return bar === "bar";
}
export function doFoo(foo) {
return doBar;
}
export function doFoo(foo) {
function doBar(bar) {
return bar === "bar" && foo.doBar(bar);
}
return doBar;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/consistent-function-scoping": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/consistent-function-scoping": "error",
},
});`bash
`oxlint --deny unicorn/consistent-function-scoping`

## Version

This rule was added in v0.8.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/consistent_function_scoping.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fconsistent-function-scoping)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html)
- [oxc project](https://github.com/oxc-project/oxc)