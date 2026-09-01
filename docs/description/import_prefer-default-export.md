# Prefer Default Export (import)

**Pattern ID:** `import_prefer-default-export`
**Plugin:** `import`

## What it does

Checks whether there is a default export.

## Why is this bad?

This rule exists to standardize module exports by preferring default exports when a module only has one export, enhancing readability, maintainability.

## Examples

Examples of incorrect code for the `{ target: "single" }` option:
js
`export const foo = "foo";`
Examples of correct code for the `{ target: "single" }` option:
js
`export const foo = "foo";
const bar = "bar";
export default bar;`
Examples of incorrect code for the `{ target: "any" }` option:
js
`export const foo = "foo";
export const baz = "baz";`
Examples of correct code for the `{ target: "any" }` option:
js
`export default function bar() {}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["import"],
"rules": {
"import/prefer-default-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["import"],
rules: {
"import/prefer-default-export": "error",
},
});`bash
`oxlint --deny import/prefer-default-export --import-plugin`

## Version

This rule was added in v1.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/import/prefer_default_export.rs)
- [Upstream rule docs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=import%2Fprefer-default-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html)
- [oxc project](https://github.com/oxc-project/oxc)