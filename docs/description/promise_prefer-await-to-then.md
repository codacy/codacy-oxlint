# Prefer Await To Then (promise)

**Pattern ID:** `promise_prefer-await-to-then`
**Plugin:** `promise`

## What it does

Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.

## Why is this bad?

Async/await syntax can be seen as more readable.

## Examples

Examples of incorrect code for this rule:
javascript
`function foo() {
hey.then((x) => {});
}`
Examples of correct code for this rule:
javascript
`async function hi() {
await thing();
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/prefer-await-to-then": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/prefer-await-to-then": "error",
},
});`bash
`oxlint --deny promise/prefer-await-to-then --promise-plugin`

## Version

This rule was added in v0.7.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/prefer_await_to_then.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fprefer-await-to-then)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html)
- [oxc project](https://github.com/oxc-project/oxc)