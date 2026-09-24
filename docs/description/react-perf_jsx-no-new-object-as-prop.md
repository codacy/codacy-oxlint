# Jsx No New Object As Prop (react-perf)

**Pattern ID:** `react-perf_jsx-no-new-object-as-prop`
**Plugin:** `react-perf`

## What it does

Prevent objects that are local to the current method from being used as values of JSX props.

## Why is this bad?

Using locally defined objects as values for props can lead to unintentional re-renders and performance issues. Every time the parent component renders, a new instance of the Object is created, causing unnecessary re-renders of child components. This also leads to harder-to-maintain code as the component's props are not passed consistently.

## Examples

Examples of incorrect code for this rule:
jsx
`<Item config={{}} />
<Item config={new Object()} />
<Item config={Object()} />
<Item config={this.props.config || {}} />
<Item config={this.props.config ? this.props.config : {}} />
<div style={{display: 'none'}} />`
Examples of correct code for this rule:
jsx
`<Item config={staticConfig} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react-perf"],
"rules": {
"react-perf/jsx-no-new-object-as-prop": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react-perf"],
rules: {
"react-perf/jsx-no-new-object-as-prop": "error",
},
});`bash
`oxlint --deny react-perf/jsx-no-new-object-as-prop --react-perf-plugin`

## Version

This rule was added in v0.2.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/react_perf/jsx_no_new_object_as_prop.rs)
- [Upstream rule docs](https://github.com/cvazac/eslint-plugin-react-perf/blob/master/docs/rules/jsx-no-new-object-as-prop.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react-perf%2Fjsx-no-new-object-as-prop)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html)
- [oxc project](https://github.com/oxc-project/oxc)