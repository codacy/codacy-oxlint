# No String Refs (react)

**Pattern ID:** `react_no-string-refs`
**Plugin:** `react`

## What it does

This rule prevents using the deprecated behavior of string literals in ref attributes.

## Why is this bad?

Using string literals in ref attributes has been deprecated since React 16.3.0.
String refs are [removed entirely in React 19](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-string-refs), and so this rule can be disabled if on React 19+.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = createReactClass({
render: function () {
return <div ref="hello">Hello, world.</div>;
},
});
var Hello = createReactClass({
componentDidMount: function () {
var component = this.refs.hello;
// ...do something with component
},
render: function () {
return <div ref="hello">Hello, world.</div>;
},
});`
Examples of correct code for this rule:
jsx
`var Hello = createReactClass({
componentDidMount: function () {
var component = this.hello;
// ...do something with component
},
render() {
return (
<div
ref={(c) => {
this.hello = c;
}}
>
Hello, world.
</div>
);
},
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-string-refs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-string-refs": "error",
},
});`bash
`oxlint --deny react/no-string-refs --react-plugin`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_string_refs.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-string-refs)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html)
- [oxc project](https://github.com/oxc-project/oxc)