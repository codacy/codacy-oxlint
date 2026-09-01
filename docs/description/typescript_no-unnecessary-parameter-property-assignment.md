# No Unnecessary Parameter Property Assignment (typescript)

**Pattern ID:** `typescript_no-unnecessary-parameter-property-assignment`
**Plugin:** `typescript`

## What it does

Prevents unnecessary assignment of parameter properties.

## Why is this bad?

Constructor parameters marked with one of the visibility modifiers public, private, protected, or readonly are automatically initialized. Providing an explicit assignment is unnecessary and can be removed.

## Examples

Examples of incorrect code for this rule:
js
`class Foo {
constructor(public name: unknown) {
this.name = name;
}
}`
Examples of correct code for this rule:
js
`class Foo {
constructor(public name: unknown) {}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-unnecessary-parameter-property-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-unnecessary-parameter-property-assignment": "error",
},
});`bash
`oxlint --deny typescript/no-unnecessary-parameter-property-assignment`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_parameter_property_assignment.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-unnecessary-parameter-property-assignment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-parameter-property-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)