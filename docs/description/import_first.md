# First (import)

**Pattern ID:** `import_first`
**Plugin:** `import`

## What it does

Forbids any non-import statements before imports except directives.

## Why is this bad?

Notably, imports are hoisted, which means the imported modules will be evaluated before any of the statements interspersed between them. Keeping all imports together at the top of the file may prevent surprises resulting from this part of the spec

## Examples

Examples of incorrect code for this rule:
js
`import { x } from "./foo";
export { x };
import { y } from "./bar";`
Examples of correct code for this rule:
js
`import { x } from "./foo";
import { y } from "./bar";
export { x, y };`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/first": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/first": "error",
},
});`bash
`oxlint --deny import/first --import-plugin`

## Version

This rule was added in v0.11.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/first.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Ffirst)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/first.html)
- [oxc project](https://github.com/oxc-project/oxc)