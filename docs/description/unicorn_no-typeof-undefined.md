# No Typeof Undefined (unicorn)

**Pattern ID:** `unicorn_no-typeof-undefined`
**Plugin:** `unicorn`

## What it does

Disallow `typeof` comparisons with `undefined`.

## Why is this bad?

Checking if a value is `undefined` by using `typeof value === 'undefined'` is needlessly verbose. It's generally better to compare against `undefined` directly. The only time `typeof` is needed is when a global variable potentially does not exists, in which case, using `globalThis.value === undefined` may be better.

## Examples

Examples of incorrect code for this rule:
javascript
`typeof foo === "undefined";`
Examples of correct code for this rule:
javascript
`foo === undefined;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-typeof-undefined": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-typeof-undefined": "error",
},
});`bash
`oxlint --deny unicorn/no-typeof-undefined`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_typeof_undefined.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-typeof-undefined)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html)
- [oxc project](https://github.com/oxc-project/oxc)