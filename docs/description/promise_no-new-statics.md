# No New Statics (promise)

**Pattern ID:** `promise_no-new-statics`
**Plugin:** `promise`

## What it does

Disallows calling new on static `Promise` methods.

## Why is this bad?

Calling a static `Promise` method with `new` is invalid and will result in a `TypeError` at runtime.

## Examples

Examples of incorrect code for this rule:
javascript
`const x = new Promise.resolve(value);`
Examples of correct code for this rule:
javascript
`const x = Promise.resolve(value);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/no-new-statics": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/no-new-statics": "error",
},
});`bash
`oxlint --deny promise/no-new-statics --promise-plugin`

## Version

This rule was added in v0.6.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/no_new_statics.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fno-new-statics)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html)
- [oxc project](https://github.com/oxc-project/oxc)