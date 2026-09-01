# No Array Constructor (eslint)

**Pattern ID:** `eslint_no-array-constructor`
**Plugin:** `eslint`

## What it does

Disallows creating arrays with the `Array` constructor.

## Why is this bad?

Use of the `Array` constructor to construct a new array is generally discouraged in favor of array literal notation because of the single-argument pitfall and because the `Array` global may be redefined. The exception is when the `Array` constructor is used to intentionally create sparse arrays of a specified size by giving the constructor a single numeric argument.

## Examples

Examples of incorrect code for this rule:
javascript
`let arr = new Array();`
Examples of correct code for this rule:
javascript
`let arr = [];
let arr2 = Array.from(iterable);
let arr3 = new Array(9);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-array-constructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-array-constructor": "error",
},
});`bash
`oxlint --deny no-array-constructor`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_array_constructor.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-array-constructor)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-array-constructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html)
- [oxc project](https://github.com/oxc-project/oxc)