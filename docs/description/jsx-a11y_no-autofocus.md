# No Autofocus (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-autofocus`
**Plugin:** `jsx-a11y`

## What it does

Enforce that `autoFocus` prop is not used on elements.

## Why is this bad?

Autofocusing elements can cause usability issues for sighted and non-sighted users alike. It can be disorienting when focus is shifted without user input and can interfere with assistive technologies. Users should control when and where focus moves on a page.

## Examples

Examples of incorrect code for this rule:
jsx
`<div autoFocus />
<div autoFocus="true" />
<div autoFocus="false" />
<div autoFocus={undefined} />`
Examples of correct code for this rule:
jsx
`<div />
<dialog><input autoFocus /></dialog>
<div role="dialog"><input autoFocus /></div>
<div popover><input autoFocus /></div>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-autofocus": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-autofocus": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-autofocus --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_autofocus.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-autofocus)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html)
- [oxc project](https://github.com/oxc-project/oxc)