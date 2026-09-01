# No Danger With Children (react)

**Pattern ID:** `react_no-danger-with-children`
**Plugin:** `react`

## What it does

Disallows DOM elements from using both `children` and `dangerouslySetInnerHTML` properties.

## Why is this bad?

React will throw a warning if this rule is ignored and both `children` and `dangerouslySetInnerHTML` are used.

## Examples

Examples of incorrect code for this rule:
jsx
`<div dangerouslySetInnerHTML={{ __html: "HTML" }}>Children</div>;
React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");`
Examples of correct code for this rule:
jsx
`<div>Children</div>
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-danger-with-children": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-danger-with-children": "error",
},
});`bash
`oxlint --deny react/no-danger-with-children --react-plugin`

## Version

This rule was added in v0.9.6.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_danger_with_children.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-danger-with-children)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html)
- [oxc project](https://github.com/oxc-project/oxc)