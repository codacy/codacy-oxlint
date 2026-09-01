# No Empty Named Blocks (import)

**Pattern ID:** `import_no-empty-named-blocks`
**Plugin:** `import`

## What it does

Enforces that named import blocks are not empty.

## Why is this bad?

Empty named imports serve no practical purpose and often result from accidental deletions or tool-generated code.

## Examples

Examples of incorrect code for this rule:
js
`import {} from "mod";
import Default from "mod";`
Examples of correct code for this rule:
js
`import { mod } from "mod";
import Default, { mod } from "mod";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-empty-named-blocks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-empty-named-blocks": "error",
},
});`bash
`oxlint --deny import/no-empty-named-blocks --import-plugin`

## Version

This rule was added in v0.16.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_empty_named_blocks.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-empty-named-blocks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html)
- [oxc project](https://github.com/oxc-project/oxc)