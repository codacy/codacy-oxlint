# No Unstable Nested Components (react)

**Pattern ID:** `react_no-unstable-nested-components`
**Plugin:** `react`

## What it does

Disallows defining React components inside other components.

## Why is this bad?

React compares element types by reference during reconciliation. A component defined during render gets a new identity on every render, so React remounts the entire nested subtree and destroys its DOM nodes and state.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component() {
function UnstableNestedComponent() {
return <div />;
}
return <UnstableNestedComponent />;
}`
Examples of correct code for this rule:
jsx
`function StableComponent() {
return <div />;
}
function Component() {
return <StableComponent />;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-unstable-nested-components": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-unstable-nested-components": "error",
},
});`bash
`oxlint --deny react/no-unstable-nested-components --react-plugin`

## Version

This rule was added in v1.66.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_unstable_nested_components.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-unstable-nested-components)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-unstable-nested-components.html)
- [oxc project](https://github.com/oxc-project/oxc)