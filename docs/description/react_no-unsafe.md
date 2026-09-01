# No Unsafe (react)

**Pattern ID:** `react_no-unsafe`
**Plugin:** `react`

## What it does

This rule identifies and restricts the use of unsafe React lifecycle methods.

## Why is this bad?

Certain lifecycle methods (`componentWillMount`, `componentWillReceiveProps`, and `componentWillUpdate`) are considered unsafe and have been deprecated since React 16.9. They are frequently misused and cause problems in async rendering. Using their `UNSAFE_` prefixed versions or the deprecated names themselves should be avoided.

## Examples

Examples of incorrect code for this rule:
jsx
`// By default, UNSAFE_ prefixed methods are flagged
class Foo extends React.Component {
UNSAFE_componentWillMount() {}
UNSAFE_componentWillReceiveProps() {}
UNSAFE_componentWillUpdate() {}
}
// With checkAliases: true, non-prefixed versions are also flagged
class Bar extends React.Component {
componentWillMount() {}
componentWillReceiveProps() {}
componentWillUpdate() {}
}`
Examples of correct code for this rule:
jsx
`class Foo extends React.Component {
componentDidMount() {}
componentDidUpdate() {}
render() {}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-unsafe": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-unsafe": "error",
},
});`bash
`oxlint --deny react/no-unsafe --react-plugin`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_unsafe.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-unsafe)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-unsafe.html)
- [oxc project](https://github.com/oxc-project/oxc)