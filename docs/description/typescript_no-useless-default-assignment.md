# No Useless Default Assignment (typescript)

**Pattern ID:** `typescript_no-useless-default-assignment`
**Plugin:** `typescript`

## What it does

Disallow default assignments that can never be used.

## Why is this bad?

A default assignment is redundant when the value can never be `undefined`. This adds runtime logic and noise without changing behavior.

## Examples

Examples of incorrect code for this rule:
ts
`[1, 2, 3].map((a = 0) => a + 1);`
Examples of correct code for this rule:
ts
`[1, 2, 3].map((a) => a + 1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-useless-default-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-useless-default-assignment": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-useless-default-assignment`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_useless_default_assignment.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-useless-default-assignment/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_useless_default_assignment/no_useless_default_assignment.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-default-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)