# No Non Null Assertion (typescript)

**Pattern ID:** `typescript_no-non-null-assertion`
**Plugin:** `typescript`

## What it does

Disallow non-null assertions using the `!` postfix operator.

## Why is this bad?

TypeScript's `!` non-null assertion operator asserts to the type system that an expression is non-nullable, as in not `null` or `undefined`. Using assertions to tell the type system new information is often a sign that code is not fully type-safe. It's generally better to structure program logic so that TypeScript understands when values may be nullable.

## Examples

Examples of incorrect code for this rule:
ts
`x!;
x!.y;
x.y!;`
Examples of correct code for this rule:
ts
`x;
x?.y;
x.y;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-non-null-assertion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-non-null-assertion": "error",
},
});`bash
`oxlint --deny typescript/no-non-null-assertion`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_non_null_assertion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-non-null-assertion/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-non-null-assertion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html)
- [oxc project](https://github.com/oxc-project/oxc)