# No Unsafe Call (typescript)

**Pattern ID:** `typescript_no-unsafe-call`
**Plugin:** `typescript`

## What it does

This rule disallows calling a value with type `any`.

## Why is this bad?

The `any` type in TypeScript disables type checking. When you call a value typed as `any`, TypeScript cannot verify that it's actually a function, what parameters it expects, or what it returns. This can lead to runtime errors.

## Examples

Examples of incorrect code for this rule:
ts
`declare const anyValue: any;
anyValue(); // unsafe call
anyValue(1, 2, 3); // unsafe call
const result = anyValue("hello"); // unsafe call
// Chained unsafe calls
anyValue().then().catch(); // unsafe`
Examples of correct code for this rule:
ts
`declare const fn: () => void;
declare const fnWithParams: (a: number, b: string) => boolean;
declare const unknownValue: unknown;
fn(); // safe
const result = fnWithParams(1, "hello"); // safe
// Type guard for unknown
if (typeof unknownValue === "function") {
unknownValue(); // safe after type guard
}
// Explicit type assertion if you're certain
(anyValue as () => void)(); // explicitly unsafe but intentional`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-unsafe-call": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-unsafe-call": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-unsafe-call`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unsafe_call.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unsafe-call/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_unsafe_call/no_unsafe_call.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html)
- [oxc project](https://github.com/oxc-project/oxc)