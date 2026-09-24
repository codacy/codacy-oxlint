# Tabindex No Positive (jsx-a11y)

**Pattern ID:** `jsx-a11y_tabindex-no-positive`
**Plugin:** `jsx-a11y`

## What it does

Enforces that positive values for the `tabIndex` attribute are not used in JSX.

## Why is this bad?

Using `tabIndex` values greater than `0` can make navigation and interaction difficult for keyboard and assistive technology users, disrupting the logical order of content.

## Examples

Examples of incorrect code for this rule:
jsx
`<span tabIndex="1">foo</span>`
Examples of correct code for this rule:
jsx
`<span tabIndex="0">foo</span>
<span tabIndex="-1">bar</span>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/tabindex-no-positive": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/tabindex-no-positive": "error",
},
});`bash
`oxlint --deny jsx-a11y/tabindex-no-positive --jsx-a11y-plugin`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/tabindex_no_positive.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Ftabindex-no-positive)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html)
- [oxc project](https://github.com/oxc-project/oxc)