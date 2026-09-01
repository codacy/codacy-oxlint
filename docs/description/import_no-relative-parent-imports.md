# No Relative Parent Imports (import)

**Pattern ID:** `import_no-relative-parent-imports`
**Plugin:** `import`

## What it does

Forbids importing modules from parent directories using relative paths.

## Why is this bad?

This restriction enforces tree-like folder structures instead of complex graph-like structures, making large codebases easier to maintain. Dependencies flow in one direction (parent to child), which clarifies module relationships.

## Examples

Examples of incorrect code for this rule:
javascript
`import foo from "../bar";
import foo from "../../utils/helper";
const baz = require("../config");
export { qux } from "../shared";`
Examples of correct code for this rule:
javascript
`import foo from "lodash";
import a from "./lib/a";
import b from "./b";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-relative-parent-imports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-relative-parent-imports": "error",
},
});`bash
`oxlint --deny import/no-relative-parent-imports --import-plugin`

## Version

This rule was added in v1.43.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_relative_parent_imports.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-relative-parent-imports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html)
- [oxc project](https://github.com/oxc-project/oxc)