# New For Builtins (unicorn)

**Pattern ID:** `unicorn_new-for-builtins`
**Plugin:** `unicorn`

## What it does

Enforces the use of `new` for the following builtins: `Object`, `Array`, `ArrayBuffer`, `BigInt64Array`, `BigUint64Array`, `DataView`, `Date`, `Error`, `Float16Array`, `Float32Array`, `Float64Array`, `Function`, `Int8Array`, `Int16Array`, `Int32Array`, `Map`, `WeakMap`, `Set`, `WeakSet`, `Promise`, `RegExp`, `Uint8Array`, `Uint16Array`, `Uint32Array`, `Uint8ClampedArray`, `SharedArrayBuffer`, `Proxy`, `WeakRef`, `FinalizationRegistry`.
Disallows the use of `new` for the following builtins: `String`, `Number`, `Boolean`, `Symbol`, `BigInt`.

## Why is this bad?

Using `new` inconsistently can cause confusion. Constructors like `Array` and `RegExp` should always use `new` to ensure the expected instance type. Meanwhile, `String`, `Number`, `Boolean`, `Symbol`, and `BigInt` should not use `new`, as they create object wrappers instead of primitive values.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = new String("hello world");
const bar = Array(1, 2, 3);
const now = Date();`
Examples of correct code for this rule:
javascript
`const foo = String("hello world");
const bar = new Array(1, 2, 3);
const now = String(new Date());`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/new-for-builtins": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/new-for-builtins": "error",
},
});`bash
`oxlint --deny unicorn/new-for-builtins`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/new_for_builtins.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/new-for-builtins.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fnew-for-builtins)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html)
- [oxc project](https://github.com/oxc-project/oxc)