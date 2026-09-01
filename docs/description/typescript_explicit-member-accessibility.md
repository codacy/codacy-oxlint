# Explicit Member Accessibility (typescript)

**Pattern ID:** `typescript_explicit-member-accessibility`
**Plugin:** `typescript`

## What it does

Require explicit accessibility modifiers on class properties and methods.

## Why is this bad?

TypeScript allows placing explicit `public`, `protected`, and `private` accessibility modifiers in front of class members. The modifiers exist solely in the type system and serve to describe who is allowed to access those members.
Leaving off accessibility modifiers makes for less code to read and write. Members are `public` by default. However, adding explicit modifiers can make code more readable and explicit about who can use which properties.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/explicit-member-accessibility": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/explicit-member-accessibility": "error",
},
});`bash
`oxlint --deny typescript/explicit-member-accessibility`

## Version

This rule was added in v1.61.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/explicit_member_accessibility.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/explicit-member-accessibility/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fexplicit-member-accessibility)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-member-accessibility.html)
- [oxc project](https://github.com/oxc-project/oxc)