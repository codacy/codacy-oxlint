# No Array Reverse (unicorn)

**Pattern ID:** `unicorn_no-array-reverse`
**Plugin:** `unicorn`

## What it does

Prefer using `Array#toReversed()` over `Array#reverse()`.

## Why is this bad?

`Array#reverse()` modifies the original array in place, which can lead to unintended side effects—especially when the original array is used elsewhere in the code.

## Examples

Examples of incorrect code for this rule:
js
`const reversed = [...array].reverse();`
Examples of correct code for this rule:
js
`const reversed = [...array].toReversed();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-reverse": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-reverse": "error",
},
});`bash
`oxlint --deny unicorn/no-array-reverse`

## Version

This rule was added in v1.15.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_reverse.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-reverse)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html)
- [oxc project](https://github.com/oxc-project/oxc)