# Valid Params (promise)

**Pattern ID:** `promise_valid-params`
**Plugin:** `promise`

## What it does

Enforces the proper number of arguments are passed to Promise functions.
This rule is generally unnecessary if using TypeScript.

## Why is this bad?

Calling a Promise function with the incorrect number of arguments can lead to unexpected behavior or hard to spot bugs.

## Examples

Examples of incorrect code for this rule:
javascript
`Promise.resolve(1, 2);`
Examples of correct code for this rule:
javascript
`Promise.resolve(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/valid-params": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/valid-params": "error",
},
});`bash
`oxlint --deny promise/valid-params --promise-plugin`

## Version

This rule was added in v0.7.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/valid_params.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fvalid-params)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html)
- [oxc project](https://github.com/oxc-project/oxc)