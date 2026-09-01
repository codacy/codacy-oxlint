# Prefer Array Flat Map (unicorn)

**Pattern ID:** `unicorn_prefer-array-flat-map`
**Plugin:** `unicorn`

## What it does

Prefers the use of `.flatMap()` when `map().flat()` are used together.

## Why is this bad?

It is slightly more efficient to use `.flatMap(…)` instead of `.map(…).flat()`.

## Examples

Examples of incorrect code for this rule:
javascript
`const bar = [1, 2, 3].map((i) => [i]).flat();`
Examples of correct code for this rule:
javascript
`const bar = [1, 2, 3].flatMap((i) => [i]);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-array-flat-map": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-array-flat-map": "error",
},
});`bash
`oxlint --deny unicorn/prefer-array-flat-map`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_array_flat_map.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-array-flat-map)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html)
- [oxc project](https://github.com/oxc-project/oxc)