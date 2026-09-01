# No Await Expression Member (unicorn)

**Pattern ID:** `unicorn_no-await-expression-member`
**Plugin:** `unicorn`

## What it does

Disallows member access from `await` expressions.

## Why is this bad?

When accessing a member from an `await` expression, the `await` expression has to be parenthesized, which is not readable.

## Examples

Examples of incorrect code for this rule:
javascript
`async function bad() {
const secondElement = (await getArray())[1];
}`
Examples of correct code for this rule:
javascript
`async function good() {
const [, secondElement] = await getArray();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-await-expression-member": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-await-expression-member": "error",
},
});`bash
`oxlint --deny unicorn/no-await-expression-member`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_await_expression_member.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-await-expression-member)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html)
- [oxc project](https://github.com/oxc-project/oxc)