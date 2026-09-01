# Globals (react)

**Pattern ID:** `react_globals`
**Plugin:** `react`

## What it does

Disallows assigning to or mutating variables declared outside a component or hook during render; side effects must run outside of render.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/globals`.

## Why is this bad?

Components must be pure so React can render them at any time and in any order. Writing to a global during render makes the output depend on how often the component has rendered, and breaks under Strict Mode and concurrent rendering.

## Examples

Examples of incorrect code for this rule:
jsx
`let someGlobal = false;
function Component() {
someGlobal = true; // assignment during render
return <div>{String(someGlobal)}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useEffect } from "react";
let someGlobal = false;
function Component() {
useEffect(() => {
someGlobal = true;
}, []);
return <div />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/globals": "error",
},
});`bash
`oxlint --deny react/globals --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/globals.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/globals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fglobals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/globals.html)
- [oxc project](https://github.com/oxc-project/oxc)