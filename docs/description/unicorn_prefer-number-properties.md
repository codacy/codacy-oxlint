# Prefer Number Properties (unicorn)

**Pattern ID:** `unicorn_prefer-number-properties`
**Plugin:** `unicorn`

## What it does

Disallows use of `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`, `NaN`, `Infinity` and `-Infinity` as global variables.

## Why is this bad?

ECMAScript 2015 moved globals onto the `Number` constructor for consistency and to slightly improve them. This rule enforces their usage to limit the usage of globals:
- `Number.parseInt()` over `parseInt()`
- `Number.parseFloat()` over `parseFloat()`
- `Number.isNaN()` over `isNaN()` (they have slightly [different behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#difference_between_number.isnan_and_global_isnan))
- `Number.isFinite()` over `isFinite()` (they have slightly [different behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#difference_between_number.isfinite_and_global_isfinite))
- `Number.NaN` over `NaN`
- `Number.POSITIVE_INFINITY` over `Infinity`
- `Number.NEGATIVE_INFINITY` over `-Infinity`

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = parseInt("10", 2);
const bar = parseFloat("10.5");`
Examples of correct code for this rule:
javascript
`const foo = Number.parseInt("10", 2);
const bar = Number.parseFloat("10.5");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-number-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-number-properties": "error",
},
});`bash
`oxlint --deny unicorn/prefer-number-properties`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_number_properties.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-properties.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-number-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)