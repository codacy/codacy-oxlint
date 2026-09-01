# No Return In Finally (promise)

**Pattern ID:** `promise_no-return-in-finally`
**Plugin:** `promise`

## What it does

Disallow return statements in a `finally()` callback of a promise.

## Why is this bad?

Disallow return statements inside a callback passed to finally(), since nothing would consume what's returned.

## Examples

Examples of incorrect code for this rule:
javascript
`myPromise.finally(function (val) {
return val;
});`
Examples of correct code for this rule:
javascript
`Promise.resolve(1).finally(() => {
console.log(2);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-return-in-finally": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-return-in-finally": "error",
},
});`bash
`oxlint --deny promise/no-return-in-finally --promise-plugin`

## Version

This rule was added in v0.7.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_return_in_finally.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-return-in-finally)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html)
- [oxc project](https://github.com/oxc-project/oxc)