# Prefer Await To Callbacks (promise)

**Pattern ID:** `promise_prefer-await-to-callbacks`
**Plugin:** `promise`

## What it does

The rule encourages the use of `async/await` for handling asynchronous code instead of traditional callback functions. `async/await`, introduced in ES2017, provides a clearer and more concise syntax for writing asynchronous code, making it easier to read and maintain.

## Why is this bad?

Using callbacks can lead to complex, nested structures known as "callback hell," which make code difficult to read and maintain. Additionally, error handling can become cumbersome with callbacks, whereas `async/await` allows for more straightforward try/catch blocks for managing errors.

## Examples

Examples of incorrect code for this rule:
js
`cb();
callback();
doSomething(arg, (err) => {});
function doSomethingElse(cb) {}`
Examples of correct code for this rule:
js
`await doSomething(arg);
async function doSomethingElse() {}
function* generator() {
yield yieldValue((err) => {});
}
eventEmitter.on("error", (err) => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/prefer-await-to-callbacks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/prefer-await-to-callbacks": "error",
},
});`bash
`oxlint --deny promise/prefer-await-to-callbacks --promise-plugin`

## Version

This rule was added in v0.9.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/prefer_await_to_callbacks.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fprefer-await-to-callbacks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html)
- [oxc project](https://github.com/oxc-project/oxc)