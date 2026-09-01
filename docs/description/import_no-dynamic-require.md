# No Dynamic Require (import)

**Pattern ID:** `import_no-dynamic-require`
**Plugin:** `import`

## What it does

Forbids imports that use an expression for the module argument. This includes dynamically resolved paths in `require` or `import` statements.

## Why is this bad?

Using expressions that are resolved at runtime in import statements makes it difficult to determine where the module is being imported from. This can complicate code navigation and hinder static analysis tools, which rely on predictable module paths for linting, bundling, and other optimizations.

## Examples

Examples of incorrect code for this rule:
javascript
`require(name);
require(`../${name}`);`
Examples of correct code for this rule:
javascript
`require("../name");
require(`../name`);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-dynamic-require": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-dynamic-require": "error",
},
});`bash
`oxlint --deny import/no-dynamic-require --import-plugin`

## Version

This rule was added in v0.9.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_dynamic_require.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-dynamic-require)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html)
- [oxc project](https://github.com/oxc-project/oxc)