# No Misused Spread (typescript)

**Pattern ID:** `typescript_no-misused-spread`
**Plugin:** `typescript`

## What it does

This rule disallows spreading syntax in places where it doesn't make sense or could cause runtime errors.

## Why is this bad?

The spread operator can be misused in ways that might not be immediately obvious but can cause runtime errors or unexpected behavior. This rule helps catch common misuses.

## Examples

Examples of incorrect code for this rule:
ts
`// Spreading a non-iterable value in an array
const num = 42;
const arr = [...num]; // Runtime error: num is not iterable
// Spreading a Promise in an array
const promise = Promise.resolve([1, 2, 3]);
const arr2 = [...promise]; // Runtime error: Promise is not iterable
// Spreading non-object in object literal
const str = "hello";
const obj = { ...str }; // Creates { '0': 'h', '1': 'e', ... } which might be unexpected`
Examples of correct code for this rule:
ts
`// Spreading arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
// Spreading objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
// Spreading resolved Promise
const promise = Promise.resolve([1, 2, 3]);
const arr3 = [...(await promise)];
// Using Array.from for non-iterables if needed
const str = "hello";
const arr4 = Array.from(str); // ['h', 'e', 'l', 'l', 'o']`

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
"typescript/no-misused-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-misused-spread": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-misused-spread`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_misused_spread.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-misused-spread/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_misused_spread/no_misused_spread.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)