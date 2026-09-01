# Prefer Nullish Coalescing (typescript)

**Pattern ID:** `typescript_prefer-nullish-coalescing`
**Plugin:** `typescript`

## What it does

Enforce using the nullish coalescing operator (`??`) instead of logical OR (`||`) or conditional expressions when the left operand might be `null` or `undefined`.

## Why is this bad?

The `||` operator returns the right-hand side when the left-hand side is any falsy value (`false`, `0`, `''`, `null`, `undefined`, `NaN`). This can lead to unexpected behavior when you only want to provide a default for `null` or `undefined`.
The nullish coalescing operator (`??`) only returns the right-hand side when the left-hand side is `null` or `undefined`, making the intent clearer and avoiding bugs with other falsy values.

## Examples

Examples of incorrect code for this rule:
ts
`declare const x: string | null;
// Using || when ?? would be more appropriate
const foo = x || "default";
// Ternary that could use ??
const bar = x !== null && x !== undefined ? x : "default";
const baz = x != null ? x : "default";
// If statement that could use ??
let value = "default";
if (x !== null && x !== undefined) {
value = x;
}`
Examples of correct code for this rule:
ts
`declare const x: string | null;
// Using nullish coalescing
const foo = x ?? "default";
// || is fine when you want falsy behavior
declare const y: string;
const bar = y || "default";
// Boolean coercion (can be ignored with ignoreBooleanCoercion)
const bool = Boolean(x || y);`

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
"typescript/prefer-nullish-coalescing": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-nullish-coalescing": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-nullish-coalescing`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_nullish_coalescing.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-nullish-coalescing/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_nullish_coalescing/prefer_nullish_coalescing.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-nullish-coalescing.html)
- [oxc project](https://github.com/oxc-project/oxc)