# Display Name (react)

**Pattern ID:** `react_display-name`
**Plugin:** `react`

## What it does

Enforces that React components have a `displayName` property.

## Why is this bad?

React DevTools uses `displayName` to show component names in the component tree. Without `displayName`, components will show up as "Unknown" in DevTools.

## Examples

Examples of incorrect code for this rule:
jsx
`const MyComponent = () => <div>Hello</div>;`
Examples of correct code for this rule:
jsx
`const MyComponent = () => <div>Hello</div>;
MyComponent.displayName = "MyComponent";`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/display-name": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/display-name": "error",
},
});`bash
`oxlint --deny react/display-name --react-plugin`

## Version

This rule was added in v1.42.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/display_name.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fdisplay-name)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html)
- [oxc project](https://github.com/oxc-project/oxc)