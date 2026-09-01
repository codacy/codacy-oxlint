# Prefer Ternary (unicorn)

**Pattern ID:** `unicorn_prefer-ternary`
**Plugin:** `unicorn`

## What it does

Prefers ternary expressions over simple `if`/`else` statements.

## Why is this bad?

Simple `if`/`else` branches for the same operation are often shorter and clearer when expressed as a ternary.

## Examples

Examples of incorrect code for this rule:
js
`if (test) {
return a;
} else {
return b;
}`
Examples of correct code for this rule:
js
`return test ? a : b;`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-ternary": "error",
},
});`bash
`oxlint --deny unicorn/prefer-ternary`

## Version

This rule was added in v1.50.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_ternary.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)