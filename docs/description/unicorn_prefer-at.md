# Prefer At (unicorn)

**Pattern ID:** `unicorn_prefer-at`
**Plugin:** `unicorn`

## What it does

Prefer the `Array#at()` and `String#at()` methods for index access.
This rule also discourages using `String#charAt()`.

## Why is this bad?

The `.at()` method is more readable and consistent for accessing elements by index, especially for negative indices which access elements from the end of the array or string.

## Examples

Examples of incorrect code for this rule:
js
`const foo = array[array.length - 1];
const foo = array.slice(-1)[0];
const foo = string.charAt(string.length - 1);`
Examples of correct code for this rule:
js
`const foo = array.at(-1);
const foo = array.at(-5);
const foo = string.at(-1);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-at": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-at": "error",
},
});`bash
`oxlint --deny unicorn/prefer-at`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_at.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-at)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html)
- [oxc project](https://github.com/oxc-project/oxc)