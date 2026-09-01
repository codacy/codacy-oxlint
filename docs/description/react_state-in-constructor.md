# State In Constructor (react)

**Pattern ID:** `react_state-in-constructor`
**Plugin:** `react`

## What it does

Enforces the state initialization style to be either in a constructor or with a class property.
This rule is not relevant for function components, and so can potentially be disabled for modern React codebases.

## Why is this bad?

Inconsistent state initialization styles can make the codebase harder to maintain and understand. This rule enforces a consistent pattern across React class components.

## Examples

Examples of incorrect code for this rule by default, with `"always"` mode:
jsx
`class Foo extends React.Component {
state = { bar: 0 };
render() {
return <div>Foo</div>;
}
}`
Examples of correct code for this rule by default, with `"always"` mode:
jsx
`class Foo extends React.Component {
constructor(props) {
super(props);
this.state = { bar: 0 };
}
render() {
return <div>Foo</div>;
}
}`

## Configuration

This rule accepts one of the following string values:
type: `"always" | "never"`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/state-in-constructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/state-in-constructor": "error",
},
});`bash
`oxlint --deny react/state-in-constructor --react-plugin`

## Version

This rule was added in v1.26.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/state_in_constructor.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fstate-in-constructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html)
- [oxc project](https://github.com/oxc-project/oxc)