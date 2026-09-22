# Alt Text (jsx-a11y)

**Pattern ID:** `jsx-a11y_alt-text`
**Plugin:** `jsx-a11y`

## What it does

Enforce that all elements that require alternative text have meaningful information to relay back to the end user.

## Why is this bad?

Alternative text is a critical component of accessibility for screen reader users, enabling them to understand the content and function of an element. Missing or inadequate alt text makes content inaccessible to users who rely on assistive technologies.

## Examples

Examples of incorrect code for this rule:
jsx
`<img src="flower.jpg" />
<img src="flower.jpg" alt="" />
<object />
<area />`
Examples of correct code for this rule:
jsx
`<img src="flower.jpg" alt="A close-up of a white daisy" />
<img src="decorative.jpg" alt="" role="presentation" />
<object aria-label="Interactive chart" />
<area alt="Navigation link" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/alt-text": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/alt-text": "error",
},
});`bash
`oxlint --deny jsx-a11y/alt-text --jsx-a11y-plugin`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/alt_text.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Falt-text)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/alt-text.html)
- [oxc project](https://github.com/oxc-project/oxc)