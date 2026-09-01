# No Mutable Exports (import)

**Pattern ID:** `import_no-mutable-exports`
**Plugin:** `import`

## What it does

Forbids the use of mutable exports with var or let.

## Why is this bad?

In general, we should always export constants

## Examples

Examples of incorrect code for this rule:
js
`export let count = 2;
export var count = 3;
let count = 4;
export { count };`
Examples of correct code for this rule:
js
`export const count = 1;
export function getCount() {}
export class Counter {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-mutable-exports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-mutable-exports": "error",
},
});`bash
`oxlint --deny import/no-mutable-exports --import-plugin`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_mutable_exports.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-mutable-exports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html)
- [oxc project](https://github.com/oxc-project/oxc)