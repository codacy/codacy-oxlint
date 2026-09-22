# No Noninteractive Tabindex (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-noninteractive-tabindex`
**Plugin:** `jsx-a11y`

## What it does

This rule checks that non-interactive elements don't have a tabIndex which would make them interactive via keyboard navigation.

## Why is this bad?

Tab key navigation should be limited to elements on the page that can be interacted with. Thus it is not necessary to add a tabindex to items in an unordered list, for example, to make them navigable through assistive technology.
These applications already afford page traversal mechanisms based on the HTML of the page. Generally, we should try to reduce the size of the page's tab ring rather than increasing it.

## Examples

Examples of incorrect code for this rule:
jsx
`<div tabIndex="0" />
<div role="article" tabIndex="0" />
<article tabIndex="0" />
<article tabIndex={0} />`
Examples of correct code for this rule:
jsx
`<div />
<MyButton tabIndex={0} />
<button />
<button tabIndex="0" />
<button tabIndex={0} />
<div />
<div tabIndex="-1" />
<div role="button" tabIndex="0" />
<div role="article" tabIndex="-1" />
<article tabIndex="-1" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-noninteractive-tabindex": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-noninteractive-tabindex": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-noninteractive-tabindex --jsx-a11y-plugin`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_noninteractive_tabindex.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-noninteractive-tabindex)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html)
- [oxc project](https://github.com/oxc-project/oxc)