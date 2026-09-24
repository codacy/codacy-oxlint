# Heading Has Content (jsx-a11y)

**Pattern ID:** `jsx-a11y_heading-has-content`
**Plugin:** `jsx-a11y`

## What it does

Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop.

## Why is this bad?

Screen readers alert users to the presence of a heading tag. If the heading is empty or the text cannot be accessed, this could either confuse users or even prevent them from accessing information on the page's structure.

## Examples

Examples of incorrect code for this rule:
jsx
`<h1 />`
Examples of correct code for this rule:
jsx
`<h1>Foo</h1>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/heading-has-content": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/heading-has-content": "error",
},
});`bash
`oxlint --deny jsx-a11y/heading-has-content --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/heading_has_content.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fheading-has-content)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html)
- [oxc project](https://github.com/oxc-project/oxc)