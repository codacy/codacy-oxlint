# No Useless Collection Argument (unicorn)

**Pattern ID:** `unicorn_no-useless-collection-argument`
**Plugin:** `unicorn`

## What it does

Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.

## Why is this bad?

It is unnecessary to pass an empty array or empty string when constructing a `Set`, `Map`, `WeakSet`, or `WeakMap`, since they accept nullish values.
It is also unnecessary to provide a fallback for possible nullish values.

## Examples

Examples of incorrect code for this rule:
js
`const set = new Set([]);
const set = new Set("");`
Examples of correct code for this rule:
js
`const set = new Set();`
Examples of incorrect code for this rule:
js
`const set = new Set(foo ?? []);
const set = new Set(foo ?? "");`
Examples of correct code for this rule:
js
`const set = new Set(foo);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-collection-argument": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-collection-argument": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-collection-argument`

## Version

This rule was added in v1.28.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_collection_argument.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-collection-argument)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.html)
- [oxc project](https://github.com/oxc-project/oxc)