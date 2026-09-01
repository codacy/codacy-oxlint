# Forbid Dom Props (react)

**Pattern ID:** `react_forbid-dom-props`
**Plugin:** `react`

## What it does

This rule prevents passing of props to elements. This rule only applies to DOM Nodes (e.g. `<div />`) and not Components (e.g. `<Component />`). The list of forbidden props can be customized with the forbid option.

## Why is this bad?

This rule checks all JSX elements and verifies that no forbidden props are used on DOM Nodes. This rule is off by default.

## Examples

Examples of incorrect code for this rule:
jsx
`// [1, { "forbid": ["id"] }]
<div id='Joe' />
// [1, { "forbid": ["style"] }]
<div style={{color: 'red'}} />`
Examples of correct code for this rule:
jsx
`// [1, { "forbid": ["id"] }]
<Hello id='foo' />
// [1, { "forbid": ["id"] }]
<Hello id={{color: 'red'}} />`

## Configuration

Configuration for the `forbid-dom-props` rule.
This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/forbid-dom-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/forbid-dom-props": "error",
},
});`bash
`oxlint --deny react/forbid-dom-props --react-plugin`

## Version

This rule was added in v1.24.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/forbid_dom_props.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fforbid-dom-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-dom-props.html)
- [oxc project](https://github.com/oxc-project/oxc)