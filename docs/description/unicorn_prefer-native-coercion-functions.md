# Prefer Native Coercion Functions (unicorn)

**Pattern ID:** `unicorn_prefer-native-coercion-functions`
**Plugin:** `unicorn`

## What it does

Prefers built-in functions over custom ones with the same functionality.

## Why is this bad?

If a function is equivalent to `String`, `Number`, `BigInt`, `Boolean`, or `Symbol`, you should use the built-in one directly. Wrapping the built-in in a function is moot.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = (v) => String(v);
foo(1);
const foo = (v) => Number(v);
array.some((v) => /* comment */ v);`
Examples of correct code for this rule:
javascript
`String(1);
Number(1);
array.some(Boolean);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-native-coercion-functions": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-native-coercion-functions": "error",
},
});`bash
`oxlint --deny unicorn/prefer-native-coercion-functions`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_native_coercion_functions.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-native-coercion-functions)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html)
- [oxc project](https://github.com/oxc-project/oxc)