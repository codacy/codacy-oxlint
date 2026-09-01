# No This In Sfc (react)

**Pattern ID:** `react_no-this-in-sfc`
**Plugin:** `react`

## What it does

Prevents using `this` in stateless functional components.

## Why is this bad?

In React, stateless functional components (SFCs) receive props and context as function parameters, not through `this`. Using `this` in an SFC typically indicates a mistake when converting from class components or unfamiliarity with the two component styles.

## Examples

Examples of incorrect code for this rule:
jsx
`function Foo(props) {
return <div>{this.props.bar}</div>;
}
function Foo(props) {
const { bar } = this.props;
return <div>{bar}</div>;
}
const Foo = (props) => (this.props.foo ? <span>{props.bar}</span> : null);`
Examples of correct code for this rule:
jsx
`function Foo(props) {
return <div>{props.bar}</div>;
}
function Foo({ bar }) {
return <div>{bar}</div>;
}
class Foo extends React.Component {
render() {
return <div>{this.props.bar}</div>;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-this-in-sfc": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-this-in-sfc": "error",
},
});`bash
`oxlint --deny react/no-this-in-sfc --react-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_this_in_sfc.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-this-in-sfc)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html)
- [oxc project](https://github.com/oxc-project/oxc)