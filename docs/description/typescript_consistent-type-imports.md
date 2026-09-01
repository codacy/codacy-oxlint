# Consistent Type Imports (typescript)

**Pattern ID:** `typescript_consistent-type-imports`
**Plugin:** `typescript`

## What it does

Enforce consistent usage of type imports by adding or removing the `type` keyword from imports.
The `fixStyle` option controls where newly added `type` keywords are placed when this rule auto-fixes imports. It does not enforce the placement of `type` keywords that are already present in the code. To enforce consistent placement, use `import/consistent-type-specifier-style`.

## Why is this bad?

Inconsistent usage of type imports can make the code harder to read and understand.

## Examples

Examples of incorrect code for this rule:
ts
`import { Foo } from "Foo";
type T = Foo;
type S = import("Foo");`
Examples of correct code for this rule:
ts
`import type { Foo } from "Foo";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/consistent-type-imports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/consistent-type-imports": "error",
},
});`bash
`oxlint --deny typescript/consistent-type-imports`

## Version

This rule was added in v0.5.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/consistent_type_imports.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/consistent-type-imports/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fconsistent-type-imports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)