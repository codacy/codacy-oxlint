# Prefer Module (unicorn)

**Pattern ID:** `unicorn_prefer-module`
**Plugin:** `unicorn`

## What it does

Prefer JavaScript modules (ESM) over CommonJS.

## Why is this bad?

CommonJS globals and patterns (`require`, `module`, `exports`, `__filename`, `__dirname`) make code harder to migrate and can block ESM-only features.

## Examples

Examples of incorrect code for this rule:
js
`"use strict";
const foo = require("foo");
module.exports = foo;`
Examples of correct code for this rule:
js
`import foo from "foo";
export default foo;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-module": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-module": "error",
},
});`bash
`oxlint --deny unicorn/prefer-module`

## Version

This rule was added in v1.50.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_module.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-module)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-module.html)
- [oxc project](https://github.com/oxc-project/oxc)