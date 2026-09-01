# Prefer Promise Reject Errors (eslint)

**Pattern ID:** `eslint_prefer-promise-reject-errors`
**Plugin:** `eslint`

## What it does

Require using Error objects as Promise rejection reasons.
WARNING
This rule is not as accurate as the type-aware [typescript/prefer-promise-reject-errors](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html) rule. We recommend using the TypeScript rule when type information is available.

## Why is this bad?

It is considered good practice to only pass instances of the built-in `Error` object to the `reject()` function for user-defined errors in Promises. `Error` objects automatically store a stack trace, which can be used to debug an error by determining where it came from. If a Promise is rejected with a non-`Error` value, it can be difficult to determine where the rejection occurred.

## Examples

Examples of incorrect code for this rule:
js
`Promise.reject("something bad happened");
Promise.reject(5);
Promise.reject();
new Promise(function (resolve, reject) {
reject("something bad happened");
});
new Promise(function (resolve, reject) {
reject();
});`
Examples of correct code for this rule:
js
`Promise.reject(new Error("something bad happened"));
Promise.reject(new TypeError("something bad happened"));
new Promise(function (resolve, reject) {
reject(new Error("something bad happened"));
});
var foo = getUnknownValue();
Promise.reject(foo);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-promise-reject-errors": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-promise-reject-errors": "error",
},
});`bash
`oxlint --deny prefer-promise-reject-errors`

## Version

This rule was added in v0.15.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_promise_reject_errors.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-promise-reject-errors)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-promise-reject-errors.html)
- [oxc project](https://github.com/oxc-project/oxc)