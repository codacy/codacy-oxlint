# No New Buffer (unicorn)

**Pattern ID:** `unicorn_no-new-buffer`
**Plugin:** `unicorn`

## What it does

Disallows the deprecated `new Buffer()` constructor.

## Why is this bad?

Enforces the use of [Buffer.from](https://nodejs.org/api/buffer.html#static-method-bufferfromarray) and [Buffer.alloc()](https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding) instead of [new Buffer()](https://nodejs.org/api/buffer.html#new-bufferarray), which has been deprecated since Node.js 4.

## Examples

Examples of incorrect code for this rule:
javascript
`const buffer = new Buffer(10);`
Examples of correct code for this rule:
javascript
`const buffer = Buffer.alloc(10);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-new-buffer": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-new-buffer": "error",
},
});`bash
`oxlint --deny unicorn/no-new-buffer`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_new_buffer.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-buffer.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-new-buffer)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html)
- [oxc project](https://github.com/oxc-project/oxc)