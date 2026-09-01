# Void Use Memo (react)

**Pattern ID:** `react_void-use-memo`
**Plugin:** `react`

## What it does

Validates that `useMemo()` callbacks return a value and that the memoized result is actually used by the component or hook.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/void-use-memo`.

## Why is this bad?

A `useMemo` callback that returns nothing, or whose result is never used, is not memoizing anything — it is usually a side effect in disguise, which belongs in an event handler or effect instead.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useMemo } from "react";
function Component({ a }) {
useMemo(() => {
console.log(a); // returns nothing, result unused
}, [a]);
return <div>{a}</div>;
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
"react/void-use-memo": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/void-use-memo": "error",
},
});`bash
`oxlint --deny react/void-use-memo --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/void_use_memo.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-use-memo.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fvoid-use-memo)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/void-use-memo.html)
- [oxc project](https://github.com/oxc-project/oxc)