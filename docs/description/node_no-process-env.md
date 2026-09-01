# No Process Env (node)

**Pattern ID:** `node_no-process-env`
**Plugin:** `node`

## What it does

Disallows use of `process.env`.

## Why is this bad?

Directly reading `process.env` can lead to implicit runtime configuration, make code harder to test, and bypass configuration validation.

## Examples

Examples of incorrect code for this rule:
js
`if (process.env.NODE_ENV === "development") {
// ...
}`
Examples of correct code for this rule:
js
`import config from "./config";
if (config.env === "development") {
//...
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-process-env": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-process-env": "error",
},
});`bash
`oxlint --deny node/no-process-env --node-plugin`

## Version

This rule was added in v1.23.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_process_env.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-process-env)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html)
- [oxc project](https://github.com/oxc-project/oxc)