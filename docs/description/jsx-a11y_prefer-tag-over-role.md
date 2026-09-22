# Prefer Tag Over Role (jsx-a11y)

**Pattern ID:** `jsx-a11y_prefer-tag-over-role`
**Plugin:** `jsx-a11y`

## What it does

Enforces using semantic HTML tags over `role` attribute.

## Why is this bad?

Using semantic HTML tags can improve accessibility and readability of the code.

## Examples

Examples of incorrect code for this rule:
jsx
`<div role="button" />`
Examples of correct code for this rule:
jsx
`<button />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/prefer-tag-over-role": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/prefer-tag-over-role": "error",
},
});`bash
`oxlint --deny jsx-a11y/prefer-tag-over-role --jsx-a11y-plugin`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/prefer_tag_over_role.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fprefer-tag-over-role)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html)
- [oxc project](https://github.com/oxc-project/oxc)