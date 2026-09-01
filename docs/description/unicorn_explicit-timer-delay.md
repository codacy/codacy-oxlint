# Explicit Timer Delay (unicorn)

**Pattern ID:** `unicorn_explicit-timer-delay`
**Plugin:** `unicorn`

## What it does

Enforce or disallow explicit `delay` argument for `setTimeout()` and `setInterval()`.

## Why is this bad?

When using `setTimeout()` or `setInterval()`, the `delay` parameter is optional and defaults to `0`. This rule allows you to enforce whether the `delay` argument should always be explicitly provided or omitted when it's `0`.

## Examples

Examples of incorrect code for this rule:
javascript
`setTimeout(() => console.log("Hello"));
setInterval(callback);
window.setTimeout(() => console.log("Hello"));
globalThis.setInterval(callback);`
Examples of correct code for this rule:
javascript
`setTimeout(() => console.log("Hello"), 0);
setInterval(callback, 0);
window.setTimeout(() => console.log("Hello"), 0);
globalThis.setInterval(callback, 0);
setTimeout(() => console.log("Hello"), 1000);
setInterval(callback, 100);`
With the `"never"` option, explicit `0` delays are disallowed and non-zero delays are still allowed.
Examples of incorrect code for the `"never"` option:
javascript
`setTimeout(() => console.log("Hello"), 0);
setInterval(callback, 0);
window.setTimeout(() => console.log("Hello"), 0);
globalThis.setInterval(callback, 0);`
Examples of correct code for the `"never"` option:
javascript
`setTimeout(() => console.log("Hello"));
setInterval(callback);
window.setTimeout(() => console.log("Hello"));
globalThis.setInterval(callback);
setTimeout(() => console.log("Hello"), 1000);
globalThis.setInterval(callback, 100);`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/explicit-timer-delay": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/explicit-timer-delay": "error",
},
});`bash
`oxlint --deny unicorn/explicit-timer-delay`

## Version

This rule was added in v1.73.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/explicit_timer_delay.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-timer-delay.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fexplicit-timer-delay)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-timer-delay.html)
- [oxc project](https://github.com/oxc-project/oxc)