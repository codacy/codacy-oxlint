# No Extra Non Null Assertion (typescript)

**Pattern ID:** `typescript_no-extra-non-null-assertion`
**Plugin:** `typescript`

## What it does

Disallow extra non-null assertions.

## Why is this bad?

The `!` non-null assertion operator in TypeScript is used to assert that a value's type does not include `null` or `undefined`. Using the operator any more than once on a single value does nothing.

## Examples

Examples of incorrect code for this rule:
ts
`const foo: { bar: number } | null = null;
const bar = foo!!!.bar;`ts
`function foo(bar: number | undefined) {
const bar: number = bar!!!;
}`ts
`function foo(bar?: { n: number }) {
return bar!?.n;
}`
Examples of correct code for this rule:
ts
`const foo: { bar: number } | null = null;
const bar = foo!.bar;`ts
`function foo(bar: number | undefined) {
const bar: number = bar!;
}`ts
`function foo(bar?: { n: number }) {
return bar?.n;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-extra-non-null-assertion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-extra-non-null-assertion": "error",
},
});`bash
`oxlint --deny typescript/no-extra-non-null-assertion`

## Version

This rule was added in v0.0.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_extra_non_null_assertion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-extra-non-null-assertion/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-extra-non-null-assertion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extra-non-null-assertion.html)
- [oxc project](https://github.com/oxc-project/oxc)