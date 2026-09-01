# No Unnecessary Type Conversion (typescript)

**Pattern ID:** `typescript_no-unnecessary-type-conversion`
**Plugin:** `typescript`

## What it does

Disallow unnecessary type conversion expressions.

## Why is this bad?

Type conversions that do not change a value's type or runtime behavior add noise and can obscure intent.

## Examples

Examples of incorrect code for this rule:
ts
`const value = String("asdf");`
Examples of correct code for this rule:
ts
`const value = "asdf";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unnecessary-type-conversion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-type-conversion": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-type-conversion`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_type_conversion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-type-conversion/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_type_conversion/no_unnecessary_type_conversion.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-conversion.html)
- [oxc project](https://github.com/oxc-project/oxc)