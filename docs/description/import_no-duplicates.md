# No Duplicates (import)

**Pattern ID:** `import_no-duplicates`
**Plugin:** `import`

## What it does

Reports if a resolved path is imported more than once in the same module. This helps avoid unnecessary duplicate imports and keeps the code clean.

## Why is this bad?

Importing the same module multiple times can lead to redundancy and unnecessary complexity. It also affects maintainability, as it might confuse developers and result in inconsistent usage of imports across the code.

## Examples

Examples of incorrect code for this rule:
javascript
`import { foo } from "./module";
import { bar } from "./module";
import a from "./module";
import { b } from "./module";`
Examples of correct code for this rule:
typescript
`import { foo, bar } from "./module";
import * as a from "foo"; // separate statements for namespace imports
import { b } from "foo";
import { c } from "foo"; // separate type imports, unless
import type { d } from "foo"; // `prefer-inline` is true`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-duplicates": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-duplicates": "error",
},
});`bash
`oxlint --deny import/no-duplicates --import-plugin`

## Version

This rule was added in v0.2.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_duplicates.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-duplicates)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html)
- [oxc project](https://github.com/oxc-project/oxc)