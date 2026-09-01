# No Sparse Arrays (eslint)

**Pattern ID:** `eslint_no-sparse-arrays`
**Plugin:** `eslint`

## What it does

Disallow sparse arrays.

## Why is this bad?

Take the following example:
javascript
`const items = [, ,];`
While the items array in this example has a length of 2, there are actually no values in items[0] or items[1]. The fact that the array literal is valid with only commas inside, coupled with the length being set and actual item values not being set, make sparse arrays confusing for many developers.
The confusion around sparse arrays is enough that it’s recommended to avoid using them unless you are certain that they are useful in your code.

## Examples

Examples of incorrect code for this rule:
javascript
`var items = [, ,];`javascript
`var colors = ["red", , "blue"];`
Examples of correct code for this rule:
javascript
`var items = [];`
// trailing comma (after the last element) is not a problem
javascript
`var colors = ["red", "blue"];`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-sparse-arrays": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-sparse-arrays": "error",
},
});`bash
`oxlint --deny no-sparse-arrays`

## Version

This rule was added in v0.0.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_sparse_arrays.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-sparse-arrays)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-sparse-arrays)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sparse-arrays.html)
- [oxc project](https://github.com/oxc-project/oxc)