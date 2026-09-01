# Forward Ref Uses Ref (react)

**Pattern ID:** `react_forward-ref-uses-ref`
**Plugin:** `react`

## What it does

Requires that components wrapped with `forwardRef` must have a `ref` parameter. Omitting the `ref` argument is usually a bug, and components not using `ref` don't need to be wrapped by `forwardRef`.

## Why is this bad?

Omitting the `ref` argument makes the `forwardRef` wrapper unnecessary, and can lead to confusion.

## Examples

Examples of incorrect code for this rule:
jsx
`var React = require("react");
var Component = React.forwardRef((props) => <div />);`
Examples of correct code for this rule:
jsx
`var React = require("react");
var Component = React.forwardRef((props, ref) => <div ref={ref} />);
var Component = React.forwardRef((props, ref) => <div />);
function Component(props) {
return <div />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/forward-ref-uses-ref": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/forward-ref-uses-ref": "error",
},
});`bash
`oxlint --deny react/forward-ref-uses-ref --react-plugin`

## Version

This rule was added in v0.16.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/forward_ref_uses_ref.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fforward-ref-uses-ref)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html)
- [oxc project](https://github.com/oxc-project/oxc)