# Mouse Events Have Key Events (jsx-a11y)

**Pattern ID:** `jsx-a11y_mouse-events-have-key-events`
**Plugin:** `jsx-a11y`

## What it does

Enforce `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur`.

## Why is this bad?

Coding for the keyboard is important for users with physical disabilities who cannot use a mouse, AT compatibility, and screen reader users.

## Examples

Examples of incorrect code for this rule:
jsx
`<div onMouseOver={() => void 0} />`
Examples of correct code for this rule:
jsx
`<div onMouseOver={() => void 0} onFocus={() => void 0} />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/mouse-events-have-key-events": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/mouse-events-have-key-events": "error",
},
});`bash
`oxlint --deny jsx-a11y/mouse-events-have-key-events --jsx-a11y-plugin`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/mouse_events_have_key_events.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fmouse-events-have-key-events)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html)
- [oxc project](https://github.com/oxc-project/oxc)