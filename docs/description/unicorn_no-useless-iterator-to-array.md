# No Useless Iterator To Array (unicorn)

**Pattern ID:** `unicorn_no-useless-iterator-to-array`
**Plugin:** `unicorn`

## What it does

Disallow unnecessary `.toArray()` on iterators.

## Why is this bad?

`Iterator.prototype.toArray()` converts an iterator to an array. However, this conversion is unnecessary in many cases:
- The following builtins accept an iterable directly: - `Map` constructor
- `WeakMap` constructor
- `Set` constructor
- `WeakSet` constructor
- `TypedArray` constructor
- `Array.from(…)`
- `TypedArray.from(…)`
- `Object.fromEntries(…)`
- `for…of` can iterate over any iterable, so converting to an array first is unnecessary.
- `yield*` can delegate to any iterable, so converting to an array first is unnecessary.
- `Promise.{all,allSettled,any,race}(…)` accept an iterable, so `.toArray()` is unnecessary. Removing `.toArray()` here can change a synchronous throw into an asynchronous rejection when iteration fails, so these cases are suggestions rather than autofixes.
- The spread operator (`...`) works on any iterable, so converting to an array first is unnecessary.
- Some `Array` methods also exist on `Iterator`, so converting to an array to call them is unnecessary: - `.every()`
- `.find()`
- `.forEach()`
- `.reduce()`
- `.some()`
`Array` callbacks receive additional arguments (for example, the 3rd `array` argument) that `Iterator` callbacks do not. Removing `.toArray()` can change behavior if callbacks depend on those extra arguments, so those cases are reported as suggestions.
This rule does not flag `.filter()`, `.map()`, or `.flatMap()` because their `Iterator` versions return iterators, not arrays, so the semantics differ.

## Examples

Examples of incorrect code for this rule:
js
`const set = new Set(iterator.toArray());
const results = await Promise.all(iterator.toArray());
for (const item of iterator.toArray());
function* foo() {
yield* iterator.toArray();
}
const items = [...iterator.toArray()];
call(...iterator.toArray());
iterator.toArray().every(fn);`
Examples of correct code for this rule:
js
`const set = new Set(iterator);
const results = await Promise.all(iterator);
for (const item of iterator);
function * foo() {
yield * iterator;
}
const items = [...iterator];
call(...iterator);
iterator.every(fn);
`.filter()` returns an array on Array but an iterator on Iterator
iterator.toArray().filter(fn);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-useless-iterator-to-array": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-useless-iterator-to-array": "error",
},
});`bash
`oxlint --deny unicorn/no-useless-iterator-to-array`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_useless_iterator_to_array.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-useless-iterator-to-array)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-iterator-to-array.html)
- [oxc project](https://github.com/oxc-project/oxc)