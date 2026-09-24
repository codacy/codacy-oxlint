# Autocomplete Valid (jsx-a11y)

**Pattern ID:** `jsx-a11y_autocomplete-valid`
**Plugin:** `jsx-a11y`

## What it does

Enforces that an element's autocomplete attribute must be a valid value.

## Why is this bad?

Incorrectly using the autocomplete attribute may decrease the accessibility of the website for users.

## Examples

Examples of incorrect code for this rule:
jsx
`<input autocomplete="invalid-value" />`
Examples of correct code for this rule:
jsx
`<input autocomplete="name" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/autocomplete-valid": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/autocomplete-valid": "error",
},
});`bash
`oxlint --deny jsx-a11y/autocomplete-valid --jsx-a11y-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/autocomplete_valid.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fautocomplete-valid)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html)
- [oxc project](https://github.com/oxc-project/oxc)