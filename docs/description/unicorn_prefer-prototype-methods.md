# Prefer Prototype Methods (unicorn)

**Pattern ID:** `unicorn_prefer-prototype-methods`
**Plugin:** `unicorn`

## What it does

This rule prefers borrowing methods from the prototype instead of the instance.

## Why is this bad?

“Borrowing” a method from an instance of `Array` or `Object` is less clear than getting it from the corresponding prototype.

## Examples

Examples of incorrect code for this rule:
javascript
`const array = [].slice.apply(bar);
const type = {}.toString.call(foo);
Reflect.apply([].forEach, arrayLike, [callback]);`
Examples of correct code for this rule:
javascript
`const array = Array.prototype.slice.apply(bar);
const type = Object.prototype.toString.call(foo);
Reflect.apply(Array.prototype.forEach, arrayLike, [callback]);
const maxValue = Math.max.apply(Math, numbers);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-prototype-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-prototype-methods": "error",
},
});`bash
`oxlint --deny unicorn/prefer-prototype-methods`

## Version

This rule was added in v0.0.21.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_prototype_methods.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-prototype-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)