# Function Component Definition (react)

**Pattern ID:** `react_function-component-definition`
**Plugin:** `react`

## What it does

Enforces a consistent function form for React function components.

## Why is this bad?

Mixing declarations, function expressions, and arrow functions makes component definitions less predictable and harder to scan.

## Examples

Examples of incorrect code for this rule:
jsx
`const Component = () => <div />;`
Examples of correct code for this rule:
jsx
`function Component() {
return <div />;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/function-component-definition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/function-component-definition": "error",
},
});`bash
`oxlint --deny react/function-component-definition --react-plugin`

## Version

This rule was added in v1.75.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/function_component_definition.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Ffunction-component-definition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/function-component-definition.html)
- [oxc project](https://github.com/oxc-project/oxc)