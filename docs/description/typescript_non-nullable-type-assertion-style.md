# Non Nullable Type Assertion Style (typescript)

**Pattern ID:** `typescript_non-nullable-type-assertion-style`
**Plugin:** `typescript`

## What it does

This rule prefers a non-null assertion over an explicit type cast for non-nullable types.

## Why is this bad?

When you know that a value cannot be `null` or `undefined`, you can use either a non-null assertion (`!`) or a type assertion (`as Type`). The non-null assertion is more concise and clearly communicates the intent that you're asserting the value is not `null`/`undefined`.

## Examples

Examples of incorrect code for this rule:
ts
`declare const value: string | null;
// Type assertion when non-null assertion would be clearer
const result1 = value as string;
declare const maybe: number | undefined;
const result2 = maybe as number;
// In function calls
function takesString(s: string) {
console.log(s);
}
takesString(value as string);`
Examples of correct code for this rule:
ts
`declare const value: string | null;
// Non-null assertion for non-nullable types
const result1 = value!;
declare const maybe: number | undefined;
const result2 = maybe!;
// In function calls
function takesString(s: string) {
console.log(s);
}
takesString(value!);
// Type assertion for actual type changes is still fine
declare const unknown: unknown;
const str = unknown as string; // This is a different type, not just removing null`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/non-nullable-type-assertion-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/non-nullable-type-assertion-style": "error",
},
});`bash
`oxlint --type-aware --deny typescript/non-nullable-type-assertion-style`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/non_nullable_type_assertion_style.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/non-nullable-type-assertion-style/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/non_nullable_type_assertion_style/non_nullable_type_assertion_style.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style.html)
- [oxc project](https://github.com/oxc-project/oxc)