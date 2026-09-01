# No Redundant Type Constituents (typescript)

**Pattern ID:** `typescript_no-redundant-type-constituents`
**Plugin:** `typescript`

## What it does

This rule disallows type constituents of unions and intersections that are redundant.

## Why is this bad?

Some constituents of union and intersection types can be redundant due to TypeScript's type system rules. These redundant constituents don't add any value and can make types harder to read and understand.

## Examples

Examples of incorrect code for this rule:
ts
`// unknown is redundant in unions
type T1 = string | unknown;
// any is redundant in unions
type T2 = string | any;
// never is redundant in unions
type T3 = string | never;
// Literal types that are wider than other types
type T4 = string | "hello";
// Object types that are subsets
type T5 = { a: string } | { a: string; b: number };`
Examples of correct code for this rule:
ts
`type T1 = string | number;
type T2 = "hello" | "world";
type T3 = { a: string } | { b: number };
// unknown in intersections is meaningful
type T4 = string & unknown;
// never in intersections is meaningful
type T5 = string & never;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-redundant-type-constituents": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-redundant-type-constituents": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-redundant-type-constituents`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_redundant_type_constituents.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-redundant-type-constituents/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_redundant_type_constituents/no_redundant_type_constituents.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents.html)
- [oxc project](https://github.com/oxc-project/oxc)