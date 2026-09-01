# No Array Callback Reference (unicorn)

**Pattern ID:** `unicorn_no-array-callback-reference`
**Plugin:** `unicorn`

## What it does

Prevents passing a function reference directly to iterator methods.

## Why is this bad?

Passing functions to iterator methods can cause issues when the function is changed without realizing that the iterator passes 2 more parameters to it (index and array). This can lead to unexpected behavior when the function signature changes.

## Examples

Examples of incorrect code for this rule:
js
`const foo = array.map(callback);
array.forEach(callback);
const result = array.filter(lib.method);`
Examples of correct code for this rule:
js
`const foo = array.map((element) => callback(element));
array.forEach((element) => {
callback(element);
});
const result = array.filter((element) => lib.method(element));
// Built-in functions are allowed
const foo = array.map(String);
const bar = array.filter(Boolean);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-callback-reference": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-callback-reference": "error",
},
});`bash
`oxlint --deny unicorn/no-array-callback-reference`

## Version

This rule was added in v1.19.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_callback_reference.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-callback-reference)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html)
- [oxc project](https://github.com/oxc-project/oxc)