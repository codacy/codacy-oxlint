# Ban Types (typescript)

**Pattern ID:** `typescript_ban-types`
**Plugin:** `typescript`

## What it does

This rule bans specific types and can suggest alternatives. Note that it does not ban the corresponding runtime objects from being used.
WARNING
This rule is deprecated and will be removed in a future release.
Prefer these replacement rules:
- `typescript/no-empty-object-type`
- `typescript/no-unsafe-function-type`
- `typescript/no-wrapper-object-types`
- `typescript/no-restricted-types` (for custom type bans) :::

## Why is this bad?

Some built-in types have aliases, while some types are considered dangerous or harmful. It's often a good idea to ban certain types to help with consistency and safety.

## Examples

Examples of incorrect code for this rule:
typescript
`let foo: String = "foo";
let bar: Boolean = true;`
Examples of correct code for this rule:
typescript
`let foo: string = "foo";
let bar: boolean = true;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/ban-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/ban-types": "error",
},
});`bash
`oxlint --deny typescript/ban-types`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/ban_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/ban-types/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fban-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-types.html)
- [oxc project](https://github.com/oxc-project/oxc)