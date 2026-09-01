# Set State In Render (react)

**Pattern ID:** `react_set-state-in-render`
**Plugin:** `react`

## What it does

Disallows unconditionally setting state during render (including inside `useMemo` callbacks), which triggers additional renders and can cause infinite render loops.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/set-state-in-render`.

## Why is this bad?

Each render-time `setState` schedules another render; unconditional ones loop forever, conditional ones still double-render.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useState } from "react";
function Component() {
const [state, setState] = useState(0);
setState(state + 1); // schedules another render on every render
return <div>{state}</div>;
}`
Examples of correct code for this rule:
jsx
`import { useState } from "react";
function Component() {
const [state, setState] = useState(0);
return <button onClick={() => setState(state + 1)}>{state}</button>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/set-state-in-render": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/set-state-in-render": "error",
},
});`bash
`oxlint --deny react/set-state-in-render --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/set_state_in_render.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/set-state-in-render.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fset-state-in-render)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-render.html)
- [oxc project](https://github.com/oxc-project/oxc)