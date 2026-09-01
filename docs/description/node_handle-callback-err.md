# Handle Callback Err (node)

**Pattern ID:** `node_handle-callback-err`
**Plugin:** `node`

## What it does

This rule expects that when you're using the callback pattern in Node.js you'll handle the error.

## Why is this bad?

In Node.js, a common pattern for dealing with asynchronous behavior is called the callback pattern. This pattern expects an `Error` object or `null` as the first argument of the callback. Forgetting to handle these errors can lead to some really strange behavior in your application.
js
`function loadData(err, data) {
doSomething(); // forgot to handle error
}`

## Examples

Examples of incorrect code for this rule with the default `"err"` parameter name:
js
`function loadData(err, data) {
doSomething();
}`
Examples of correct code for this rule with the default `"err"` parameter name:
js
`function loadData(err, data) {
if (err) {
console.log(err.stack);
}
doSomething();
}
function generateError(err) {
if (err) {
}
}`
Examples of correct code for this rule with a sample `"error"` parameter name:
js
`function loadData(error, data) {
if (error) {
console.log(error.stack);
}
doSomething();
}`

## Configuration

The rule takes a single string option: the name of the error parameter.
This can be either:
- an exact name (e.g. `"err"`, `"error"`)
- a regexp pattern (e.g. `"^(err|error)$"`)
If the configured name of the error variable begins with a `^` it is considered to be a regexp pattern. Invalid regexp patterns are rejected during configuration parsing.
Default: `"err"`.
type: `string`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/handle-callback-err": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/handle-callback-err": "error",
},
});`bash
`oxlint --deny node/handle-callback-err --node-plugin`

## Version

This rule was added in v1.56.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/handle_callback_err.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fhandle-callback-err)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/handle-callback-err.html)
- [oxc project](https://github.com/oxc-project/oxc)