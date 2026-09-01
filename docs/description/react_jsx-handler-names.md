# Jsx Handler Names (react)

**Pattern ID:** `react_jsx-handler-names`
**Plugin:** `react`

## What it does

Ensures that any component or prop methods used to handle events are correctly prefixed.

## Why is this bad?

Inconsistent naming of event handlers and props can reduce code readability and maintainability.

## Examples

Examples of incorrect code for this rule:
jsx
`<MyComponent handleChange={this.handleChange} />
<MyComponent onChange={this.componentChanged} />`
Examples of correct code for this rule:
jsx
`<MyComponent onChange={this.handleChange} />
<MyComponent onChange={this.props.onFoo} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-handler-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-handler-names": "error",
},
});`bash
`oxlint --deny react/jsx-handler-names --react-plugin`

## Version

This rule was added in v1.13.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_handler_names.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-handler-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-handler-names.html)
- [oxc project](https://github.com/oxc-project/oxc)