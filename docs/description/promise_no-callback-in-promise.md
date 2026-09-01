# No Callback In Promise (promise)

**Pattern ID:** `promise_no-callback-in-promise`
**Plugin:** `promise`

## What it does

Disallows calling a callback function (`cb()`) inside a `Promise.prototype.then()` or `Promise.prototype.catch()`.

## Why is this bad?

Directly invoking a callback inside a `then()` or `catch()` method can lead to unexpected behavior, such as the callback being called multiple times. Additionally, mixing the callback and promise paradigms in this way can make the code confusing and harder to maintain.

## Examples

Examples of incorrect code for this rule:
js
`function callback(err, data) {
console.log("Callback got called with:", err, data);
throw new Error("My error");
}
Promise.resolve()
.then(() => callback(null, "data"))
.catch((err) => callback(err.message, null));`
Examples of correct code for this rule:
js
`Promise.resolve()
.then((data) => {
console.log(data);
})
.catch((err) => {
console.error(err);
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-callback-in-promise": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-callback-in-promise": "error",
},
});`bash
`oxlint --deny promise/no-callback-in-promise --promise-plugin`

## Version

This rule was added in v0.10.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_callback_in_promise.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-callback-in-promise)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html)
- [oxc project](https://github.com/oxc-project/oxc)