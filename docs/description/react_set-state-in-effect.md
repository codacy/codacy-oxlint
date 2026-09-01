# Set State In Effect (react)

**Pattern ID:** `react_set-state-in-effect`
**Plugin:** `react`

## What it does

Disallows calling `setState` synchronously inside an effect body.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/set-state-in-effect`.

## Why is this bad?

Calling `setState` synchronously in an effect triggers an immediate extra render pass and usually indicates non-local derived data, a derived-event pattern, or improper external-data synchronization. Values that can be computed from props and state should be computed during render instead.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useEffect, useState } from "react";
function Component() {
const [state, setState] = useState(0);
useEffect(() => {
setState((s) => s + 1);
});
return state;
}`
Examples of correct code for this rule:
jsx
`function Component({ value }) {
const doubled = value * 2;
return <div>{doubled}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/set-state-in-effect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/set-state-in-effect": "error",
},
});`bash
`oxlint --deny react/set-state-in-effect --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/set_state_in_effect.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/set-state-in-effect.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fset-state-in-effect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-effect.html)
- [oxc project](https://github.com/oxc-project/oxc)