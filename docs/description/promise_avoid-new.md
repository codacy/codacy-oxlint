# Avoid New (promise)

**Pattern ID:** `promise_avoid-new`
**Plugin:** `promise`

## What it does

Disallow creating promises with `new Promise()`.

## Why is this bad?

Many cases that use `new Promise()` could be refactored to use an `async` function. `async` is considered more idiomatic in modern JavaScript.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo() {
return new Promise((resolve, reject) => {
/* ... */
});
}`
Examples of correct code for this rule:
javascript
`async function foo() {
// ...
}
const bar = await Promise.all([baz(), bang()]);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/avoid-new": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/avoid-new": "error",
},
});`bash
`oxlint --deny promise/avoid-new --promise-plugin`

## Version

This rule was added in v0.6.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/avoid_new.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Favoid-new)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html)
- [oxc project](https://github.com/oxc-project/oxc)