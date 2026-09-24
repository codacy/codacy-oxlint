# No Noninteractive Element Interactions (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-noninteractive-element-interactions`
**Plugin:** `jsx-a11y`

## What it does

Prevents non-interactive HTML elements and elements with non-interactive ARIA roles from being assigned mouse or keyboard event handlers.

## Why is this bad?

Non-interactive elements such as `<main>`, `<h1>`, `<p>`, `<img>`, `<li>`, `<ul>`, and `<ol>` represent content or containers. Adding interaction handlers to them can make the UI difficult or impossible to operate with assistive technology.
Move the handler to an interactive element, such as `<button>` or `<a href>`, or use an element with an appropriate interactive role and keyboard behavior.

## Examples

Examples of incorrect code for this rule:
jsx
`<li onClick={() => {}} />
<div role="listitem" onKeyDown={() => {}} />`
Examples of correct code for this rule:
jsx
`<button onClick={() => {}} />
<div role="button" onClick={() => {}} />
<div onClick={() => {}} role="presentation" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-noninteractive-element-interactions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-noninteractive-element-interactions": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-noninteractive-element-interactions --jsx-a11y-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_noninteractive_element_interactions.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-noninteractive-element-interactions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-interactions.html)
- [oxc project](https://github.com/oxc-project/oxc)