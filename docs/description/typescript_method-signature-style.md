# Method Signature Style (typescript)

**Pattern ID:** `typescript_method-signature-style`
**Plugin:** `typescript`

## What it does

Enforce using a particular method signature syntax.

## Why is this bad?

TypeScript provides two ways to define an object/interface function property:
ts
`interface Example {
// method shorthand syntax
func(arg: string): number;
// regular property with function type
func: (arg: string) => number;
}`
The two are very similar; most of the time it doesn't matter which one you use. However, when TypeScript's `strictFunctionTypes` option is enabled, there is an important difference: methods are always bivariant in their arguments, while function properties are contravariant. This means that switching from method syntax to property syntax (or vice versa) can cause TypeScript to report new type errors or stop reporting existing ones.
A good practice is to use the TypeScript's `strict` option (which implies `strictFunctionTypes`) which enables correct typechecking for function properties only (method signatures get old behavior).
TypeScript FAQ:
A method and a function property of the same type behave differently. Methods are always bivariant in their argument, while function properties are contravariant in their argument under `strictFunctionTypes`.
See the reasoning behind that in the [TypeScript PR for the compiler option](https://github.com/microsoft/TypeScript/pull/18654).

## Examples

Examples of incorrect code for this rule with `property` option:
ts
`interface T1 {
func(arg: string): number;
}
type T2 = {
func(arg: boolean): void;
};
interface T3 {
func(arg: number): void;
func(arg: string): void;
func(arg: boolean): void;
}`
Examples of correct code for this rule with `property` option:
ts
`interface T1 {
func: (arg: string) => number;
}
type T2 = {
func: (arg: boolean) => void;
};
// this is equivalent to the overload
interface T3 {
func: ((arg: number) => void) & ((arg: string) => void) & ((arg: boolean) => void);
}`
Examples of incorrect code for this rule with `method` option:
ts
`interface T1 {
func: (arg: string) => number;
}
type T2 = {
func: (arg: boolean) => void;
};`
Examples of correct code for this rule with `method` option:
ts
`interface T1 {
func(arg: string): number;
}
type T2 = {
func(arg: boolean): void;
};`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/method-signature-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/method-signature-style": "error",
},
});`bash
`oxlint --deny typescript/method-signature-style`

## Version

This rule was added in v1.68.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/method_signature_style.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/method-signature-style/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fmethod-signature-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/method-signature-style.html)
- [oxc project](https://github.com/oxc-project/oxc)