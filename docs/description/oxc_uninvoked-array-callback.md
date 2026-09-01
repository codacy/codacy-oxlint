# Uninvoked Array Callback (oxc)

**Pattern ID:** `oxc_uninvoked-array-callback`
**Plugin:** `oxc`

## What it does

This rule applies when an Array function has a callback argument used for an array with empty slots.

## Why is this bad?

When the Array constructor is called with a single number argument, an array with the specified number of empty slots (not actual `undefined` values) is constructed. If a callback function is passed to the function of this array, the callback function is never invoked because the array has no actual elements.

## Examples

Examples of incorrect code for this rule:
javascript
`const list = new Array(5).map((_) => createElement());`
Examples of correct code for this rule:
javascript
`const list = new Array(5).fill().map((_) => createElement());`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/uninvoked-array-callback": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/uninvoked-array-callback": "error",
},
});`bash
`oxlint --deny oxc/uninvoked-array-callback`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/uninvoked_array_callback.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Funinvoked-array-callback)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html)
- [oxc project](https://github.com/oxc-project/oxc)