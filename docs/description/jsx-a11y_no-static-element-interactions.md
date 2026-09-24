# No Static Element Interactions (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-static-element-interactions`
**Plugin:** `jsx-a11y`

## What it does

Enforces that static HTML elements with event handlers must have appropriate ARIA roles.

## Why is this bad?

Static HTML elements do not have semantic meaning in accessibility contexts. When these elements receive click or keyboard event handlers, they must declare a role to indicate their interactive purpose to assistive technologies.

## Examples

Examples of incorrect code for this rule:
jsx
`<div onClick={() => {}} />
<span onKeyDown={handleKeyDown} />`
Examples of correct code for this rule:
jsx
`<button onClick={() => {}} />
<div onClick={() => {}} role="button" />
<input type="text" onClick={() => {}} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-static-element-interactions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-static-element-interactions": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-static-element-interactions --jsx-a11y-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_static_element_interactions.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-static-element-interactions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.html)
- [oxc project](https://github.com/oxc-project/oxc)