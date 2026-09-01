# Forbid Component Props (react)

**Pattern ID:** `react_forbid-component-props`
**Plugin:** `react`

## What it does

This rule prevents passing of props to components. This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`). By default this rule prevents passing of props that add lots of complexity (`className`, `style`) to Components. The list of forbidden props can be customized with the forbid option.

## Why is this bad?

This rule checks all JSX elements and verifies that no forbidden props are used on components. This rule is off by default.

## Examples

Examples of incorrect code for this rule:
jsx
`<Hello className='foo' />
<Hello style={{color: 'red'}} />`
Examples of correct code for this rule:
jsx
`<Hello name='Joe' />
<div className='foo' />
<div style={{color: 'red'}} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/forbid-component-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/forbid-component-props": "error",
},
});`bash
`oxlint --deny react/forbid-component-props --react-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/forbid_component_props.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fforbid-component-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-component-props.html)
- [oxc project](https://github.com/oxc-project/oxc)