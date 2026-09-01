# No Nested Ternary (unicorn)

**Pattern ID:** `unicorn_no-nested-ternary`
**Plugin:** `unicorn`

## What it does

Disallow deeply nested ternary expressions.
Nested ternary expressions that are only one level deep and wrapped in parentheses are allowed by this rule.

## Why is this bad?

Nesting ternary expressions can make code more difficult to understand.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = i > 5 ? (i < 100 ? true : false) : true;
const foo = i > 5 ? true : i < 100 ? true : i < 1000 ? true : false;`
Examples of correct code for this rule:
javascript
`const foo = i > 5 ? (i < 100 ? true : false) : true;
const foo = i > 5 ? (i < 100 ? true : false) : i < 100 ? true : false;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-nested-ternary": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-nested-ternary": "error",
},
});`bash
`oxlint --deny unicorn/no-nested-ternary`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_nested_ternary.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-nested-ternary)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-nested-ternary.html)
- [oxc project](https://github.com/oxc-project/oxc)