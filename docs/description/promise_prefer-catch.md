# Prefer Catch (promise)

**Pattern ID:** `promise_prefer-catch`
**Plugin:** `promise`

## What it does

Prefer `catch` to `then(a, b)` and `then(null, b)`. This rule disallows the passing of an argument into the second parameter of `then` calls for handling promise errors.

## Why is this bad?

A `then` call with two arguments can make it more difficult to recognize that a catch error handler is present. Another issue with using the second argument in `then` calls is that the ordering of promise error handling is less obvious.
For example on first glance it may appear that `prom.then(fn1, fn2)` is equivalent to `prom.then(fn1).catch(fn2)`. However they aren't equivalent. In fact `prom.catch(fn2).then(fn1)` is the equivalent. This kind of confusion is a good reason for preferring explicit `catch` calls over passing an argument to the second parameter of `then` calls.

## Examples

Examples of incorrect code for this rule:
js
`prom.then(fn1, fn2);
prom.then(null, fn2);`
Examples of correct code for this rule:
js
`prom.catch(fn2).then(fn1);
prom.catch(fn2);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/prefer-catch": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/prefer-catch": "error",
},
});`bash
`oxlint --deny promise/prefer-catch --promise-plugin`

## Version

This rule was added in v0.15.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/prefer_catch.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-catch.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fprefer-catch)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html)
- [oxc project](https://github.com/oxc-project/oxc)