# Click Events Have Key Events (jsx-a11y)

**Pattern ID:** `jsx-a11y_click-events-have-key-events`
**Plugin:** `jsx-a11y`

## What it does

Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.

## Why is this bad?

Coding for the keyboard is important for users with physical disabilities who cannot use a mouse, AT compatibility, and screen reader users. This does not apply for interactive or hidden elements.

## Examples

Examples of incorrect code for this rule:
jsx
`<div onClick={() => void 0} />`
Examples of correct code for this rule:
jsx
`<div onClick={() => void 0} onKeyDown={() => void 0} />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/click-events-have-key-events": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/click-events-have-key-events": "error",
},
});`bash
`oxlint --deny jsx-a11y/click-events-have-key-events --jsx-a11y-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/click_events_have_key_events.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fclick-events-have-key-events)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html)
- [oxc project](https://github.com/oxc-project/oxc)