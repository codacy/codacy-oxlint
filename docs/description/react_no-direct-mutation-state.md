# No Direct Mutation State (react)

**Pattern ID:** `react_no-direct-mutation-state`
**Plugin:** `react`

## What it does

This rule forbids the direct mutation of `this.state` in React components.
Note that this rule only applies to class components, it does not apply to function components. For modern React codebases, this rule may not be necessary or relevant.

## Why is this bad?

React components should never mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made.
`this.state` should be treated as if it were immutable.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
componentDidMount: function () {
this.state.name = this.props.name.toUpperCase();
},
render: function () {
return <div>Hello {this.state.name}</div>;
},
});
class Hello extends React.Component {
constructor(props) {
super(props);
doSomethingAsync(() => {
this.state = "bad";
});
}
}`
Examples of correct code for this rule:
jsx
`var Hello = createReactClass({
componentDidMount: function() {
this.setState({
name: this.props.name.toUpperCase();
});
},
render: function() {
return <div>Hello {this.state.name}</div>;
}
});
class Hello extends React.Component {
constructor(props) {
super(props)
this.state = {
foo: 'bar',
}
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-direct-mutation-state": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-direct-mutation-state": "error",
},
});`bash
`oxlint --deny react/no-direct-mutation-state --react-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_direct_mutation_state.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-direct-mutation-state)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html)
- [oxc project](https://github.com/oxc-project/oxc)