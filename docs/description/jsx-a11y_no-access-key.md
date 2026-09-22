# No Access Key (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-access-key`
**Plugin:** `jsx-a11y`

## What it does

Enforces that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.

## Why is this bad?

Access keys are HTML attributes that allow web developers to assign keyboard shortcuts to elements. Inconsistencies between keyboard shortcuts and keyboard commands used by screen readers and keyboard-only users create accessibility complications so to avoid complications, access keys should not be used.

## Examples

Examples of incorrect code for this rule:
jsx
`<div accessKey="h" />`
Examples of correct code for this rule:
jsx
`<div />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-access-key": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-access-key": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-access-key --jsx-a11y-plugin`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_access_key.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-access-key)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html)
- [oxc project](https://github.com/oxc-project/oxc)