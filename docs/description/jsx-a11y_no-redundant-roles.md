# No Redundant Roles (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-redundant-roles`
**Plugin:** `jsx-a11y`

## What it does

Enforces that code does not include a redundant `role` property, in the case that it's identical to the implicit `role` property of the element type.

## Why is this bad?

Redundant roles can lead to confusion and verbosity in the codebase.

## Examples

This rule applies for the following elements and their implicit roles:
- `<button>`: `button`
Examples of incorrect code for this rule:
jsx
`<button role="button"></button>`
Examples of correct code for this rule:
jsx
`<button></button>`

## Configuration

This rule accepts a configuration object with the following properties:
type: `Record<string, array>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-redundant-roles": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-redundant-roles": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-redundant-roles --jsx-a11y-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_redundant_roles.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-redundant-roles)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html)
- [oxc project](https://github.com/oxc-project/oxc)