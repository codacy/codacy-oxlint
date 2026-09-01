# No Unnecessary Boolean Literal Compare (typescript)

**Pattern ID:** `typescript_no-unnecessary-boolean-literal-compare`
**Plugin:** `typescript`

## What it does

This rule disallows unnecessary equality comparisons with boolean literals.

## Why is this bad?

Comparing boolean values to boolean literals is unnecessary when the comparison can be eliminated. These comparisons make code more verbose without adding value.

## Examples

Examples of incorrect code for this rule:
ts
`declare const someCondition: boolean;
if (someCondition === true) {
// ...
}
if (someCondition === false) {
// ...
}
if (someCondition !== true) {
// ...
}
if (someCondition !== false) {
// ...
}
const result = someCondition == true;`
Examples of correct code for this rule:
ts
`declare const someCondition: boolean;
if (someCondition) {
// ...
}
if (!someCondition) {
// ...
}
// Comparisons with non-boolean types are allowed
declare const someValue: unknown;
if (someValue === true) {
// ...
}`

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
"typescript/no-unnecessary-boolean-literal-compare": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-boolean-literal-compare": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-boolean-literal-compare`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_boolean_literal_compare.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_boolean_literal_compare/no_unnecessary_boolean_literal_compare.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html)
- [oxc project](https://github.com/oxc-project/oxc)