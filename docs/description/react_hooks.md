# Hooks (react)

**Pattern ID:** `react_hooks`
**Plugin:** `react`

## What it does

Runs the React Compiler's Rules of Hooks validation: hooks must be called unconditionally, in a consistent order, at the top level of a component or hook, and not be used as first-class values.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/hooks`.
This rule overlaps with `react/rules-of-hooks`; upstream ships it disabled for that reason.

## Why is this bad?

React tracks hook state by call order. A hook that is called conditionally or in a different order between renders breaks the association between each hook call and its state, corrupting component state.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component(props) {
if (props.cond) {
useState(0); // hooks may not be called conditionally
}
return <div>{props.text}</div>;
}`
Examples of correct code for this rule:
jsx
`function Component(props) {
const [state, setState] = useState(0);
return <div onClick={() => setState(state + 1)}>{props.text}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/hooks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/hooks": "error",
},
});`bash
`oxlint --deny react/hooks --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/hooks.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hooks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fhooks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/hooks.html)
- [oxc project](https://github.com/oxc-project/oxc)