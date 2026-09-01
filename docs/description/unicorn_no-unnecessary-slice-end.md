# No Unnecessary Slice End (unicorn)

**Pattern ID:** `unicorn_no-unnecessary-slice-end`
**Plugin:** `unicorn`

## What it does

Disallows unnecessarily passing a second argument to `slice(...)`, for cases where it would not change the result.

## Why is this bad?

When using `.slice(...)` without a second argument, the second argument defaults to the object's length. As such, passing the length explicitly
- or using `Infinity` - is unnecessary.

## Examples

Examples of incorrect code for this rule:
js
`const foo = string.slice(1, string.length);
const foo = string.slice(1, Infinity);
const foo = string.slice(1, Number.POSITIVE_INFINITY);`
Examples of correct code for this rule:
js
`const foo = string.slice(1);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unnecessary-slice-end": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unnecessary-slice-end": "error",
},
});`bash
`oxlint --deny unicorn/no-unnecessary-slice-end`

## Version

This rule was added in v0.16.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unnecessary_slice_end.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-slice-end.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unnecessary-slice-end)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html)
- [oxc project](https://github.com/oxc-project/oxc)