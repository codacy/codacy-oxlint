# No Self Import (import)

**Pattern ID:** `import_no-self-import`
**Plugin:** `import`

## What it does

Forbids a module from importing itself. This can sometimes happen accidentally, especially during refactoring.

## Why is this bad?

Importing a module into itself creates a circular dependency, which can cause runtime issues, including infinite loops, unresolved imports, or `undefined` values.

## Examples

Examples of incorrect code for this rule:
javascript
`// foo.js
import foo from "./foo.js"; // Incorrect: module imports itself
const foo = require("./foo"); // Incorrect: module imports itself`
Examples of correct code for this rule:
javascript
`// foo.js
import bar from "./bar.js"; // Correct: module imports another module`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-self-import": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-self-import": "error",
},
});`bash
`oxlint --deny import/no-self-import --import-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_self_import.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-self-import)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html)
- [oxc project](https://github.com/oxc-project/oxc)