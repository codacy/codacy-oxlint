# No Useless Spread (unicorn)

**Pattern ID:** `unicorn_no-useless-spread`
**Plugin:** `unicorn`

## What it does

Disallows using spread syntax in following, unnecessary cases:
- Spread an array literal as elements of an array literal
- Spread an array literal as arguments of a call or a `new` call
- Spread an object literal as properties of an object literal
- Use spread syntax to clone an array created inline

## Why is this bad?

The following builtins accept an iterable, so it's unnecessary to convert the iterable to an array:
- `Map` constructor
- `WeakMap` constructor
- `Set` constructor
- `WeakSet` constructor
- `TypedArray` constructor
- `Array.from(…)`
- `TypedArray.from(…)`
- `Promise.{all,allSettled,any,race}(…)`
- `Object.fromEntries(…)`
The `for…of` loop can iterate over any iterable object not just array, so it's unnecessary to convert the iterable to an array.
The `yield*` can delegate to another iterable, so it's unnecessary to convert the iterable to an array.

## Examples

Examples of incorrect code for this rule:
javascript
`const array = [firstElement, ...[secondElement], thirdElement];
await Promise.all([...iterable]);
for (const foo of [...set]);
function* foo() {
yield* [...anotherGenerator()];
}
function foo(bar) {
return [...bar.map((x) => x * 2)];
}`
Examples of correct code for this rule:
javascript
`const array = [firstElement, secondElement, thirdElement];
await Promise.all(iterable);
for (const foo of set);
function* foo() {
yield* anotherGenerator();
}
function foo(bar) {
return bar.map((x) => x * 2);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-spread": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-spread": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-spread`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_spread.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-spread)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)