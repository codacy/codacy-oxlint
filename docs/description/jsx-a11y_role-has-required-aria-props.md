# Role Has Required Aria Props (jsx-a11y)

**Pattern ID:** `jsx-a11y_role-has-required-aria-props`
**Plugin:** `jsx-a11y`

## What it does

Enforces that elements with ARIA roles must have all required attributes for that role.

## Why is this bad?

Certain ARIA roles require specific attributes to express necessary semantics for assistive technology.

## Examples

Examples of incorrect code for this rule:
jsx
`<div role="checkbox" />`
Examples of correct code for this rule:
jsx
`<div role="checkbox" aria-checked="false" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/role-has-required-aria-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/role-has-required-aria-props": "error",
},
});`bash
`oxlint --deny jsx-a11y/role-has-required-aria-props --jsx-a11y-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/role_has_required_aria_props.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Frole-has-required-aria-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html)
- [oxc project](https://github.com/oxc-project/oxc)