# Prefer Find (typescript)

**Pattern ID:** `typescript_prefer-find`
**Plugin:** `typescript`

## What it does

Prefer `.find(...)` over `.filter(...)[0]` for retrieving a single element.

## Why is this bad?

`.filter(...)[0]` builds an intermediate array and is less clear about intent. `.find(...)` directly expresses that only the first matching element is needed.

## Examples

Examples of incorrect code for this rule:
ts
`const first = list.filter((item) => item.active)[0];`
Examples of correct code for this rule:
ts
`const first = list.find((item) => item.active);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/prefer-find": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-find": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-find`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_find.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-find/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_find/prefer_find.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-find.html)
- [oxc project](https://github.com/oxc-project/oxc)