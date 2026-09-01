# No Dupe Keys (eslint)

**Pattern ID:** `eslint_no-dupe-keys`
**Plugin:** `eslint`

## What it does

Disallow duplicate keys in object literals.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

Multiple properties with the same key in object literals can cause unexpected behavior in your application.

## Examples

Examples of incorrect code for this rule:
js
`var foo = {
bar: "baz",
bar: "qux",
};
var foo = {
bar: "baz",
bar: "qux",
};
var foo = {
0x1: "baz",
1: "qux",
};`
Examples of correct code for this rule:
js
`var foo = {
bar: "baz",
qux: "qux",
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-dupe-keys": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-dupe-keys": "error",
},
});`bash
`oxlint --deny no-dupe-keys`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_dupe_keys.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-dupe-keys)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-dupe-keys)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-keys.html)
- [oxc project](https://github.com/oxc-project/oxc)