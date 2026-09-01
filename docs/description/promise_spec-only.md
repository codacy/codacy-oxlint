# Spec Only (promise)

**Pattern ID:** `promise_spec-only`
**Plugin:** `promise`

## What it does

Disallow use of non-standard Promise static methods.

## Why is this bad?

Non-standard Promises may cost more maintenance work.

## Examples

Examples of incorrect code for this rule:
js
`Promise.done();`
Examples of correct code for this rule:
js
`Promise.resolve();`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["promise"],
"rules": {
"promise/spec-only": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["promise"],
rules: {
"promise/spec-only": "error",
},
});`bash
`oxlint --deny promise/spec-only --promise-plugin`

## Version

This rule was added in v0.9.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/promise/spec_only.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/spec-only.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=promise%2Fspec-only)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html)
- [oxc project](https://github.com/oxc-project/oxc)