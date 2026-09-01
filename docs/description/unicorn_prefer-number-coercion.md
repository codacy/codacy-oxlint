# Prefer Number Coercion (unicorn)

**Pattern ID:** `unicorn_prefer-number-coercion`
**Plugin:** `unicorn`

## What it does

Prefer `Number()` over `parseFloat()` and base-10 `parseInt()`.

## Why is this bad?

`parseFloat()` and `parseInt()` parse numeric prefixes and ignore trailing text. `Number()` parses the full input, which better matches intent when coercing values.

## Examples

Examples of incorrect code for this rule:
javascript
`const value = parseFloat(input);
const integer = parseInt(input, 10);`
Examples of correct code for this rule:
javascript
`const value = Number(input);
const integer = Math.trunc(Number(input));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-number-coercion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-number-coercion": "error",
},
});`bash
`oxlint --deny unicorn/prefer-number-coercion`

## Version

This rule was added in v1.71.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_number_coercion.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-coercion.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-number-coercion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-coercion.html)
- [oxc project](https://github.com/oxc-project/oxc)