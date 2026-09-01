# No Named Default (import)

**Pattern ID:** `import_no-named-default`
**Plugin:** `import`

## What it does

Reports use of a default export as a locally named import.

## Why is this bad?

Rationale: the syntax exists to import default exports expressively, let's use it.

## Examples

Examples of incorrect code for this rule:
js
`// message: Using exported name 'bar' as identifier for default export.
import { default as foo } from "./foo.js";
import { default as foo, bar } from "./foo.js";`
Examples of correct code for this rule:
js
`import foo from "./foo.js";
import foo, { bar } from "./foo.js";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-named-default": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-named-default": "error",
},
});`bash
`oxlint --deny import/no-named-default --import-plugin`

## Version

This rule was added in v0.15.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_named_default.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-named-default)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-default.html)
- [oxc project](https://github.com/oxc-project/oxc)