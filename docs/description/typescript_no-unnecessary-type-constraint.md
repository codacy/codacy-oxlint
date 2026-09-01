# No Unnecessary Type Constraint (typescript)

**Pattern ID:** `typescript_no-unnecessary-type-constraint`
**Plugin:** `typescript`

## What it does

Disallow unnecessary constraints on generic types.

## Why is this bad?

Generic type parameters (`<T>`) in TypeScript may be "constrained" with an `extends` keyword. When no `extends` is provided, type parameters default a constraint to `unknown`. It is therefore redundant to `extend` from `any` or `unknown`.

## Examples

Examples of incorrect code for this rule:
typescript
`interface FooAny<T extends any> {}
interface FooUnknown<T extends unknown> {}
type BarAny<T extends any> = {};
type BarUnknown<T extends unknown> = {};
const QuuxAny = <T extends any>() => {};
function QuuzAny<T extends any>() {}`typescript
`class BazAny<T extends any> {
quxAny<U extends any>() {}
}`
Examples of correct code for this rule:
typescript
`interface Foo<T> {}
type Bar<T> = {};
const Quux = <T>() => {};
function Quuz<T>() {}`typescript
`class Baz<T> {
qux<U>() {}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-unnecessary-type-constraint": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-unnecessary-type-constraint": "error",
},
});`bash
`oxlint --deny typescript/no-unnecessary-type-constraint`

## Version

This rule was added in v0.0.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_unnecessary_type_constraint.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-unnecessary-type-constraint/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-unnecessary-type-constraint)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html)
- [oxc project](https://github.com/oxc-project/oxc)