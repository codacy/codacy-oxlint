# Prefer Array Find (unicorn)

**Pattern ID:** `unicorn_prefer-array-find`
**Plugin:** `unicorn`

## What it does

Encourages using `Array.prototype.find` and `Array.prototype.findLast` instead of taking the first or last matching element from `filter(...)`.

## Why is this bad?

Using `filter(...)[0]` or array destructuring to get the first match is less efficient and more verbose than using `find(...)`. `find` and `findLast` short-circuit when a match is found, whereas `filter` evaluates the entire array.

## Examples

Examples of incorrect code for this rule:
js
`const match = users.filter((u) => u.id === id)[0];
const match = users.filter(fn).shift();
const [match] = users.filter(fn);
const match = users.filter(fn).at(-1);
const match = users.filter(fn).pop();`
Examples of correct code for this rule:
js
`const match = users.find((u) => u.id === id);
const match = users.find(fn);
const match = users.findLast(fn);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-array-find": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-array-find": "error",
},
});`bash
`oxlint --deny unicorn/prefer-array-find`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_array_find.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-find.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-array-find)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html)
- [oxc project](https://github.com/oxc-project/oxc)