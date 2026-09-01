# No Unsafe Enum Comparison (typescript)

**Pattern ID:** `typescript_no-unsafe-enum-comparison`
**Plugin:** `typescript`

## What it does

This rule disallows comparing an enum value with a non-enum value.

## Why is this bad?

Enum values should only be compared with other values of the same enum type or their underlying literal values in a type-safe manner. Comparing enums with unrelated values can lead to unexpected behavior and defeats the purpose of using enums for type safety.

## Examples

Examples of incorrect code for this rule:
ts
`enum Status {
Open = "open",
Closed = "closed",
}
enum Color {
Red = "red",
Blue = "blue",
}
declare const status: Status;
declare const color: Color;
declare const str: string;
// Comparing enum with different enum
if (status === color) {
} // unsafe
// Comparing enum with string (unless it's a literal that matches)
if (status === str) {
} // unsafe
// Comparing with arbitrary value
if (status === "unknown") {
} // unsafe`
Examples of correct code for this rule:
ts
`enum Status {
Open = "open",
Closed = "closed",
}
declare const status: Status;
// Comparing with same enum values
if (status === Status.Open) {
} // safe
// Comparing with the correct literal type
if (status === "open") {
} // safe
// Using enum methods
if (Object.values(Status).includes(someValue)) {
} // safe way to check`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unsafe-enum-comparison": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unsafe-enum-comparison": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unsafe-enum-comparison`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_enum_comparison.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-enum-comparison/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unsafe_enum_comparison/no_unsafe_enum_comparison.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html)
- [oxc project](https://github.com/oxc-project/oxc)