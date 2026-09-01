# Catch Or Return (promise)

**Pattern ID:** `promise_catch-or-return`
**Plugin:** `promise`

## What it does

Ensure that each time a `then()` is applied to a promise, a `catch()` must be applied as well. Exceptions are made for promises returned from a function.

## Why is this bad?

Not catching errors in a promise can cause hard to debug problems or missing handling of error conditions. In the worst case, unhandled promise rejections can cause your application to crash.

## Examples

Examples of incorrect code for this rule:
javascript
`myPromise.then(doSomething);
myPromise.then(doSomething, catchErrors); // catch() may be a little better`
Examples of correct code for this rule:
javascript
`myPromise.then(doSomething).catch(errors);
function doSomethingElse() {
return myPromise.then(doSomething);
}
const arrowFunc = () => myPromise.then(doSomething);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/catch-or-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/catch-or-return": "error",
},
});`bash
`oxlint --deny promise/catch-or-return --promise-plugin`

## Version

This rule was added in v0.9.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/catch_or_return.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fcatch-or-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html)
- [oxc project](https://github.com/oxc-project/oxc)