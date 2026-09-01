# No Single Promise In Promise Methods (unicorn)

**Pattern ID:** `unicorn_no-single-promise-in-promise-methods`
**Plugin:** `unicorn`

## What it does

Disallow passing single-element arrays to `Promise` methods.

## Why is this bad?

Passing a single-element array to `Promise.all()`, `Promise.any()`, or `Promise.race()` is likely a mistake.

## Examples

Examples of incorrect code for this rule:
javascript
`async function bad() {
const foo = await Promise.all([promise]);
const foo = await Promise.any([promise]);
const foo = await Promise.race([promise]);
const promise = Promise.all([nonPromise]);
}`
Examples of correct code for this rule:
javascript
`async function good() {
const foo = await promise;
const promise = Promise.resolve(nonPromise);
const foo = await Promise.all(promises);
const foo = await Promise.any([promise, anotherPromise]);
const [{ value: foo, reason: error }] = await Promise.allSettled([promise]);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-single-promise-in-promise-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-single-promise-in-promise-methods": "error",
},
});`bash
`oxlint --deny unicorn/no-single-promise-in-promise-methods`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_single_promise_in_promise_methods.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-single-promise-in-promise-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)