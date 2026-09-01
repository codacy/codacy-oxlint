# No Unnecessary Type Parameters (typescript)

**Pattern ID:** `typescript_no-unnecessary-type-parameters`
**Plugin:** `typescript`

## What it does

Disallow type parameters that are declared but not meaningfully used.

## Why is this bad?

Unnecessary type parameters make signatures noisier and harder to understand, and they often hide opportunities to simplify APIs.

## Examples

Examples of incorrect code for this rule:
ts
`function parseYAML<T>(input: string): T {
return input as any as T;
}`
Examples of correct code for this rule:
ts
`function parseYAML(input: string): unknown {
return input;
}
function identity<T>(value: T): T {
return value;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unnecessary-type-parameters": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unnecessary-type-parameters": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unnecessary-type-parameters`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_type_parameters.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-type-parameters/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unnecessary_type_parameters/no_unnecessary_type_parameters.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-parameters.html)
- [oxc project](https://github.com/oxc-project/oxc)