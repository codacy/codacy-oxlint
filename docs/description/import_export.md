# Export (import)

**Pattern ID:** `import_export`
**Plugin:** `import`

## What it does

Reports funny business with exports, like repeated exports of names or defaults.

## Why is this bad?

Having multiple exports of the same name can lead to ambiguity and confusion in the codebase. It makes it difficult to track which export is being used and can result in runtime errors if the wrong export is referenced.

## Examples

Examples of incorrect code for this rule:
javascript
`let foo;
export { foo }; // Multiple exports of name 'foo'.
export * from "./export-all"; // Conflicts if export-all.js also exports foo`
Examples of correct code for this rule:
javascript
`let foo;
export { foo as foo1 }; // Renamed export to avoid conflict
export * from "./export-all"; // No conflict if export-all.js also exports foo`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/export": "error",
},
});`bash
`oxlint --deny import/export --import-plugin`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/export.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fexport)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/export.html)
- [oxc project](https://github.com/oxc-project/oxc)