# Prefer Literal Enum Member (typescript)

**Pattern ID:** `typescript_prefer-literal-enum-member`
**Plugin:** `typescript`

## What it does

Explicit enum values must only be literal values (string, number, boolean, etc.).

## Why is this bad?

TypeScript allows the value of an enum member to be many different kinds of valid JavaScript expressions. However, because enums create their own scope whereby each enum member becomes a variable in that scope, developers are often surprised at the resultant values.

## Examples

Examples of incorrect code for this rule:
ts
`const imOutside = 2;
const b = 2;
enum Foo {
outer = imOutside,
a = 1,
b = a,
c = b,
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-literal-enum-member": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-literal-enum-member": "error",
},
});`bash
`oxlint --deny typescript/prefer-literal-enum-member`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_literal_enum_member.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-literal-enum-member/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-literal-enum-member)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html)
- [oxc project](https://github.com/oxc-project/oxc)