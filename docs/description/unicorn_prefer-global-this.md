# Prefer Global This (unicorn)

**Pattern ID:** `unicorn_prefer-global-this`
**Plugin:** `unicorn`

## What it does

Enforces the use of `globalThis` instead of environment‑specific global object aliases (`window`, `self`, or `global`).
Using the standard `globalThis` makes your code portable across browsers, Web Workers, Node.js, and future JavaScript runtimes.

## Why is this bad?

Portability – `window` is only defined in browser main threads, `self` is used in Web Workers, and `global` is Node‑specific. Choosing the wrong alias causes runtime crashes when the code is executed outside of its original environment.
Clarity – `globalThis` clearly communicates that you are referring to the global object itself rather than a particular platform.

## Examples

Examples of incorrect code for this rule:
js
`// Browser‑only
window.alert("Hi");
// Node‑only
if (typeof global.Buffer !== "undefined") {
}
// Web Worker‑only
self.postMessage("done");`
Examples of correct code for this rule:
js
`globalThis.alert("Hi");
if (typeof globalThis.Buffer !== "undefined") {
}
globalThis.postMessage("done");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-global-this": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-global-this": "error",
},
});`bash
`oxlint --deny unicorn/prefer-global-this`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_global_this.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-global-this)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-global-this.html)
- [oxc project](https://github.com/oxc-project/oxc)