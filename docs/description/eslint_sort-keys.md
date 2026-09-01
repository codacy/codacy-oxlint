# Sort Keys (eslint)

**Pattern ID:** `eslint_sort-keys`
**Plugin:** `eslint`

## What it does

When declaring multiple properties, sorting property names alphabetically makes it easier to find and/or diff necessary properties at a later time.

## Why is this bad?

Unsorted property keys can make the code harder to read and maintain.

## Examples

Examples of incorrect code for this rule:
js
`let myObj = {
c: 1,
a: 2,
};`
Examples of correct code for this rule:
js
`let myObj = {
a: 2,
c: 1,
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"sort-keys": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"sort-keys": "error",
},
});`bash
`oxlint --deny sort-keys`

## Version

This rule was added in v0.9.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/sort_keys.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/sort-keys)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fsort-keys)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys.html)
- [oxc project](https://github.com/oxc-project/oxc)