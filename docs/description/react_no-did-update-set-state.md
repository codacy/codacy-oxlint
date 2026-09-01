# No Did Update Set State (react)

**Pattern ID:** `react_no-did-update-set-state`
**Plugin:** `react`

## What it does

Disallow usage of `setState` in `componentDidUpdate`.

## Why is this bad?

Updating the state after a component update will trigger a second `render()` call and can lead to property/layout thrashing.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
componentDidUpdate: function () {
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
componentDidUpdate: function () {
this.props.onUpdate();
},
render: function () {
return <div>Hello {this.props.name}</div>;
},
});`jsx
`var Hello = createReactClass({
componentDidUpdate: function () {
this.onUpdate(function callback(newName) {
this.setState({
name: newName,
});
});
},
render: function () {
return <div>Hello {this.props.name}</div>;
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
"react/no-did-update-set-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-did-update-set-state": "error",
},
});`bash
`oxlint --deny react/no-did-update-set-state --react-plugin`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_did_update_set_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-did-update-set-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-update-set-state.html)
- [oxc project](https://github.com/oxc-project/oxc)