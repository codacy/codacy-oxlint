# Array Type (typescript)

**Pattern ID:** `typescript_array-type`
**Plugin:** `typescript`

## What it does

Require consistently using either `T[]` or `Array<T>` for arrays.

## Why is this bad?

Using the `Array` type directly is not idiomatic. Instead, use the array type `T[]` or `Array<T>`.

## Examples

Examples of incorrect code for this rule (with default configuration):
typescript
`const arr: Array<number> = new Array<number>();
const readonlyArr: ReadonlyArray<number> = [1, 2, 3];`
Examples of correct code for this rule (with default configuration):
typescript
`const arr: number[] = new Array<number>();
const readonlyArr: readonly number[] = [1, 2, 3];`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/array-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/array-type": "error",
},
});`bash
`oxlint --deny typescript/array-type`

## Version

This rule was added in v0.2.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/array_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/array-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Farray-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html)
- [oxc project](https://github.com/oxc-project/oxc)