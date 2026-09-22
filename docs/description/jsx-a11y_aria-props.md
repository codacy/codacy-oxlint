# Aria Props (jsx-a11y)

**Pattern ID:** `jsx-a11y_aria-props`
**Plugin:** `jsx-a11y`

## What it does

Enforces that elements do not use invalid ARIA attributes.

## Why is this bad?

Using invalid ARIA attributes can mislead screen readers and other assistive technologies. It may cause the accessibility features of the website to fail, making it difficult for users with disabilities to use the site effectively.
This rule includes fixes for some common typos.

## Examples

Examples of incorrect code for this rule:
jsx
`<input aria-labeledby="address_label" />`
Examples of correct code for this rule:
jsx
`<input aria-labelledby="address_label" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/aria-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/aria-props": "error",
},
});`bash
`oxlint --deny jsx-a11y/aria-props --jsx-a11y-plugin`

## Version

This rule was added in v0.0.22.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/aria_props.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Faria-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html)
- [oxc project](https://github.com/oxc-project/oxc)