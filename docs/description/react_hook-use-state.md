# Hook Use State (react)

**Pattern ID:** `react_hook-use-state`
**Plugin:** `react`

## What it does

Ensure destructuring and symmetric naming of useState hook value and setter variables.

## Why is this bad?

This rule checks whether the value and setter variables destructured from a React.useState() call are named symmetrically

## Examples

Examples of incorrect code for this rule:
jsx
`import React from "react";
export default function useColor() {
// useState call is not destructured into value + setter pair
const useStateResult = React.useState();
return useStateResult;
}`jsx
`import React from "react";
export default function useColor() {
// useState call is destructured into value + setter pair, but identifier
// names do not follow the [thing, setThing] naming convention
const [color, updateColor] = React.useState();
return [color, updateColor];
}`
Examples of correct code for this rule:
jsx
`import React from "react";
export default function useColor() {
// useState call is destructured into value + setter pair whose identifiers
// follow the [thing, setThing] naming convention
const [color, setColor] = React.useState();
return [color, setColor];
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/hook-use-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/hook-use-state": "error",
},
});`bash
`oxlint --deny react/hook-use-state --react-plugin`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/hook_use_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fhook-use-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state.html)
- [oxc project](https://github.com/oxc-project/oxc)