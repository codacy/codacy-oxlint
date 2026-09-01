# Prefer Add Event Listener (unicorn)

**Pattern ID:** `unicorn_prefer-add-event-listener`
**Plugin:** `unicorn`

## What it does

Enforces the use of `.addEventListener()` and `.removeEventListener()` over their `on`-function counterparts.
For example, `foo.addEventListener('click', handler);` is preferred over `foo.onclick = handler;` for HTML DOM Events.

## Why is this bad?

There are numerous advantages of using `addEventListener`. Some of these advantages include registering unlimited event handlers and optionally having the event handler invoked only once.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.onclick = () => {};`
Examples of correct code for this rule:
javascript
`foo.addEventListener("click", () => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-add-event-listener": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-add-event-listener": "error",
},
});`bash
`oxlint --deny unicorn/prefer-add-event-listener`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_add_event_listener.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-add-event-listener)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html)
- [oxc project](https://github.com/oxc-project/oxc)