# No Unsafe Declaration Merging (typescript)

**Pattern ID:** `typescript_no-unsafe-declaration-merging`
**Plugin:** `typescript`

## What it does

Disallow unsafe declaration merging.

## Why is this bad?

Declaration merging between classes and interfaces is unsafe. The TypeScript compiler doesn't check whether properties are initialized, which can lead to TypeScript not detecting code that will cause runtime errors.

## Examples

Examples of incorrect code for this rule:
ts
`interface Foo {}
class Foo {}`
Examples of correct code for this rule:
ts
`interface Foo {}
class Bar {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-unsafe-declaration-merging": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-unsafe-declaration-merging": "error",
},
});`bash
`oxlint --deny typescript/no-unsafe-declaration-merging`

## Version

This rule was added in v0.0.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_declaration_merging.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-declaration-merging/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-unsafe-declaration-merging)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-declaration-merging.html)
- [oxc project](https://github.com/oxc-project/oxc)