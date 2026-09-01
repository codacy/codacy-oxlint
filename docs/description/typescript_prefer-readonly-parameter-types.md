# Prefer Readonly Parameter Types (typescript)

**Pattern ID:** `typescript_prefer-readonly-parameter-types`
**Plugin:** `typescript`

## What it does

Require function and method parameters to use readonly-compatible types.

## Why is this bad?

Mutable parameter types make accidental mutation easier and weaken function contracts. Readonly parameter types communicate intent and improve API safety.

## Examples

Examples of incorrect code for this rule:
ts
`function update(items: string[]) {
items.push("x");
}
function consume(obj: { value: string }) {
obj.value = obj.value.trim();
}`
Examples of correct code for this rule:
ts
`function update(items: readonly string[]) {
return items.length;
}
function consume(obj: Readonly<{ value: string }>) {
return obj.value;
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
"typescript/prefer-readonly-parameter-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-readonly-parameter-types": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-readonly-parameter-types`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_readonly_parameter_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-readonly-parameter-types/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_readonly_parameter_types/prefer_readonly_parameter_types.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly-parameter-types.html)
- [oxc project](https://github.com/oxc-project/oxc)