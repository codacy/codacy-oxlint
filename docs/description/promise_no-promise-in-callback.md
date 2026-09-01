# No Promise In Callback (promise)

**Pattern ID:** `promise_no-promise-in-callback`
**Plugin:** `promise`

## What it does

Disallows the use of Promises within error-first callback functions.

## Why is this bad?

Mixing Promises and callbacks can lead to unclear and inconsistent code. Promises and callbacks are different patterns for handling asynchronous code. Mixing them makes the logic flow harder to follow and complicates error handling, as callbacks rely on an error-first pattern, while Promises use `catch`.

## Examples

Examples of incorrect code for this rule:
js
`doSomething((err, val) => {
if (err) console.error(err);
else doSomethingElse(val).then(console.log);
});`
Examples of correct code for this rule:
js
`promisify(doSomething)().then(doSomethingElse).then(console.log).catch(console.error);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-promise-in-callback": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-promise-in-callback": "error",
},
});`bash
`oxlint --deny promise/no-promise-in-callback --promise-plugin`

## Version

This rule was added in v0.13.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_promise_in_callback.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-promise-in-callback)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html)
- [oxc project](https://github.com/oxc-project/oxc)