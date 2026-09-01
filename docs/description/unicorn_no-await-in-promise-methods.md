# No Await In Promise Methods (unicorn)

**Pattern ID:** `unicorn_no-await-in-promise-methods`
**Plugin:** `unicorn`

## What it does

Disallow using `await` in `Promise` method parameters.

## Why is this bad?

Using `await` on promises passed as arguments to `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, or `Promise.race()` is likely a mistake.

## Examples

Examples of incorrect code for this rule:
javascript
`async function foo() {
Promise.all([await promise, anotherPromise]);
Promise.allSettled([await promise, anotherPromise]);
Promise.any([await promise, anotherPromise]);
Promise.race([await promise, anotherPromise]);
}`
Examples of correct code for this rule:
javascript
`async function foo() {
Promise.all([promise, anotherPromise]);
Promise.allSettled([promise, anotherPromise]);
Promise.any([promise, anotherPromise]);
Promise.race([promise, anotherPromise]);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-await-in-promise-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-await-in-promise-methods": "error",
},
});`bash
`oxlint --deny unicorn/no-await-in-promise-methods`

## Version

This rule was added in v0.2.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_await_in_promise_methods.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-await-in-promise-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)