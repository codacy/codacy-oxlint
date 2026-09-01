# Prefer For Of (typescript)

**Pattern ID:** `typescript_prefer-for-of`
**Plugin:** `typescript`

## What it does

Enforces the use of a `for...of` loop instead of a `for` loop with simple iteration.

## Why is this bad?

Using a `for` loop with a simple iteration over an array can be replaced with a more concise and readable `for...of` loop. `for...of` loops are easier to read and less error-prone, as they eliminate the need for an index variable and manual array access.

## Examples

Examples of incorrect code for this rule:
typescript
`for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}`
Examples of correct code for this rule:
typescript
`for (const item of arr) {
console.log(item);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-for-of": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-for-of": "error",
},
});`bash
`oxlint --deny typescript/prefer-for-of`

## Version

This rule was added in v0.2.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_for_of.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-for-of/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-for-of)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-for-of.html)
- [oxc project](https://github.com/oxc-project/oxc)