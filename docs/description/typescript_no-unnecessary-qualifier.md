# No Unnecessary Qualifier (typescript)

**Pattern ID:** `typescript_no-unnecessary-qualifier`
**Plugin:** `typescript`

## What it does

Disallow namespace qualifiers when the referenced name is already in scope.

## Why is this bad?

Redundant qualifiers add noise and make type references harder to read.

## Examples

Examples of incorrect code for this rule:
ts
`namespace A {
export type B = number;
const value: A.B = 1;
}`
Examples of correct code for this rule:
ts
`namespace A {
export type B = number;
const value: B = 1;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unnecessary-qualifier": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-qualifier": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-qualifier`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/typescript/no_unnecessary_qualifier.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-qualifier/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_qualifier/no_unnecessary_qualifier.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-qualifier.html)
- [oxc project](https://github.com/oxc-project/oxc)