# Sort Vars (eslint)

**Pattern ID:** `eslint_sort-vars`
**Plugin:** `eslint`

## What it does

Enforce sorting of variable declarations within the same block.

## Why is this bad?

When declaring multiple variables within the same block, sorting variable names can make it easier to find necessary variables at a later time.
Unsorted variable declarations can make the code harder to read and maintain.

## Examples

Examples of incorrect code for this rule:
js
`var b, a;
var a, B, c;`
Examples of correct code for this rule:
js
`var a, b, c, d;
var B, a, c;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"sort-vars": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"sort-vars": "error",
},
});`bash
`oxlint --deny sort-vars`

## Version

This rule was added in v0.9.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/sort_vars.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/sort-vars)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fsort-vars)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-vars.html)
- [oxc project](https://github.com/oxc-project/oxc)