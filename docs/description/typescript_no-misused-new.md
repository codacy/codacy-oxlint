# No Misused New (typescript)

**Pattern ID:** `typescript_no-misused-new`
**Plugin:** `typescript`

## What it does

Enforces valid definitions of `new` and `constructor`. This rule prevents classes from defining a method named `new`, interfaces from defining a method named `constructor`, and interfaces from defining a construct signature that returns the interface itself.

## Why is this bad?

JavaScript classes may define a constructor method that runs when a class instance is newly created.
TypeScript allows interfaces that describe a static class object to define a `new()` signature (though this is rarely used in real world code). That construct signature should return the constructed instance type, not the interface for the constructor object itself. Developers new to JavaScript classes and/or TypeScript interfaces may sometimes confuse when to use constructor or new.

## Examples

Examples of incorrect code for this rule:
typescript
`declare class C {
new(): C;
}`typescript
`interface I {
new (): I;
}`typescript
`interface I {
constructor(): void;
}`
Examples of correct code for this rule:
typescript
`declare class C {
constructor();
}`typescript
`class C {}
interface I {
new (): C;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-misused-new": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-misused-new": "error",
},
});`bash
`oxlint --deny typescript/no-misused-new`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_misused_new.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-misused-new/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-misused-new)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html)
- [oxc project](https://github.com/oxc-project/oxc)