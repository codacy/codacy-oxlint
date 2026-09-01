# Static Components (react)

**Pattern ID:** `react_static-components`
**Plugin:** `react`

## What it does

Validates that components are static — defined at module scope rather than recreated on every render — because dynamically recreated components reset state and cause excessive re-rendering.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/static-components`.

## Why is this bad?

A component created during render gets a new identity on every render, so React unmounts and remounts it each time — resetting all of its state and re-rendering its entire subtree.

## Examples

Examples of incorrect code for this rule:
jsx
`function Example(props) {
const Component = createComponent();
return <Component />;
}`
Examples of correct code for this rule:
jsx
`function Inner(props) {
return <div>{props.text}</div>;
}
function Outer() {
return <Inner text="hello" />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/static-components": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/static-components": "error",
},
});`bash
`oxlint --deny react/static-components --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/static_components.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-components.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fstatic-components)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/static-components.html)
- [oxc project](https://github.com/oxc-project/oxc)