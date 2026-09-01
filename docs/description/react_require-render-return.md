# Require Render Return (react)

**Pattern ID:** `react_require-render-return`
**Plugin:** `react`

## What it does

Require render methods in ES5 and ES2015 React components to return a value.
This rule is not relevant for function components, and so can potentially be disabled for modern React codebases.

## Why is this bad?

When writing the `render` method in a component it is easy to forget to return the JSX content. This rule will warn if the `return` statement is missing.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
render() {
<div>Hello</div>;
},
});
class Hello extends React.Component {
render() {
<div>Hello</div>;
}
}`
Examples of correct code for this rule:
jsx
`var Hello = createReactClass({
render() {
return <div>Hello</div>;
},
});
class Hello extends React.Component {
render() {
return <div>Hello</div>;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/require-render-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/require-render-return": "error",
},
});`bash
`oxlint --deny react/require-render-return --react-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/require_render_return.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Frequire-render-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/require-render-return.html)
- [oxc project](https://github.com/oxc-project/oxc)