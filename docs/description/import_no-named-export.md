# No Named Export (import)

**Pattern ID:** `import_no-named-export`
**Plugin:** `import`

## What it does

Prohibit named exports.

## Why is this bad?

Named exports require strict identifier matching and can lead to fragile imports, while default exports enforce a single, consistent module entry point.

## Examples

Examples of incorrect code for this rule:
js
`export const foo = "foo";
const bar = "bar";
export { bar };`
Examples of correct code for this rule:
js
`export default 'bar';
const foo = 'foo';
export { foo as default }`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/no-named-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/no-named-export": "error",
},
});`bash
`oxlint --deny import/no-named-export --import-plugin`

## Version

This rule was added in v1.19.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/no_named_export.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fno-named-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html)
- [oxc project](https://github.com/oxc-project/oxc)