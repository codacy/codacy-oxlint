# No Top Level Await (node)

**Pattern ID:** `node_no-top-level-await`
**Plugin:** `node`

## What it does

Disallows the use of top-level `await`, including `for await...of` loops and `await using` declarations that are not nested inside a function.

## Why is this bad?

Node.js v20.19 introduced `require(esm)`, but ES modules with top-level `await` cannot be loaded with `require(esm)`. Avoiding top-level `await` keeps a module loadable from both CommonJS `require()` and ESM `import`.

## Examples

Examples of incorrect code for this rule:
js
`const foo = await import("foo");
for await (const e of asyncIterate()) {
// ...
}`
Examples of correct code for this rule:
js
`async function fn() {
const foo = await import("foo");
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["node"],
"rules": {
"node/no-top-level-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["node"],
rules: {
"node/no-top-level-await": "error",
},
});`bash
`oxlint --deny node/no-top-level-await --node-plugin`

## Version

This rule was added in v1.75.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/node/no_top_level_await.rs)
- [Upstream rule docs](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-top-level-await.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=node%2Fno-top-level-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/node/no-top-level-await.html)
- [oxc project](https://github.com/oxc-project/oxc)