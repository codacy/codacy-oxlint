# No Interactive Element To Noninteractive Role (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-interactive-element-to-noninteractive-role`
**Plugin:** `jsx-a11y`

## What it does

Interactive HTML elements indicate controls in the user interface. Interactive elements include `<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`.
WAI-ARIA roles should not be used to convert an interactive element to a non-interactive element. Non-interactive ARIA roles include `article`, `banner`, `complementary`, `img`, `listitem`, `main`, `region` and `tooltip`.

## Why is this bad?

Using a non-interactive role on an interactive element can confuse assistive technology users.

## Examples

Examples of incorrect code for this rule:
jsx
`<button role="img">Save</button>`
Examples of correct code for this rule:
jsx
`<div role="img">
<button>Save</button>
</div>`

## Configuration

This rule accepts a configuration object with the following properties:
type: `Record<string, array>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-interactive-element-to-noninteractive-role": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-interactive-element-to-noninteractive-role --jsx-a11y-plugin`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_interactive_element_to_noninteractive_role.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-interactive-element-to-noninteractive-role)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-interactive-element-to-noninteractive-role.html)
- [oxc project](https://github.com/oxc-project/oxc)