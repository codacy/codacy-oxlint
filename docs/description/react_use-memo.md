# Use Memo (react)

**Pattern ID:** `react_use-memo`
**Plugin:** `react`

## What it does

Validates usage of the `useMemo()` hook against common mistakes, such as passing an async or generator callback or misusing its arguments.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/use-memo`.

## Why is this bad?

An async or generator callback makes `useMemo` memoize a promise or iterator instead of the intended value, and misused arguments prevent memoization from working at all.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useMemo } from "react";
function Component({ a }) {
const x = useMemo(async () => {
await a;
}, [a]);
return <div>{x}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useMemo } from "react";
function Component({ a }) {
const x = useMemo(() => a + 1, [a]);
return <div>{x}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/use-memo": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/use-memo": "error",
},
});`bash
`oxlint --deny react/use-memo --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/use_memo.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/use-memo.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fuse-memo)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/use-memo.html)
- [oxc project](https://github.com/oxc-project/oxc)