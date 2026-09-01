# Prefer Es6 Class (react)

**Pattern ID:** `react_prefer-es6-class`
**Plugin:** `react`

## What it does

React offers you two ways to create traditional components: using the `create-react-class` package or the newer ES2015 class system.
Note that function components are preferred over class components in modern React, and it is especially discouraged to use `createReactClass` in modern React.

## Why is this bad?

This rule enforces a consistent React class style.

## Examples

Examples of incorrect code for this rule by default:
jsx
`var Hello = createReactClass({
render: function () {
return <div>Hello {this.props.name}</div>;
},
});`

## Configuration

This rule accepts one of the following string values:
type: `"always" | "never"`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/prefer-es6-class": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/prefer-es6-class": "error",
},
});`bash
`oxlint --deny react/prefer-es6-class --react-plugin`

## Version

This rule was added in v0.5.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/prefer_es6_class.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fprefer-es6-class)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class.html)
- [oxc project](https://github.com/oxc-project/oxc)