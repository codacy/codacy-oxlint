# Prefer Function Component (react)

**Pattern ID:** `react_prefer-function-component`
**Plugin:** `react`

## What it does

Enforces that React components are written as function components instead of class components.

## Why is this bad?

Function components are simpler, easier to read, and support React hooks. Class components are a legacy pattern that is discouraged in modern React.
This rule is based on the rule from [eslint-plugin-react-prefer-function-component](https://www.npmjs.com/package/eslint-plugin-react-prefer-function-component).

## Examples

Examples of incorrect code for this rule:
jsx
`class Foo extends React.Component {
render() {
return <div>{this.props.foo}</div>;
}
}
class Bar extends React.PureComponent {
render() {
return <div>{this.props.bar}</div>;
}
}`
Examples of correct code for this rule:
jsx
`const Foo = function (props) {
return <div>{props.foo}</div>;
};
const Bar = ({ bar }) => <div>{bar}</div>;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/prefer-function-component": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/prefer-function-component": "error",
},
});`bash
`oxlint --deny react/prefer-function-component --react-plugin`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/prefer_function_component.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-function-component.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fprefer-function-component)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-function-component.html)
- [oxc project](https://github.com/oxc-project/oxc)