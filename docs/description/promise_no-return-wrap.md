# No Return Wrap (promise)

**Pattern ID:** `promise_no-return-wrap`
**Plugin:** `promise`

## What it does

Prevents unnecessary wrapping of return values in promises with either `Promise.resolve` or `Promise.reject`.
This rule enforces the following stances:
-
When a promise is to be resolved, instead of returning `Promise.resolve(value)` it is better to return the raw value with `return value` instead.
-
When a promise is to be rejected, instead of returning `Promise.reject(error)`, instead the raw error value should be thrown as in `throw error`.
There is an option to turn off the enforcing of 2, see the options section below.

## Why is this bad?

It is unnecessary to use `Promise.resolve` and `Promise.reject` for converting raw values to promises in the return statements of `then` and `catch` callbacks. Using these operations to convert raw values to promises is unnecessary as simply returning the raw value for the success case and throwing the raw error value in the failure case have the same effect. This is why some take the opinion that returning values such as `Promise.resolve(1)` or `Promise.reject(err)` is syntactic noise.

## Examples

Examples of incorrect code for this rule:
js
`myPromise().then(() => Promise.resolve(4));
myPromise().then(function () {
return Promise.resolve(4);
});
myPromise().then(() => Promise.reject("err"));
myPromise().then(function () {
return Promise.reject("err");
});`js
`myPromise().catch(function () {
return Promise.reject("err");
});`js
`myPromise().finally(function () {
return Promise.reject("err");
});`js
`myPromise().finally(() => Promise.resolve(4));`
Examples of correct code for this rule:
js
`myPromise().then(() => 4);
myPromise().then(function () {
return 4;
});
myPromise().then(() => throw "err");
myPromise().then(function () {
throw "err";
});`js
`myPromise().catch(function () {
throw "err";
});`js
`myPromise().finally(() => 4);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-return-wrap": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-return-wrap": "error",
},
});`bash
`oxlint --deny promise/no-return-wrap --promise-plugin`

## Version

This rule was added in v0.15.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_return_wrap.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-return-wrap)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html)
- [oxc project](https://github.com/oxc-project/oxc)