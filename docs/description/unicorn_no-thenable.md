# No Thenable (unicorn)

**Pattern ID:** `unicorn_no-thenable`
**Plugin:** `unicorn`

## What it does

Disallow defining a `then` property.

## Why is this bad?

If an object is defined as "thenable", once it's accidentally used in an `await` expression, it may cause problems.

## Examples

Examples of incorrect code for this rule:
javascript
`async function example() {
const foo = {
unicorn: 1,
then() {},
};
const { unicorn } = await foo;
console.log("after"); // <- This will never execute
}`
Examples of correct code for this rule:
javascript
`async function example() {
const foo = {
unicorn: 1,
bar() {},
};
const { unicorn } = await foo;
console.log("after");
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-thenable": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-thenable": "error",
},
});`bash
`oxlint --deny unicorn/no-thenable`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_thenable.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-thenable)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html)
- [oxc project](https://github.com/oxc-project/oxc)