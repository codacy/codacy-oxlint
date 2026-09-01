# No Wrapper Object Types (typescript)

**Pattern ID:** `typescript_no-wrapper-object-types`
**Plugin:** `typescript`

## What it does

Disallow the use of wrapper object types.

## Why is this bad?

Wrapper object types are types that are defined in the global scope and are not primitive types. These types are not recommended to be used in TypeScript code.

## Examples

Examples of incorrect code for this rule:
ts
`let myBigInt: BigInt;
let myBoolean: Boolean;
let myNumber: Number;
let myString: String;
let mySymbol: Symbol;
let myObject: Object = "allowed by TypeScript";`
Examples of correct code for this rule:
ts
`let myBigint: bigint;
let myBoolean: boolean;
let myNumber: number;
let myString: string;
let mySymbol: symbol;
let myObject: object = "Type 'string' is not assignable to type 'object'.";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-wrapper-object-types": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-wrapper-object-types": "error",
},
});`bash
`oxlint --deny typescript/no-wrapper-object-types`

## Version

This rule was added in v0.8.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_wrapper_object_types.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-wrapper-object-types/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-wrapper-object-types)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html)
- [oxc project](https://github.com/oxc-project/oxc)