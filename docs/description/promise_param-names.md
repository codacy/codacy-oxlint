# Param Names (promise)

**Pattern ID:** `promise_param-names`
**Plugin:** `promise`

## What it does

Enforce standard parameter names for Promise constructors.

## Why is this bad?

Ensures that new Promise() is instantiated with the parameter names resolve, reject to avoid confusion with order such as reject, resolve. The Promise constructor uses the RevealingConstructor pattern. Using the same parameter names as the language specification makes code more uniform and easier to understand.

## Examples

Examples of incorrect code for this rule:
javascript
`new Promise(function (reject, resolve) {
/* ... */
}); // incorrect order
new Promise(function (ok, fail) {
/* ... */
}); // non-standard parameter names`
Examples of correct code for this rule:
javascript
`new Promise(function (resolve, reject) {});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/param-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/param-names": "error",
},
});`bash
`oxlint --deny promise/param-names --promise-plugin`

## Version

This rule was added in v0.6.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/param_names.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fparam-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html)
- [oxc project](https://github.com/oxc-project/oxc)