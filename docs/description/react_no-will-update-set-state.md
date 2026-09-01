# No Will Update Set State (react)

**Pattern ID:** `react_no-will-update-set-state`
**Plugin:** `react`

## What it does

Disallows using `setState` in the `componentWillUpdate` lifecycle method.

## Why is this bad?

Updating the state during the component update step can lead to indeterminate component state and is not allowed. This can cause unexpected behavior and bugs in your React application.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
componentWillUpdate: function () {
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
componentWillUpdate: function () {
this.props.prepareHandler();
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
"react/no-will-update-set-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-will-update-set-state": "error",
},
});`bash
`oxlint --deny react/no-will-update-set-state --react-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_will_update_set_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-will-update-set-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html)
- [oxc project](https://github.com/oxc-project/oxc)