# Consistent Type Exports (typescript)

**Pattern ID:** `typescript_consistent-type-exports`
**Plugin:** `typescript`

## What it does

Enforce using `export type` for exports that are only used as types.

## Why is this bad?

Mixing type-only exports with value exports without `export type` makes module intent harder to read and can cause unnecessary runtime export surface.

## Examples

Examples of incorrect code for this rule:
ts
`type Foo = { bar: string };
export { Foo };
export { TypeOnly, value } from "./mod";`
Examples of correct code for this rule:
ts
`type Foo = { bar: string };
export type { Foo };
export type { TypeOnly } from "./mod";
export { value } from "./mod";`

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
"typescript/consistent-type-exports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/consistent-type-exports": "error",
},
});`bash
`oxlint --type-aware --deny typescript/consistent-type-exports`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_type_exports.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-type-exports/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/consistent_type_exports/consistent_type_exports.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-exports.html)
- [oxc project](https://github.com/oxc-project/oxc)