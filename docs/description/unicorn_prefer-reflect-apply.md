# Prefer Reflect Apply (unicorn)

**Pattern ID:** `unicorn_prefer-reflect-apply`
**Plugin:** `unicorn`

## What it does

Disallows the use of `Function.prototype.apply()` and suggests using `Reflect.apply()` instead.

## Why is this bad?

`Reflect.apply()` is arguably less verbose and easier to understand. In addition, when you accept arbitrary methods, it's not safe to assume `.apply()` exists or is not overridden.

## Examples

Examples of incorrect code for this rule:
javascript
`foo.apply(null, [42]);`
Examples of correct code for this rule:
javascript
`Reflect.apply(foo, null);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-reflect-apply": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-reflect-apply": "error",
},
});`bash
`oxlint --deny unicorn/prefer-reflect-apply`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_reflect_apply.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-reflect-apply.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-reflect-apply)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html)
- [oxc project](https://github.com/oxc-project/oxc)