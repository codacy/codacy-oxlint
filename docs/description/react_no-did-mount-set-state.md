# No Did Mount Set State (react)

**Pattern ID:** `react_no-did-mount-set-state`
**Plugin:** `react`

## What it does

Disallows using `setState` in the `componentDidMount` lifecycle method.
This rule is not relevant for function components, and so can potentially be disabled for modern React codebases.

## Why is this bad?

Updating the state after a component mount will trigger a second `render()` call and can lead to property/layout thrashing. This can cause performance issues and unexpected behavior.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
componentDidMount: function () {
this.setState({
name: this.props.name.toUpperCase(),
});
},
render: function () {
return <div>Hello {this.state.name}</div>;
},
});`
Examples of correct code for this rule:
jsx
`var Hello = createReactClass({
componentDidMount: function () {
this.onMount(function callback(newName) {
this.setState({
name: newName,
});
});
},
render: function () {
return <div>Hello {this.state.name}</div>;
},
});`

## Configuration

This rule accepts one of the following string values:
type: `"allowed" | "disallow-in-func"`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-did-mount-set-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-did-mount-set-state": "error",
},
});`bash
`oxlint --deny react/no-did-mount-set-state --react-plugin`

## Version

This rule was added in v1.36.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_did_mount_set_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-did-mount-set-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-mount-set-state.html)
- [oxc project](https://github.com/oxc-project/oxc)