# Label Has Associated Control (jsx-a11y)

**Pattern ID:** `jsx-a11y_label-has-associated-control`
**Plugin:** `jsx-a11y`

## What it does

Enforce that a label tag has a text label and an associated control.

## Why is this bad?

A form label that either isn't properly associated with a form control (such as an `<input>`), or doesn't contain accessible text, hinders accessibility for users using assistive technologies such as screen readers. The user may not have enough information to understand the purpose of the form control.

## Examples

Examples of incorrect code for this rule:
jsx
`function Foo(props) {
return <label {...props} />
}
<input type="text" />
<label>Surname</label>`
Examples of correct code for this rule:
jsx
`function Foo(props) {
const { htmlFor, ...otherProps } = props;
return <label htmlFor={htmlFor} {...otherProps} />;
}
<label>
<input type="text" />
Surname
</label>;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/label-has-associated-control": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/label-has-associated-control": "error",
},
});`bash
`oxlint --deny jsx-a11y/label-has-associated-control --jsx-a11y-plugin`

## Version

This rule was added in v0.9.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/label_has_associated_control.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Flabel-has-associated-control)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html)
- [oxc project](https://github.com/oxc-project/oxc)