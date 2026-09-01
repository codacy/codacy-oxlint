# Await Thenable (typescript)

**Pattern ID:** `typescript_await-thenable`
**Plugin:** `typescript`

## What it does

This rule disallows awaiting a value that is not a Thenable.

## Why is this bad?

While it is valid JavaScript to await a non-Promise-like value (it will resolve immediately), this practice can be confusing for readers who are not aware of this behavior. It can also be a sign of a programmer error, such as forgetting to add parentheses to call a function that returns a Promise.

## Examples

Examples of incorrect code for this rule:
`await 12;
await (() => {});
// non-Promise values
await Math.random;
await { then() {} };
// this is not a Promise - it's a function that returns a Promise
declare const getPromise: () => Promise<string>;
await getPromise;`
Examples of correct code for this rule:
`await Promise.resolve('value');
await Promise.reject(new Error());
// Promise-like values
await {
then(onfulfilled, onrejected) {
onfulfilled('value');
},
};
// this is a Promise - produced by calling a function
declare const getPromise: () => Promise<string>;
await getPromise();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/await-thenable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/await-thenable": "error",
},
});`bash
`oxlint --type-aware --deny typescript/await-thenable`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/await_thenable.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/await-thenable/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/await_thenable/await_thenable.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/await-thenable.html)
- [oxc project](https://github.com/oxc-project/oxc)