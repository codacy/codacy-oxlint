# Always Return (promise)

**Pattern ID:** `promise_always-return`
**Plugin:** `promise`

## What it does

Require returning inside each `then()` to create readable and reusable Promise chains. We also allow someone to throw inside a `then()` which is essentially the same as return `Promise.reject()`.

## Why is this bad?

Broken Promise Chain. Inside the first `then()` callback, a function is called but not returned. This causes the next `then()` in the chain to execute immediately without waiting for the called function to complete.

## Examples

Examples of incorrect code for this rule:
javascript
`myPromise.then(function (val) {});
myPromise.then(() => {
doSomething();
});
myPromise.then((b) => {
if (b) {
return "yes";
} else {
forgotToReturn();
}
});`
Examples of correct code for this rule:
javascript
`myPromise.then((val) => val * 2);
myPromise.then(function (val) {
return val * 2;
});
myPromise.then(doSomething); // could be either
myPromise.then((b) => {
if (b) {
return "yes";
} else {
return "no";
}
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/always-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/always-return": "error",
},
});`bash
`oxlint --deny promise/always-return --promise-plugin`

## Version

This rule was added in v1.13.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/always_return.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Falways-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html)
- [oxc project](https://github.com/oxc-project/oxc)