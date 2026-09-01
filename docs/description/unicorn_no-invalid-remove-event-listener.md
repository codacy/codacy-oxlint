# No Invalid Remove Event Listener (unicorn)

**Pattern ID:** `unicorn_no-invalid-remove-event-listener`
**Plugin:** `unicorn`

## What it does

It warns when you use a non-function value as the second argument of `removeEventListener`.

## Why is this bad?

The `removeEventListener` function must be called with a reference to the same function that was passed to `addEventListener`. Calling `removeEventListener` with an inline function or the result of an inline `.bind()` call is indicative of an error, and won't actually remove the listener.

## Examples

Examples of incorrect code for this rule:
javascript
`el.removeEventListener("click", () => {});
el.removeEventListener("click", function () {});`
Examples of correct code for this rule:
javascript
`el.removeEventListener("click", handler);
el.removeEventListener("click", handler.bind(this));`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-invalid-remove-event-listener": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-invalid-remove-event-listener": "error",
},
});`bash
`oxlint --deny unicorn/no-invalid-remove-event-listener`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_invalid_remove_event_listener.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-invalid-remove-event-listener)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html)
- [oxc project](https://github.com/oxc-project/oxc)