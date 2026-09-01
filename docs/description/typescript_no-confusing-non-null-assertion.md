# No Confusing Non Null Assertion (typescript)

**Pattern ID:** `typescript_no-confusing-non-null-assertion`
**Plugin:** `typescript`

## What it does

Disallow non-null assertion in locations that may be confusing.

## Why is this bad?

Using a non-null assertion (`!`) next to an assignment or equality check (`=` or `==` or `===`) creates code that is confusing as it looks similar to an inequality check (`!=` or `!==`). Using one next to an `in` or `instanceof` check is also confusing because it may look like the operator is negated.

## Examples

Examples of incorrect code for this rule:
ts
`a! == b; // a non-null assertions(`!`) and an equals test(`==`)
a !== b; // not equals test(`!==`)
a! === b; // a non-null assertions(`!`) and an triple equals test(`===`)
a! in b;
a! instanceof b;`
Examples of correct code for this rule:
ts
`a == b;
a !== b;
a === b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-confusing-non-null-assertion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-confusing-non-null-assertion": "error",
},
});`bash
`oxlint --deny typescript/no-confusing-non-null-assertion`

## Version

This rule was added in v0.6.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_confusing_non_null_assertion.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-confusing-non-null-assertion/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-confusing-non-null-assertion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html)
- [oxc project](https://github.com/oxc-project/oxc)