# No Useless Promise Resolve Reject (unicorn)

**Pattern ID:** `unicorn_no-useless-promise-resolve-reject`
**Plugin:** `unicorn`

## What it does

Disallows returning values wrapped in `Promise.resolve` or `Promise.reject` in an async function or a `Promise#then`/`catch`/`finally` callback.

## Why is this bad?

Wrapping a return value in `Promise.resolve` in an async function or a `Promise#then`/`catch`/`finally` callback is unnecessary as all return values in async functions and promise callback functions are already wrapped in a `Promise`.
Similarly, returning an error wrapped in `Promise.reject` is equivalent to simply `throw`ing the error. This is the same for `yield`ing in async generators as well.

## Examples

Examples of incorrect code for this rule:
javascript
`async () => Promise.resolve(bar);`
Examples of correct code for this rule:
javascript
`async () => bar;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-promise-resolve-reject": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-promise-resolve-reject": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-promise-resolve-reject`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_promise_resolve_reject.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-promise-resolve-reject)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html)
- [oxc project](https://github.com/oxc-project/oxc)