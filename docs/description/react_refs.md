# Refs (react)

**Pattern ID:** `react_refs`
**Plugin:** `react`

## What it does

Validates correct usage of refs: `ref.current` may not be read or written during render, only in event handlers and effects.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/refs`.

## Why is this bad?

React may not have attached the ref yet during render, and reading it does not subscribe the component to updates — the UI silently goes stale.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useRef } from "react";
function Component() {
const ref = useRef(null);
const value = ref.current; // read during render
return <div>{value}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useEffect, useRef } from "react";
function Component() {
const ref = useRef(null);
useEffect(() => {
ref.current.focus();
}, []);
return <input ref={ref} />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/refs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/refs": "error",
},
});`bash
`oxlint --deny react/refs --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/refs.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/refs.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Frefs)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/refs.html)
- [oxc project](https://github.com/oxc-project/oxc)