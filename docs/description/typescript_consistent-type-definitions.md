# Consistent Type Definitions (typescript)

**Pattern ID:** `typescript_consistent-type-definitions`
**Plugin:** `typescript`

## What it does

Enforce type definitions to consistently use either `interface` or `type`.

## Why is this bad?

TypeScript provides two common ways to define an object type: `interface` and `type`. The two are generally very similar, and can often be used interchangeably. Using the same type declaration style consistently helps with code readability.

## Examples

By default this rule enforces the use of `interface` for defining object types.
Examples of incorrect code for this rule:
typescript
`type T = { x: number };`
Examples of correct code for this rule:
typescript
`type T = string;
type Foo = string | {};
interface T {
x: number;
}`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/consistent-type-definitions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/consistent-type-definitions": "error",
},
});`bash
`oxlint --deny typescript/consistent-type-definitions`

## Version

This rule was added in v0.2.17.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_type_definitions.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-type-definitions/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fconsistent-type-definitions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html)
- [oxc project](https://github.com/oxc-project/oxc)