# Incompatible Library (react)

**Pattern ID:** `react_incompatible-library`
**Plugin:** `react`

## What it does

Warns on usage of library APIs known to be incompatible with memoization (manual or automatic), such as `react-hook-form`'s `watch()`, TanStack Table's `useReactTable()`, and TanStack Virtual's `useVirtualizer()`.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/incompatible-library`.

## Why is this bad?

These APIs rely on components re-rendering on every change; memoization — by the compiler or by hand — breaks their update model, so the UI stops reflecting new data.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useReactTable } from "@tanstack/react-table";
function Component({ columns, data }) {
const table = useReactTable({ columns, data });
return <div>{table.getRowModel().rows.length}</div>;
}`
Examples of correct code for this rule:
jsx
`function Component({ rows }) {
return <div>{rows.length}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/incompatible-library": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/incompatible-library": "error",
},
});`bash
`oxlint --deny react/incompatible-library --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/incompatible_library.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/incompatible-library.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fincompatible-library)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/incompatible-library.html)
- [oxc project](https://github.com/oxc-project/oxc)