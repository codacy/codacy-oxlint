# No Aria Hidden On Focusable (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-aria-hidden-on-focusable`
**Plugin:** `jsx-a11y`

## What it does

Enforces that `aria-hidden="true"` is not set on focusable elements.

## Why is this bad?

`aria-hidden="true"` on focusable elements can lead to confusion or unexpected behavior for screen reader users.

## Examples

Examples of incorrect code for this rule:
jsx
`<div aria-hidden="true" tabIndex="0" />`
Examples of correct code for this rule:
jsx
`<div aria-hidden="true" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-aria-hidden-on-focusable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-aria-hidden-on-focusable": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-aria-hidden-on-focusable --jsx-a11y-plugin`

## Version

This rule was added in v0.0.22.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_aria_hidden_on_focusable.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-aria-hidden-on-focusable)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html)
- [oxc project](https://github.com/oxc-project/oxc)