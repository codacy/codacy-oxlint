# Class Literal Property Style (typescript)

**Pattern ID:** `typescript_class-literal-property-style`
**Plugin:** `typescript`

## What it does

Enforces a consistent style for exposing literal values on classes.

## Why is this bad?

Mixing readonly fields and trivial literal getters for the same kind of value makes class APIs inconsistent and harder to scan.

## Examples

Examples of incorrect code for this rule (default `"fields"`):
ts
`class C {
get name() {
return "oxc";
}
}`
Examples of correct code for this rule:
ts
`class C {
readonly name = "oxc";
}`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/class-literal-property-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/class-literal-property-style": "error",
},
});`bash
`oxlint --deny typescript/class-literal-property-style`

## Version

This rule was added in v1.47.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/class_literal_property_style.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/class-literal-property-style/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fclass-literal-property-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style.html)
- [oxc project](https://github.com/oxc-project/oxc)