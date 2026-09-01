# No Render Return Value (react)

**Pattern ID:** `react_no-render-return-value`
**Plugin:** `react`

## What it does

This rule will warn you if you try to use the `ReactDOM.render()` return value.

## Why is this bad?

Using the return value from `ReactDOM.render()` is a legacy feature and should not be used.
Note that `ReactDOM.render`[has been removed entirely in React 19](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-reactdom-render) and so should generally not be used.

## Examples

Examples of incorrect code for this rule:
jsx
`var inst = ReactDOM.render(<App />, document.body);
function render() {
return ReactDOM.render(<App />, document.body);
}`
Examples of correct code for this rule:
jsx
`ReactDOM.render(<App />, document.body);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-render-return-value": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-render-return-value": "error",
},
});`bash
`oxlint --deny react/no-render-return-value --react-plugin`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_render_return_value.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-render-return-value)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html)
- [oxc project](https://github.com/oxc-project/oxc)