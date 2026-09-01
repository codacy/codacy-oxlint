# Jsx Filename Extension (react)

**Pattern ID:** `react_jsx-filename-extension`
**Plugin:** `react`

## What it does

Enforces consistent use of the `.jsx` file extension.

## Why is this bad?

Some bundlers or parsers need to know by the file extension that it contains JSX in order to properly handle the files.

## Examples

Examples of incorrect code for this rule:
jsx
`// filename: MyComponent.js
function MyComponent() {
return <div />;
}`
Examples of correct code for this rule:
jsx
`// filename: MyComponent.jsx
function MyComponent() {
return <div />;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-filename-extension": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-filename-extension": "error",
},
});`bash
`oxlint --deny react/jsx-filename-extension --react-plugin`

## Version

This rule was added in v0.15.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_filename_extension.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-filename-extension)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html)
- [oxc project](https://github.com/oxc-project/oxc)