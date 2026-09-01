# Jsx No Literals (react)

**Pattern ID:** `react_jsx-no-literals`
**Plugin:** `react`

## What it does

Disallows usage of unwrapped string literals inside JSX, such as text children of a JSX element or string-valued props.

## Why is this bad?

Hard-coded string literals in JSX make it difficult to support internationalization (i18n). By requiring literals to be wrapped in a JSX expression container (for example, a call to a translation function), this rule helps ensure all user-facing text flows through a single, auditable mechanism rather than being scattered as inline strings throughout the markup.

## Examples

Examples of incorrect code for this rule:
jsx
`<div>Hello world</div>`
Examples of correct code for this rule:
jsx
`<div>{"Hello world"}</div>`

## Configuration

The options shared between the top-level config and each `elementOverrides` entry.
This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-literals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-literals": "error",
},
});`bash
`oxlint --deny react/jsx-no-literals --react-plugin`

## Version

This rule was added in v1.70.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_literals.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-literals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-literals.html)
- [oxc project](https://github.com/oxc-project/oxc)