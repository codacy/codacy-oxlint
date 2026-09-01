# No Array Fill With Reference Type (unicorn)

**Pattern ID:** `unicorn_no-array-fill-with-reference-type`
**Plugin:** `unicorn`

## What it does

Disallows using reference values as `Array#fill()` values.

## Why is this bad?

`Array#fill()` reuses the same value for every array element. When the fill value is an object, array, class, or most constructed objects, all elements point at the same reference and mutating one element mutates the shared value observed by the others.

## Examples

Examples of incorrect code for this rule:
js
`const rows = new Array(3).fill({});
rows[0].selected = true; // Every row now has `selected`.`
Examples of correct code for this rule:
js
`const rows = Array.from({ length: 3 }, () => ({}));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-fill-with-reference-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-fill-with-reference-type": "error",
},
});`bash
`oxlint --deny unicorn/no-array-fill-with-reference-type`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_fill_with_reference_type.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-fill-with-reference-type.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-fill-with-reference-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-fill-with-reference-type.html)
- [oxc project](https://github.com/oxc-project/oxc)