# Require Array Sort Compare (typescript)

**Pattern ID:** `typescript_require-array-sort-compare`
**Plugin:** `typescript`

## What it does

This rule requires `Array#sort()` to be called with a comparison function.

## Why is this bad?

When `Array#sort()` is called without a comparison function, it converts elements to strings and sorts them lexicographically. This often leads to unexpected results, especially with numbers where `[1, 10, 2].sort()` returns `[1, 10, 2]` instead of `[1, 2, 10]`.

## Examples

Examples of incorrect code for this rule:
ts
`const numbers = [3, 1, 4, 1, 5];
numbers.sort(); // Lexicographic sort, not numeric
const mixedArray = ["10", "2", "1"];
mixedArray.sort(); // Might be intended, but explicit compareFn is clearer
[3, 1, 4].sort(); // Will sort as strings: ['1', '3', '4']`
Examples of correct code for this rule:
ts
`const numbers = [3, 1, 4, 1, 5];
// Numeric sort
numbers.sort((a, b) => a - b);
// Reverse numeric sort
numbers.sort((a, b) => b - a);
// String sort (explicit)
const strings = ["banana", "apple", "cherry"];
strings.sort((a, b) => a.localeCompare(b));
// Custom object sorting
interface Person {
name: string;
age: number;
}
const people: Person[] = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 25 },
];
people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/require-array-sort-compare": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/require-array-sort-compare": "error",
},
});`bash
`oxlint --type-aware --deny typescript/require-array-sort-compare`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/require_array_sort_compare.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/require-array-sort-compare/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/require_array_sort_compare/require_array_sort_compare.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-array-sort-compare.html)
- [oxc project](https://github.com/oxc-project/oxc)