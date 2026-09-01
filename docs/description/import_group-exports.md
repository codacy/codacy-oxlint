# Group Exports (import)

**Pattern ID:** `import_group-exports`
**Plugin:** `import`

## What it does

Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file.

## Why is this bad?

An export declaration or module.exports assignment can appear anywhere in the code. By requiring a single export declaration all your exports will remain at one place, making it easier to see what exports a module provides.

## Examples

Examples of incorrect code for this rule:
js
`export const first = true;
export const second = true;`
Examples of correct code for this rule:
js
`const first = true;
const second = true;
export { first, second };`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/group-exports": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/group-exports": "error",
},
});`bash
`oxlint --deny import/group-exports --import-plugin`

## Version

This rule was added in v0.16.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/group_exports.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fgroup-exports)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html)
- [oxc project](https://github.com/oxc-project/oxc)