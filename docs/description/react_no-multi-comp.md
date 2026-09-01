# No Multi Comp (react)

**Pattern ID:** `react_no-multi-comp`
**Plugin:** `react`

## What it does

Prevents multiple React components from being defined in the same file.

## Why is this bad?

Declaring multiple components in a single file can make it harder to navigate and maintain the codebase. Each component should ideally be in its own file for better organization and reusability.

## Examples

Examples of incorrect code for this rule:
jsx
`function Foo({ name }) {
return <div>Hello {name}</div>;
}
function Bar({ name }) {
return <div>Hello again {name}</div>;
}`
Examples of correct code for this rule:
jsx
`function Foo({ name }) {
return <div>Hello {name}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-multi-comp": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-multi-comp": "error",
},
});`bash
`oxlint --deny react/no-multi-comp --react-plugin`

## Version

This rule was added in v1.43.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_multi_comp.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-multi-comp)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-multi-comp.html)
- [oxc project](https://github.com/oxc-project/oxc)