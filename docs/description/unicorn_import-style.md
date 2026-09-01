# Import Style (unicorn)

**Pattern ID:** `unicorn_import-style`
**Plugin:** `unicorn`

## What it does

Enforce specific import styles per module.

## Why is this bad?

Some modules are easier to read when imported in a consistent way. For example, utility modules often work better with named imports, while modules that expose one primary interface are clearer as default imports.

## Examples

Examples of incorrect code for this rule:
js
`import util from "node:util";`
Examples of correct code for this rule:
js
`import { promisify } from "node:util";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/import-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/import-style": "error",
},
});`bash
`oxlint --deny unicorn/import-style`

## Version

This rule was added in v1.67.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/import_style.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fimport-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html)
- [oxc project](https://github.com/oxc-project/oxc)