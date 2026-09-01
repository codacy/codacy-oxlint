# No Default Export (import)

**Pattern ID:** `import_no-default-export`
**Plugin:** `import`

## What it does

Disallow modules from having default exports.
This can help your editor provide better auto-import functionality, as named exports offer more explicit and predictable imports compared to default exports.

## Why is this bad?

Default exports can lead to confusion, as the name of the imported value can vary based on how it's imported. This can make refactoring and auto-imports less reliable.

## Examples

Examples of incorrect code for this rule:
javascript
`export default 'bar';
const foo = 'foo';
export { foo as default }`
Examples of correct code for this rule:
javascript
`export const foo = "foo";
export const bar = "bar";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-default-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-default-export": "error",
},
});`bash
`oxlint --deny import/no-default-export --import-plugin`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_default_export.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-default-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html)
- [oxc project](https://github.com/oxc-project/oxc)