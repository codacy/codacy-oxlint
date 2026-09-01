# Parameter Properties (typescript)

**Pattern ID:** `typescript_parameter-properties`
**Plugin:** `typescript`

## What it does

Requires or disallows parameter properties in class constructors.

## Why is this bad?

Mixing parameter properties and class property declarations can make class style inconsistent and harder to maintain.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/parameter-properties": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/parameter-properties": "error",
},
});`bash
`oxlint --deny typescript/parameter-properties`

## Version

This rule was added in v1.48.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/parameter_properties.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/parameter-properties/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fparameter-properties)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/parameter-properties.html)
- [oxc project](https://github.com/oxc-project/oxc)