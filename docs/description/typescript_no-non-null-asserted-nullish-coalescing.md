# No Non Null Asserted Nullish Coalescing (typescript)

**Pattern ID:** `typescript_no-non-null-asserted-nullish-coalescing`
**Plugin:** `typescript`

## What it does

Disallow non-null assertions in the left operand of a nullish coalescing operator.

## Why is this bad?

The ?? nullish coalescing runtime operator allows providing a default value when dealing with `null` or `undefined`. Using a ! non-null assertion type operator in the left operand of a nullish coalescing operator is redundant, and likely a sign of programmer error or confusion over the two operators.

## Examples

Examples of incorrect code for this rule:
ts
`foo! ?? bar;
foo.bazz! ?? bar;
foo!.bazz! ?? bar;
foo()! ?? bar;
let x!: string;
x! ?? "";
let x: string;
x = foo();
x! ?? "";`
Examples of correct code for this rule:
ts
`foo ?? bar;
foo ?? bar!;
foo!.bazz ?? bar;
foo!.bazz ?? bar!;
foo() ?? bar;`ts
`// This is considered correct code because there's no way for the user to satisfy it.
let x: string;
x! ?? "";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-non-null-asserted-nullish-coalescing": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-non-null-asserted-nullish-coalescing": "error",
},
});`bash
`oxlint --deny typescript/no-non-null-asserted-nullish-coalescing`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_nullish_coalescing.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-non-null-asserted-nullish-coalescing)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html)
- [oxc project](https://github.com/oxc-project/oxc)