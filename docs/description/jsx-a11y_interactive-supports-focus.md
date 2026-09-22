# Interactive Supports Focus (jsx-a11y)

**Pattern ID:** `jsx-a11y_interactive-supports-focus`
**Plugin:** `jsx-a11y`

## What it does

Enforce that elements with interactive roles and interaction handlers (mouse or key press) must be focusable.

## Why is this bad?

Elements that handle user interaction (e.g., `onClick`) but are not natively focusable (like `<div>` or `<span>`) must be made focusable so that keyboard-only users and assistive technology users can reach and activate them.
Without a `tabIndex`, these elements are unreachable via keyboard navigation, creating a barrier for users who cannot use a mouse.

## Examples

Examples of incorrect code for this rule:
jsx
`<span onClick={submitForm} role="button">Submit</span>
<a onClick={showNextPage} role="button">Next page</a>`
Examples of correct code for this rule:
jsx
`<div aria-hidden onClick={() => void 0} />
<span onClick={doSomething} tabIndex={0} role="button">Click me!</span>
<span onClick={doSomething} tabIndex={-1} role="menuitem">Click me too!</span>
<a href="javascript:void(0);" onClick={doSomething}>Click ALL the things!</a>
<button onClick={doSomething}>Click the button :)</button>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/interactive-supports-focus": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/interactive-supports-focus": "error",
},
});`bash
`oxlint --deny jsx-a11y/interactive-supports-focus --jsx-a11y-plugin`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/interactive_supports_focus.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Finteractive-supports-focus)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/interactive-supports-focus.html)
- [oxc project](https://github.com/oxc-project/oxc)