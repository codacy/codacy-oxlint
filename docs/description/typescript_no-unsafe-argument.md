# No Unsafe Argument (typescript)

**Pattern ID:** `typescript_no-unsafe-argument`
**Plugin:** `typescript`

## What it does

This rule disallows calling a function with an argument which is typed as `any`.

## Why is this bad?

The `any` type in TypeScript is a dangerous "escape hatch" from the type system. Using `any` disables most type checking rules and is generally unsafe. When you pass a value typed as `any` to a function, you lose type safety for that function call.

## Examples

Examples of incorrect code for this rule:
ts
`declare const anyValue: any;
function takesString(str: string): void {
console.log(str.length);
}
takesString(anyValue); // unsafe
declare function takesNumber(num: number): number;
const result = takesNumber(anyValue); // unsafe`
Examples of correct code for this rule:
ts
`declare const stringValue: string;
declare const numberValue: number;
declare const unknownValue: unknown;
function takesString(str: string): void {
console.log(str.length);
}
takesString(stringValue); // safe
// Type guard to safely use unknown
if (typeof unknownValue === "string") {
takesString(unknownValue); // safe after type guard
}
// Type assertion if you're sure about the type
takesString(unknownValue as string); // explicitly unsafe, but intentional`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unsafe-argument": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unsafe-argument": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unsafe-argument`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_argument.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-argument/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unsafe_argument/no_unsafe_argument.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html)
- [oxc project](https://github.com/oxc-project/oxc)