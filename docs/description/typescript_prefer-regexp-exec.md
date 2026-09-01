# Prefer Regexp Exec (typescript)

**Pattern ID:** `typescript_prefer-regexp-exec`
**Plugin:** `typescript`

## What it does

Prefer `RegExp#exec()` over `String#match()` when extracting a regex match.

## Why is this bad?

`exec()` is more explicit about matching with a regular expression and avoids the overloaded behavior of `String#match()`.

## Examples

Examples of incorrect code for this rule:
ts
`const text = "value";
text.match(/v/);`
Examples of correct code for this rule:
ts
`const text = "value";
/v/.exec(text);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/prefer-regexp-exec": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/prefer-regexp-exec": "error",
},
});`bash
`oxlint --type-aware --deny typescript/prefer-regexp-exec`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_regexp_exec.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-regexp-exec/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/prefer_regexp_exec/prefer_regexp_exec.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-regexp-exec.html)
- [oxc project](https://github.com/oxc-project/oxc)