# Callback Return (node)

**Pattern ID:** `node_callback-return`
**Plugin:** `node`

## What it does

Require `return` statements after callbacks.

## Why is this bad?

This rule is aimed at ensuring that callbacks used outside of the main function block are always part-of or immediately preceding a `return` statement. This rule decides what is a callback based on the name of the function being called.

## Examples

Examples of incorrect code for this rule:
js
`function done(err) {
if (err) {
callback(err);
}
callback();
}`
Examples of correct code for this rule:
js
`function done(err) {
if (err) {
return callback(err);
}
callback();
}`

## Configuration

The rule takes a single option - an array of possible callback names - which may include object methods. The default callback names are `callback`, `cb`, `next`.
type: `string[]`
default: `[]`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/callback-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/callback-return": "error",
},
});`bash
`oxlint --deny node/callback-return --node-plugin`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/callback_return.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fcallback-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/callback-return.html)
- [oxc project](https://github.com/oxc-project/oxc)