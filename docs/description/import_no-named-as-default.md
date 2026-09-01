# No Named As Default (import)

**Pattern ID:** `import_no-named-as-default`
**Plugin:** `import`

## What it does

Reports use of an exported name as the locally imported name of a default export. This happens when an imported default export is assigned a name that conflicts with a named export from the same module.

## Why is this bad?

Using a named export's identifier for a default export can cause confusion and errors in understanding which value is being imported. It also reduces code clarity, making it harder for other developers to understand the intended imports.

## Examples

Given
javascript
`// foo.js
export default "foo";
export const bar = true;`
Examples of incorrect code for this rule:
javascript
`// Invalid: using exported name 'bar' as the identifier for default export.
import bar from "./foo.js";`
Examples of correct code for this rule:
javascript
`// Valid: correctly importing default export with a non-conflicting name.
import foo from "./foo.js";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-named-as-default": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-named-as-default": "error",
},
});`bash
`oxlint --deny import/no-named-as-default --import-plugin`

## Version

This rule was added in v0.2.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_named_as_default.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-named-as-default)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html)
- [oxc project](https://github.com/oxc-project/oxc)