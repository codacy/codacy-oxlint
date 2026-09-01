# Prefer Default Parameters (unicorn)

**Pattern ID:** `unicorn_prefer-default-parameters`
**Plugin:** `unicorn`

## What it does

Instead of reassigning a function parameter, default parameters should be used. The `foo = foo || 123` statement evaluates to `123` when `foo` is falsy, possibly leading to confusing behavior, whereas default parameters only apply when passed an `undefined` value. This rule only reports reassignments to literal values.
You should disable this rule if you want your functions to deal with `null` and other falsy values the same way as `undefined`. Default parameters are exclusively applied when `undefined` is received.. However, we recommend moving away from `null`.

## Why is this bad?

Using default parameters makes it clear that a parameter has a default value, improving code readability and maintainability.

## Examples

Examples of incorrect code for this rule:
js
`function abc(foo) {
foo = foo || "bar";
}
function abc(foo) {
const bar = foo || "bar";
}`
Examples of correct code for this rule:
js
`function abc(foo = "bar") {}
function abc(bar = "bar") {}
function abc(foo) {
foo = foo || bar();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-default-parameters": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-default-parameters": "error",
},
});`bash
`oxlint --deny unicorn/prefer-default-parameters`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_default_parameters.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-default-parameters.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-default-parameters)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-default-parameters.html)
- [oxc project](https://github.com/oxc-project/oxc)