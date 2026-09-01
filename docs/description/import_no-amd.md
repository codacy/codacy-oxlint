# No Amd (import)

**Pattern ID:** `import_no-amd`
**Plugin:** `import`

## What it does

Forbids the use of AMD `require` and `define` calls.

## Why is this bad?

AMD (Asynchronous Module Definition) is an older module format that is less common in modern JavaScript development, especially with the widespread use of ES modules and CommonJS in Node.js. AMD introduces unnecessary complexity and is often considered outdated. This rule enforces the use of more modern module systems to improve maintainability and consistency across the codebase.

## Examples

Examples of incorrect code for this rule:
javascript
`require([a, b], function () {});`
Examples of correct code for this rule:
javascript
`require("../name");
require(`../name`);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-amd": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-amd": "error",
},
});`bash
`oxlint --deny import/no-amd --import-plugin`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_amd.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-amd)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html)
- [oxc project](https://github.com/oxc-project/oxc)