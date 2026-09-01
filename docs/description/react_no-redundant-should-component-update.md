# No Redundant Should Component Update (react)

**Pattern ID:** `react_no-redundant-should-component-update`
**Plugin:** `react`

## What it does

Disallow usage of `shouldComponentUpdate` when extending `React.PureComponent`.
Note that usage of `PureComponent` is [not recommended in modern React](https://react.dev/reference/react/PureComponent).

## Why is this bad?

`React.PureComponent` automatically implements `shouldComponentUpdate` with a shallow prop and state comparison. Defining `shouldComponentUpdate` in a class that extends `React.PureComponent` is redundant and defeats the purpose of using `React.PureComponent`. If you need custom comparison logic, extend `React.Component` instead.

## Examples

Examples of incorrect code for this rule:
jsx
`class Foo extends React.PureComponent {
shouldComponentUpdate() {
// do check
}
render() {
return <div>Radical!</div>;
}
}
function Bar() {
return class Baz extends React.PureComponent {
shouldComponentUpdate() {
// do check
}
render() {
return <div>Groovy!</div>;
}
};
}`
Examples of correct code for this rule:
jsx
`class Foo extends React.Component {
shouldComponentUpdate() {
// do check
}
render() {
return <div>Radical!</div>;
}
}
function Bar() {
return class Baz extends React.Component {
shouldComponentUpdate() {
// do check
}
render() {
return <div>Groovy!</div>;
}
};
}
class Qux extends React.PureComponent {
render() {
return <div>Tubular!</div>;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-redundant-should-component-update": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-redundant-should-component-update": "error",
},
});`bash
`oxlint --deny react/no-redundant-should-component-update --react-plugin`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_redundant_should_component_update.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-redundant-should-component-update)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html)
- [oxc project](https://github.com/oxc-project/oxc)