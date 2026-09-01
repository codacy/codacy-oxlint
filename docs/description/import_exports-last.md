# Exports Last (import)

**Pattern ID:** `import_exports-last`
**Plugin:** `import`

## What it does

This rule enforces that all exports are declared at the bottom of the file. This rule will report any export declarations that comes before any non-export statements.

## Why is this bad?

Exports scattered throughout the file can lead to poor code readability and increase the cost of locating the export quickly

## Examples

Examples of incorrect code for this rule:
js
`const bool = true;
export const foo = "bar";
const str = "foo";`
Examples of correct code for this rule:
js
`const arr = ["bar"];
export const bool = true;
export const str = "foo";
export function func() {
console.log("Hello World");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/exports-last": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/exports-last": "error",
},
});`bash
`oxlint --deny import/exports-last --import-plugin`

## Version

This rule was added in v0.15.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/exports_last.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fexports-last)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html)
- [oxc project](https://github.com/oxc-project/oxc)