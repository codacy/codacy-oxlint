# No Duplicate Type Constituents (typescript)

**Pattern ID:** `typescript_no-duplicate-type-constituents`
**Plugin:** `typescript`

## What it does

This rule disallows duplicate constituents of union or intersection types.

## Why is this bad?

Duplicate constituents in union and intersection types serve no purpose and can make code harder to read. They are likely a mistake.

## Examples

Examples of incorrect code for this rule:
ts
`type T1 = "A" | "A";
type T2 = A | A | B;
type T3 = { a: string } & { a: string };
type T4 = [A, A];
type T5 = "foo" | "bar" | "foo";`
Examples of correct code for this rule:
ts
`type T1 = "A" | "B";
type T2 = A | B | C;
type T3 = { a: string } & { b: string };
type T4 = [A, B];
type T5 = "foo" | "bar" | "baz";`

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
"typescript/no-duplicate-type-constituents": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-duplicate-type-constituents": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-duplicate-type-constituents`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_duplicate_type_constituents.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-duplicate-type-constituents/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_duplicate_type_constituents/no_duplicate_type_constituents.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.html)
- [oxc project](https://github.com/oxc-project/oxc)