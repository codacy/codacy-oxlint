# Jsx Key (react)

**Pattern ID:** `react_jsx-key`
**Plugin:** `react`

## What it does

Enforce `key` prop for elements in an array.

## Why is this bad?

React requires a `key` prop for elements in an array to help identify which items have changed, are added, or are removed.

## Examples

Examples of incorrect code for this rule:
jsx
`[1, 2, 3].map((x) => <App />);
[1, 2, 3]?.map((x) => <ListItem />);`
Examples of correct code for this rule:
jsx
`[1, 2, 3].map((x) => <App key={x} />);
[1, 2, 3]?.map((x) => <ListItem key={x} />);`
NOTE: This rule's option defaults differ from the defaults in the original ESLint plugin. It is recommended to keep all options set to `true` for correctness reasons, but you may want to set them back to `false` to get behavior parity when migrating from ESLint.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-key": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-key": "error",
},
});`bash
`oxlint --deny react/jsx-key --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_key.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-key)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html)
- [oxc project](https://github.com/oxc-project/oxc)