# Immutability (react)

**Pattern ID:** `react_immutability`
**Plugin:** `react`

## What it does

Disallows mutating props, state, hook arguments, hook return values, and other values that are immutable by the Rules of React.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/immutability`.

## Why is this bad?

React relies on immutability to know when to re-render; mutating these values causes stale UI and lost updates.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useState } from "react";
function Component() {
const [state] = useState({ a: 0 });
state.a = 1; // mutates state directly
return <div>{state.a}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useState } from "react";
function Component() {
const [state, setState] = useState({ a: 0 });
return <div onClick={() => setState({ a: state.a + 1 })}>{state.a}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/immutability": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/immutability": "error",
},
});`bash
`oxlint --deny react/immutability --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/immutability.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/immutability.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fimmutability)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/immutability.html)
- [oxc project](https://github.com/oxc-project/oxc)