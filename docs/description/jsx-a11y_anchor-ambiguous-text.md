# Anchor Ambiguous Text (jsx-a11y)

**Pattern ID:** `jsx-a11y_anchor-ambiguous-text`
**Plugin:** `jsx-a11y`

## What it does

Inspects anchor link text for the use of ambiguous words.
This rule checks the text from the anchor element `aria-label` if available. In absence of an anchor `aria-label` it combines the following text of it's children:
- `aria-label` if available
- if the child is an image, the `alt` text
- the text content of the HTML element

## Why is this bad?

Screen readers users rely on link text for context, ambiguous words such as "click here" do not provide enough context.

## Examples

Examples of incorrect code for this rule:
jsx
`<a>link</a>
<a>click here</a>`
Examples of correct code for this rule:
jsx
`<a>read this tutorial</a>
<a aria-label="oxc linter documentation">click here</a>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/anchor-ambiguous-text": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/anchor-ambiguous-text": "error",
},
});`bash
`oxlint --deny jsx-a11y/anchor-ambiguous-text --jsx-a11y-plugin`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/anchor_ambiguous_text.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fanchor-ambiguous-text)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-ambiguous-text.html)
- [oxc project](https://github.com/oxc-project/oxc)