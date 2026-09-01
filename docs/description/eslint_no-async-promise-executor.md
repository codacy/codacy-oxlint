# No Async Promise Executor (eslint)

**Pattern ID:** `eslint_no-async-promise-executor`
**Plugin:** `eslint`

## What it does

Disallow using an async function as a Promise executor.

## Why is this bad?

The `new Promise` constructor accepts an executor function as an argument, which has `resolve` and `reject` parameters that can be used to control the state of the created Promise. For example:
javascript
`const result = new Promise(function executor(resolve, reject) {
readFile("foo.txt", function (err, result) {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});`
The executor function can also be an `async function`. However, this is usually a mistake, for a few reasons:
- If an async executor function throws an error, the error will be lost and won’t cause the newly-constructed `Promise` to reject.This could make it difficult to debug and handle some errors.
- If a `Promise` executor function is using `await`, this is usually a sign that it is not actually necessary to use the new `Promise` constructor, or the scope of the new `Promise` constructor can be reduced.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = new Promise(async (resolve, reject) => {
readFile("foo.txt", function (err, result) {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});
const result = new Promise(async (resolve, reject) => {
resolve(await foo);
});`
Examples of correct code for this rule:
javascript
`const foo = new Promise((resolve, reject) => {
readFile("foo.txt", function (err, result) {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});
const result = Promise.resolve(foo);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-async-promise-executor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-async-promise-executor": "error",
},
});`bash
`oxlint --deny no-async-promise-executor`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_async_promise_executor.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-async-promise-executor)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-async-promise-executor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html)
- [oxc project](https://github.com/oxc-project/oxc)