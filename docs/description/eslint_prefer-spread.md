# Prefer Spread (eslint)

**Pattern ID:** `eslint_prefer-spread`
**Plugin:** `eslint`

## What it does

Require spread operators instead of `.apply()`

## Why is this bad?

Before ES2015, one must use `Function.prototype.apply()` to call variadic functions.
javascript
`var args = [1, 2, 3, 4];
Math.max.apply(Math, args);`
In ES2015, one can use spread syntax to call variadic functions.
javascript
`var args = [1, 2, 3, 4];
Math.max(...args);`

## Examples

Examples of incorrect code for this rule:
javascript
`foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);`
Examples of correct code for this rule:
javascript
`// Using spread syntax
foo(...args);
obj.foo(...args);
// The `this` binding is different.
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);
// The argument list is not variadic.
// Those are warned by the `no-useless-call` rule.
foo.apply(undefined, [1, 2, 3]);
foo.apply(null, [1, 2, 3]);
obj.foo.apply(obj, [1, 2, 3]);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-spread": "error",
},
});`bash
`oxlint --deny prefer-spread`

## Version

This rule was added in v0.0.17.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_spread.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-spread)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)