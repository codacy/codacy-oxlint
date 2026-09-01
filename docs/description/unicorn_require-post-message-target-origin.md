# Require Post Message Target Origin (unicorn)

**Pattern ID:** `unicorn_require-post-message-target-origin`
**Plugin:** `unicorn`

## What it does

Enforce using the `targetOrigin` argument with `window.postMessage()`.
Note that this rule may have false positives, as it is not capable of detecting all cases correctly without type information. As such, it may not be a good idea to enable in cases where `postMessage()` may be used with `BroadcastChannel` or worker/service worker contexts (for example, `WorkerGlobalScope#postMessage`, where the second argument is a transfer list or options object, not `targetOrigin`).

## Why is this bad?

When calling `window.postMessage()` without the `targetOrigin` argument, the message cannot be received by any window.

## Examples

Examples of incorrect code for this rule:
js
`window.postMessage(message);`
Examples of correct code for this rule:
js
`window.postMessage(message, "https://example.com");
window.postMessage(message, "*");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/require-post-message-target-origin": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/require-post-message-target-origin": "error",
},
});`bash
`oxlint --deny unicorn/require-post-message-target-origin`

## Version

This rule was added in v0.15.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/require_post_message_target_origin.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frequire-post-message-target-origin)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html)
- [oxc project](https://github.com/oxc-project/oxc)