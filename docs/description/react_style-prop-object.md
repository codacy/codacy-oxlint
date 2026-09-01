# Style Prop Object (react)

**Pattern ID:** `react_style-prop-object`
**Plugin:** `react`

## What it does

Require that the value of the prop `style` be an object or a variable that is an object.

## Why is this bad?

The `style` prop expects an object mapping from style properties to values when using JSX.

## Examples

Examples of incorrect code for this rule:
jsx
`<div style="color: 'red'" />
<div style={true} />
<Hello style={true} />
const styles = true;
<div style={styles} />
React.createElement("div", { style: "color: 'red'" });
React.createElement("div", { style: true });
React.createElement("Hello", { style: true });
const styles = true;
React.createElement("div", { style: styles });`
Examples of correct code for this rule:
jsx
`<div style={{ color: "red" }} />
<Hello style={{ color: "red" }} />
const styles = { color: "red" };
<div style={styles} />
React.createElement("div", { style: { color: 'red' }});
React.createElement("Hello", { style: { color: 'red' }});
const styles = { height: '100px' };
React.createElement("div", { style: styles });`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/style-prop-object": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/style-prop-object": "error",
},
});`bash
`oxlint --deny react/style-prop-object --react-plugin`

## Version

This rule was added in v0.11.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/style_prop_object.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fstyle-prop-object)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html)
- [oxc project](https://github.com/oxc-project/oxc)