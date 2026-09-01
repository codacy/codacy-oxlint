# No Dynamic Delete (typescript)

**Pattern ID:** `typescript_no-dynamic-delete`
**Plugin:** `typescript`

## What it does

Disallow using the delete operator on computed key expressions.

## Why is this bad?

Deleting dynamically computed keys can be dangerous and in some cases not well optimized. Using the delete operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures. Consider using a Map or Set if you’re using an object as a key-value collection.

## Examples

Examples of incorrect code for this rule:
ts
`const container: { [i: string]: 0 } = {};
delete container["aa" + "b"];`
Examples of correct code for this rule:
ts
`const container: { [i: string]: 0 } = {};
delete container.aab;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-dynamic-delete": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-dynamic-delete": "error",
},
});`bash
`oxlint --deny typescript/no-dynamic-delete`

## Version

This rule was added in v0.5.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_dynamic_delete.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-dynamic-delete/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-dynamic-delete)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html)
- [oxc project](https://github.com/oxc-project/oxc)