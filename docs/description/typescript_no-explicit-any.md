# No Explicit Any (typescript)

**Pattern ID:** `typescript_no-explicit-any`
**Plugin:** `typescript`

## What it does

Disallows explicit use of the `any` type.

## Why is this bad?

The `any` type in TypeScript is a dangerous "escape hatch" from the type system. Using `any` disables many type checking rules and is generally best used only as a last resort or when prototyping code. This rule reports on explicit uses of the `any` keyword as a type annotation.
TypeScript's `--noImplicitAny` compiler option prevents an implied `any`, but doesn't prevent `any` from being explicitly used the way this rule does.

## Examples

Examples of incorrect code for this rule:
typescript
`const age: any = "seventeen";
const ages: any[] = ["seventeen"];
const ages: Array<any> = ["seventeen"];
function greet(): any {}
function greet(): any[] {}
function greet(): Array<any> {}
function greet(): Array<Array<any>> {}
function greet(param: Array<any>): string {}
function greet(param: Array<any>): Array<any> {}`
Examples of correct code for this rule:
typescript
`const age: number = 17;
const ages: number[] = [17];
const ages: Array<number> = [17];
function greet(): string {}
function greet(): string[] {}
function greet(): Array<string> {}
function greet(): Array<Array<string>> {}
function greet(param: Array<string>): string {}
function greet(param: Array<string>): Array<string> {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-explicit-any": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-explicit-any": "error",
},
});`bash
`oxlint --deny typescript/no-explicit-any`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_explicit_any.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-explicit-any/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-explicit-any)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html)
- [oxc project](https://github.com/oxc-project/oxc)