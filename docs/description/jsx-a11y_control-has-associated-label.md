# Control Has Associated Label (jsx-a11y)

**Pattern ID:** `jsx-a11y_control-has-associated-label`
**Plugin:** `jsx-a11y`

## What it does

Enforce that a control (an interactive element) has a text label.

## Why is this bad?

An interactive element (such as a `<button>`) without an accessible text label makes it difficult or impossible for users of assistive technologies to understand the purpose of the control.

## Examples

Examples of incorrect code for this rule:
jsx
`<button />
<a href="/path" />
<th />
<div role="button" />
<div role="checkbox" />`
Examples of correct code for this rule:
jsx
`<button>Save</button>
<button aria-label="Save" />
<label>Name <input type="text" /></label>
<a href="/path">Learn more</a>
<th>Column Header</th>
<div role="button">Submit</div>
<div role="checkbox" aria-labelledby="label_id" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/control-has-associated-label": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/control-has-associated-label": "error",
},
});`bash
`oxlint --deny jsx-a11y/control-has-associated-label --jsx-a11y-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/control_has_associated_label.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fcontrol-has-associated-label)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/control-has-associated-label.html)
- [oxc project](https://github.com/oxc-project/oxc)