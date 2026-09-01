# No Const Enum (oxc)

**Pattern ID:** `oxc_no-const-enum`
**Plugin:** `oxc`

## What it does

Disallow TypeScript `const enum`

## Why is this bad?

Const enums are enums that should be inlined at use sites. Const enums are not supported by bundlers and are incompatible with the isolatedModules mode. Their use can lead to import nonexistent values (because const enums are erased).

## Examples

Examples of incorrect code for this rule:
ts
`const enum Color {
Red,
Green,
Blue,
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-const-enum": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-const-enum": "error",
},
});`bash
`oxlint --deny oxc/no-const-enum`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_const_enum.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-const-enum)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html)
- [oxc project](https://github.com/oxc-project/oxc)