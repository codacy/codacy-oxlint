# No Empty Object Type (typescript)

**Pattern ID:** `typescript_no-empty-object-type`
**Plugin:** `typescript`

## What it does

To avoid confusion around the `{}` type allowing any non-nullish value, this rule bans usage of the `{}` type. That includes interfaces and object type aliases with no fields.

## Why is this bad?

The `{}`, or "empty object" type in TypeScript is a common source of confusion for developers unfamiliar with TypeScript's structural typing. `{}` represents any non-nullish value, including literals like 0 and "". Often, developers writing `{}` actually mean either:
- object: representing any object value
- unknown: representing any value at all, including `null` and `undefined` In other words, the "empty object" type {}` really means "any value that is defined". That includes arrays, class instances, functions, and primitives such as string and symbol.
Note that this rule does not report on:
- `{}` as a type constituent in an intersection type (e.g. types like TypeScript's built-in `type NonNullable<T> = T & {}`), as this can be useful in type system operations.
- Interfaces that extend from multiple other interfaces.

## Examples

Examples of incorrect code for this rule:
ts
`let anyObject: {};
let anyValue: {};
interface AnyObjectA {}
interface AnyValueA {}
type AnyObjectB = {};
type AnyValueB = {};`
Examples of correct code for this rule:
ts
`let anyObject: object;
let anyValue: unknown;
type AnyObjectA = object;
type AnyValueA = unknown;
type AnyObjectB = object;
type AnyValueB = unknown;
let objectWith: { property: boolean };
interface InterfaceWith {
property: boolean;
}
type TypeWith = { property: boolean };`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-empty-object-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-empty-object-type": "error",
},
});`bash
`oxlint --deny typescript/no-empty-object-type`

## Version

This rule was added in v0.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_empty_object_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-empty-object-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-empty-object-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html)
- [oxc project](https://github.com/oxc-project/oxc)