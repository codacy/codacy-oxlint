# No Non Null Asserted Optional Chain (typescript)

**Pattern ID:** `typescript_no-non-null-asserted-optional-chain`
**Plugin:** `typescript`

## What it does

Disallow non-null assertions after an optional chain expression.

## Why is this bad?

By design, optional chain expressions (`?.`) provide `undefined` as the expression's value, if the object being accessed is `null` or `undefined`, instead of throwing an error. Using a non-null assertion (`!`) to assert the result of an optional chain expression is contradictory and likely wrong, as it indicates the code is both expecting the value to be potentially `null` or `undefined` and non-null at the same time.
In most cases, either:
- The object is not nullable and did not need the `?.` for its property lookup
- The non-null assertion is incorrect and introduces a type safety hole.

## Examples

Examples of incorrect code for this rule:
ts
`foo?.bar!;
foo?.bar()!;`
Examples of correct code for this rule:
ts
`foo?.bar;
foo.bar!;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-non-null-asserted-optional-chain": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-non-null-asserted-optional-chain": "error",
},
});`bash
`oxlint --deny typescript/no-non-null-asserted-optional-chain`

## Version

This rule was added in v0.0.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_non_null_asserted_optional_chain.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-non-null-asserted-optional-chain)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-optional-chain.html)
- [oxc project](https://github.com/oxc-project/oxc)