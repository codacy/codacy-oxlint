# No Set State (react)

**Pattern ID:** `react_no-set-state`
**Plugin:** `react`

## What it does

Disallow the usage of `this.setState` in React components.

## Why is this bad?

When using an architecture that separates your application state from your UI components (e.g. Flux), it may be desirable to forbid the use of local component state. This rule is especially helpful in read-only applications (that don't use forms), since local component state should rarely be necessary in such cases.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
getInitialState: function () {
return {
name: this.props.name,
};
},
handleClick: function () {
this.setState({
name: this.props.name.toUpperCase(),
});
},
render: function () {
return <div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>;
},
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-set-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-set-state": "error",
},
});`bash
`oxlint --deny react/no-set-state --react-plugin`

## Version

This rule was added in v0.5.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_set_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-set-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-set-state.html)
- [oxc project](https://github.com/oxc-project/oxc)