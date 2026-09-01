# Adjacent Overload Signatures (typescript)

**Pattern ID:** `typescript_adjacent-overload-signatures`
**Plugin:** `typescript`

## What it does

Require that function overload signatures be consecutive.

## Why is this bad?

Function overload signatures represent multiple ways a function can be called, potentially with different return types. It's typical for an interface or type alias describing a function to place all overload signatures next to each other. If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code.

## Examples

Examples of incorrect code for this rule:
typescript
`declare namespace Foo {
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;
}
type Foo = {
foo(s: string): void;
foo(n: number): void;
bar(): void;
foo(sn: string | number): void;
};
interface Foo {
foo(s: string): void;
foo(n: number): void;
bar(): void;
foo(sn: string | number): void;
}
class Foo {
foo(s: string): void;
foo(n: number): void;
bar(): void {}
foo(sn: string | number): void {}
}
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/adjacent-overload-signatures": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/adjacent-overload-signatures": "error",
},
});`bash
`oxlint --deny typescript/adjacent-overload-signatures`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/adjacent_overload_signatures.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/adjacent-overload-signatures/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fadjacent-overload-signatures)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/adjacent-overload-signatures.html)
- [oxc project](https://github.com/oxc-project/oxc)