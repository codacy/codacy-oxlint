# No Noninteractive Element To Interactive Role (jsx-a11y)

**Pattern ID:** `jsx-a11y_no-noninteractive-element-to-interactive-role`
**Plugin:** `jsx-a11y`

## What it does

Non-interactive HTML elements indicate content and containers in the user interface. Non-interactive elements include `<main>`, `<area>`, `<h1>` (through `<h6>`), `<p>`, `<img>`, `<li>`, `<ul>`, and `<ol>`.
Interactive HTML elements indicate controls in the user interface. Interactive elements include `<a href>`, `<button>`, `<input>`, `<select>`, `<textarea>`.
[WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro) should not be used to convert a non-interactive element to an interactive element. Interactive ARIA roles include `button`, `link`, `checkbox`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, and `textbox`.

## Why is this bad?

Overriding the semantic meaning of non-interactive elements with interactive roles creates confusion for assistive technology users. The element lacks the expected keyboard interaction patterns and focus management that interactive elements provide.

## Examples

Examples of incorrect code for this rule:
jsx
`<h1 role="button">Click me</h1>
<li role="link">Navigate</li>
<article role="button">Submit</article>`
Examples of correct code for this rule:
jsx
`<button>Click me</button>
<a href="/page">Navigate</a>
<div role="button">Submit</div>
<ul role="menu"><li role="menuitem">Item</li></ul>`

## Configuration

This rule accepts a configuration object with the following properties:
type: `Record<string, array>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/no-noninteractive-element-to-interactive-role": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
},
});`bash
`oxlint --deny jsx-a11y/no-noninteractive-element-to-interactive-role --jsx-a11y-plugin`

## Version

This rule was added in v1.64.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/no_noninteractive_element_to_interactive_role.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fno-noninteractive-element-to-interactive-role)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-element-to-interactive-role.html)
- [oxc project](https://github.com/oxc-project/oxc)