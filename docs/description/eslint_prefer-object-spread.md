# Prefer Object Spread (eslint)

**Pattern ID:** `eslint_prefer-object-spread`
**Plugin:** `eslint`

## What it does

Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead.

## Why is this bad?

When `Object.assign` is called using an object literal as the first argument, this rule requires using the object spread syntax instead. This rule also warns on cases where an `Object.assign` call is made using a single argument that is an object literal, in this case, the `Object.assign` call is not needed.

## Examples

Examples of incorrect code for this rule:
js
`Object.assign({}, foo);
Object.assign({}, { foo: "bar" });
Object.assign({ foo: "bar" }, baz);
Object.assign({}, baz, { foo: "bar" });
Object.assign({}, { ...baz });
// Object.assign with a single argument that is an object literal
Object.assign({});
Object.assign({ foo: bar });`
Examples of correct code for this rule:
js
`({ ...foo });
({ ...baz, foo: "bar" });
// Any Object.assign call without an object literal as the first argument
Object.assign(foo, { bar: baz });
Object.assign(foo, bar);
Object.assign(foo, { bar, baz });
Object.assign(foo, { ...baz });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-object-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-object-spread": "error",
},
});`bash
`oxlint --deny prefer-object-spread`

## Version

This rule was added in v0.15.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_object_spread.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-object-spread)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-object-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)