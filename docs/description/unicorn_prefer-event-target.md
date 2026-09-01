# Prefer Event Target (unicorn)

**Pattern ID:** `unicorn_prefer-event-target`
**Plugin:** `unicorn`

## What it does

Prefers `EventTarget` over `EventEmitter`.
This rule reduces the bundle size and makes your code more cross-platform friendly.
See the [differences](https://nodejs.org/api/events.html#eventtarget-and-event-api) between `EventEmitter` and `EventTarget`.

## Why is this bad?

While `EventEmitter` is only available in Node.js, `EventTarget` is also available in Deno and browsers.

## Examples

Examples of incorrect code for this rule:
javascript
`class Foo extends EventEmitter {}`
Examples of correct code for this rule:
javascript
`class Foo extends OtherClass {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-event-target": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-event-target": "error",
},
});`bash
`oxlint --deny unicorn/prefer-event-target`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_event_target.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-event-target)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html)
- [oxc project](https://github.com/oxc-project/oxc)