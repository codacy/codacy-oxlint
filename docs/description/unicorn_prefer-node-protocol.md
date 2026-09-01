# Prefer Node Protocol (unicorn)

**Pattern ID:** `unicorn_prefer-node-protocol`
**Plugin:** `unicorn`

## What it does

Prefer using the `node:` protocol when importing Node.js built-in modules.

## Why is this bad?

Node.js built-in modules should be imported using the `node:` protocol to avoid ambiguity with local modules.

## Examples

Examples of incorrect code for this rule:
javascript
`import fs from "fs";`
Examples of correct code for this rule:
javascript
`import fs from "node:fs";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-node-protocol": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-node-protocol": "error",
},
});`bash
`oxlint --deny unicorn/prefer-node-protocol`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_node_protocol.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-node-protocol)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html)
- [oxc project](https://github.com/oxc-project/oxc)