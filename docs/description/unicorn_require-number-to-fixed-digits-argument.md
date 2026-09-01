# Require Number To Fixed Digits Argument (unicorn)

**Pattern ID:** `unicorn_require-number-to-fixed-digits-argument`
**Plugin:** `unicorn`

## What it does

Enforce using the digits argument with `Number#toFixed()`.

## Why is this bad?

It's better to make it clear what the value of the digits argument is when calling `Number#toFixed()`, instead of relying on the default value of `0`.

## Examples

Examples of incorrect code for this rule:
javascript
`number.toFixed();`
Examples of correct code for this rule:
javascript
`number.toFixed(0);
number.toFixed(2);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/require-number-to-fixed-digits-argument": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/require-number-to-fixed-digits-argument": "error",
},
});`bash
`oxlint --deny unicorn/require-number-to-fixed-digits-argument`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/require_number_to_fixed_digits_argument.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frequire-number-to-fixed-digits-argument)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html)
- [oxc project](https://github.com/oxc-project/oxc)