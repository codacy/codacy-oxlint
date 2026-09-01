# No Find Dom Node (react)

**Pattern ID:** `react_no-find-dom-node`
**Plugin:** `react`

## What it does

This rule disallows the use of `findDOMNode`, which was deprecated in 2018 and removed in React 19.

## Why is this bad?

`findDOMNode` is an escape hatch used to access the underlying DOM node. In most cases, use of this escape hatch is discouraged because it pierces the component abstraction. It has been deprecated for years, and was [removed from React entirely in React 19](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-finddomnode).
It should not be used.

## Examples

Examples of incorrect code for this rule:
jsx
`class MyComponent extends Component {
componentDidMount() {
findDOMNode(this).scrollIntoView();
}
render() {
return <div />;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-find-dom-node": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-find-dom-node": "error",
},
});`bash
`oxlint --deny react/no-find-dom-node --react-plugin`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_find_dom_node.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-find-dom-node)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node.html)
- [oxc project](https://github.com/oxc-project/oxc)