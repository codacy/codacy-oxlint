# No Useless Undefined (unicorn)

**Pattern ID:** `unicorn_no-useless-undefined`
**Plugin:** `unicorn`

## What it does

Prevents usage of `undefined` in cases where it would be useless.
WARNING
This rule can conflict with the default behaviors of the `eslint/array-callback-return` and `eslint/getter-return` rules. For both rules, you can set the `allowImplicit` option to avoid conflicts.

## Why is this bad?

`undefined` is the default value for new variables, parameters, return statements, etc, so specifying `undefined` in these cases is pointless.

## Examples

Examples of incorrect code for this rule:
javascript
`let foo = undefined;
const noop = () => undefined;`
Examples of correct code for this rule:
javascript
`let foo;
const noop = () => {};`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-undefined": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-undefined": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-undefined`

## Version

This rule was added in v0.6.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_undefined.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-undefined)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html)
- [oxc project](https://github.com/oxc-project/oxc)