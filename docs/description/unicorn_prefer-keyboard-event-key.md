# Prefer Keyboard Event Key (unicorn)

**Pattern ID:** `unicorn_prefer-keyboard-event-key`
**Plugin:** `unicorn`

## What it does

Enforces the use of `KeyboardEvent#key` over `KeyboardEvent#keyCode`, which is deprecated.
The `.key` property is also more semantic and readable.

## Why is this bad?

The `keyCode`, `which`, and `charCode` properties are deprecated and should be avoided in favor of the `key` property.

## Examples

Examples of incorrect code for this rule:
js
`window.addEventListener("keydown", (event) => {
if (event.keyCode === 8) {
console.log("Backspace was pressed");
}
});
window.addEventListener("keydown", (event) => {
console.log(event.keyCode);
});`
Examples of correct code for this rule:
js
`window.addEventListener("keydown", (event) => {
if (event.key === "Backspace") {
console.log("Backspace was pressed");
}
});
window.addEventListener("click", (event) => {
console.log(event.key);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-keyboard-event-key": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-keyboard-event-key": "error",
},
});`bash
`oxlint --deny unicorn/prefer-keyboard-event-key`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_keyboard_event_key.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-keyboard-event-key.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-keyboard-event-key)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html)
- [oxc project](https://github.com/oxc-project/oxc)