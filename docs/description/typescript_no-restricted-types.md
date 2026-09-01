# No Restricted Types (typescript)

**Pattern ID:** `typescript_no-restricted-types`
**Plugin:** `typescript`

## What it does

Disallow certain types from being used.

## Why is this bad?

Some built-in types have aliases, while some types are considered dangerous or harmful. It's often a good idea to ban certain types to help with consistency and safety.

## Examples

Given `{ "types": { "Foo": { "message": "Use Bar instead", "fixWith": "Bar" } } }`:
Examples of incorrect code for this rule:
ts
`let value: Foo;`
Examples of correct code for this rule:
ts
`let value: Bar;`
Other examples of configuration option setups for this rule:
-
Banning the `Foo` type with just a message, no fixes or suggestions: `{ "types": { "Foo": "Use `OtherType` instead." } }`
-
Banning `Bar` type with suggestion: `{ "types": { "Bar": { "message": "Avoid using `Bar`.", "suggest": "BazQux" } } }`
-
Banning `Object` type with a generic message: `{ "types": { "Object": true } }`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-restricted-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-restricted-types": "error",
},
});`bash
`oxlint --deny typescript/no-restricted-types`

## Version

This rule was added in v1.31.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_restricted_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-restricted-types/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-restricted-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-restricted-types.html)
- [oxc project](https://github.com/oxc-project/oxc)