# No For In Array (typescript)

**Pattern ID:** `typescript_no-for-in-array`
**Plugin:** `typescript`

## What it does

This rule disallows iterating over an array with a for-in loop.

## Why is this bad?

A for-in loop iterates over the enumerable properties of an object, which includes the array indices, but also includes any enumerable properties added to the array prototype or the array instance. This is almost never what you want when iterating over an array.

## Examples

Examples of incorrect code for this rule:
ts
`const arr = [1, 2, 3];
for (const i in arr) {
console.log(arr[i]);
}
for (const i in arr) {
console.log(i, arr[i]);
}`
Examples of correct code for this rule:
ts
`const arr = [1, 2, 3];
// Use for-of to iterate over array values
for (const value of arr) {
console.log(value);
}
// Use regular for loop with index
for (let i = 0; i < arr.length; i++) {
console.log(i, arr[i]);
}
// Use forEach
arr.forEach((value, index) => {
console.log(index, value);
});
// for-in is fine for objects
const obj = { a: 1, b: 2 };
for (const key in obj) {
console.log(key, obj[key]);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-for-in-array": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-for-in-array": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-for-in-array`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_for_in_array.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-for-in-array/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_for_in_array/no_for_in_array.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-for-in-array.html)
- [oxc project](https://github.com/oxc-project/oxc)