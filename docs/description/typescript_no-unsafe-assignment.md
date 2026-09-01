# No Unsafe Assignment (typescript)

**Pattern ID:** `typescript_no-unsafe-assignment`
**Plugin:** `typescript`

## What it does

This rule disallows assigning a value with type `any` to variables and properties.

## Why is this bad?

The `any` type in TypeScript disables type checking and can lead to runtime errors. When you assign an `any` value to a typed variable, you're essentially bypassing TypeScript's type safety without any guarantees about the actual value.

## Examples

Examples of incorrect code for this rule:
ts
`declare const anyValue: any;
const str: string = anyValue; // unsafe assignment
let num: number;
num = anyValue; // unsafe assignment
const obj = {
prop: anyValue as any, // unsafe assignment
};
interface User {
name: string;
age: number;
}
const user: User = anyValue; // unsafe assignment`
Examples of correct code for this rule:
ts
`declare const stringValue: string;
declare const numberValue: number;
declare const unknownValue: unknown;
const str: string = stringValue; // safe
let num: number;
num = numberValue; // safe
// Use type guards with unknown
if (typeof unknownValue === "string") {
const str2: string = unknownValue; // safe after type guard
}
// Explicit any assignment (still not recommended, but intentional)
const anything: any = unknownValue;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unsafe-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unsafe-assignment": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unsafe-assignment`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_assignment.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-assignment/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unsafe_assignment/no_unsafe_assignment.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)