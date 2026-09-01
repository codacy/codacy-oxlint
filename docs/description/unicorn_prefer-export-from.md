# Prefer Export From (unicorn)

**Pattern ID:** `unicorn_prefer-export-from`
**Plugin:** `unicorn`

## What it does

When re-exporting from a module, it's unnecessary to import and then export. It can be done in a single export…from declaration. This rule encourages using direct re-export syntax (export ... from) instead of importing and then exporting. It helps reduce boilerplate code and keeps the module scope clean by avoiding unnecessary local bindings.

## Why is this bad?

Separating re-exports into import and export statements is discouraged because it unnecessarily pollutes the current module's scope and adds redundant boilerplate code.

## Examples

Examples of incorrect code for this rule:
js
`import defaultExport from "./foo.js";
export default defaultExport;`
Examples of correct code for this rule:
js
`export { default } from "./foo.js";`
Examples of incorrect code for this rule:
js
`import { named } from "./foo.js";
export { named };`
Examples of correct code for this rule:
js
`export { named } from "./foo.js";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-export-from": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-export-from": "error",
},
});`bash
`oxlint --deny unicorn/prefer-export-from`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_export_from.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-export-from)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-export-from.html)
- [oxc project](https://github.com/oxc-project/oxc)