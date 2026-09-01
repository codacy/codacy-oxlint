# No Array Delete (typescript)

**Pattern ID:** `typescript_no-array-delete`
**Plugin:** `typescript`

## What it does

This rule disallows using the delete operator on array values.

## Why is this bad?

When using the delete operator on an array, the element is not actually removed, but instead the array slot is turned into `undefined`. This is usually not the intended behavior. Instead, you should use methods like `Array.prototype.splice()` to properly remove elements from an array.

## Examples

Examples of incorrect code for this rule:
ts
`declare const arr: number[];
delete arr[0];`
Examples of correct code for this rule:
ts
`declare const arr: number[];
arr.splice(0, 1);
// or with a filter
const filteredArr = arr.filter((_, index) => index !== 0);
// delete on object is allowed
declare const obj: { a?: number };
delete obj.a;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-array-delete": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-array-delete": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-array-delete`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_array_delete.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-array-delete/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_array_delete/no_array_delete.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-array-delete.html)
- [oxc project](https://github.com/oxc-project/oxc)