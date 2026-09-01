# Prefer Function Type (typescript)

**Pattern ID:** `typescript_prefer-function-type`
**Plugin:** `typescript`

## What it does

Enforce using function types instead of interfaces with call signatures.

## Why is this bad?

TypeScript allows for two common ways to declare a type for a function:
- Function type: `() => string`
- Object type with a signature: `{ (): string }`
The function type form is generally preferred when possible for being more succinct and readable. Interfaces with only call signatures add unnecessary verbosity without providing additional functionality.

## Examples

Examples of incorrect code for this rule:
typescript
`interface Example {
(): string;
}
function foo(example: { (): number }): number {
return example();
}
interface ReturnsSelf {
(arg: string): this;
}`
Examples of correct code for this rule:
typescript
`type Example = () => string;
function foo(example: () => number): number {
return example();
}
// Returns the function itself, not the `this` argument
type ReturnsSelf = (arg: string) => ReturnsSelf;
// Multiple properties are allowed
function foo(bar: { (): string; baz: number }): string {
return bar();
}
// Multiple call signatures (overloads) are allowed
interface Overloaded {
(data: string): number;
(id: number): string;
}
// this is equivalent to Overloaded interface.
type Intersection = ((data: string) => number) & ((id: number) => string);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-function-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-function-type": "error",
},
});`bash
`oxlint --deny typescript/prefer-function-type`

## Version

This rule was added in v0.2.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_function_type.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-function-type/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-function-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html)
- [oxc project](https://github.com/oxc-project/oxc)