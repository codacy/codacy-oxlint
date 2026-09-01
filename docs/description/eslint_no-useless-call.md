# No Useless Call (eslint)

**Pattern ID:** `eslint_no-useless-call`
**Plugin:** `eslint`

## What it does

Disallow unnecessary calls to `.call()` and `.apply()`

## Why is this bad?

`Function.prototype.call()` and `Function.prototype.apply()` are slower than the normal function invocation.
This rule compares code statically to check whether or not thisArg is changed. So if the code about thisArg is a dynamic expression, this rule cannot judge correctly.

## Examples

Examples of incorrect code for this rule:
js
`// These are the same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);
// These are the same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);`
Examples of correct code for this rule:
js
`// The `this` binding is different.
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);
// The argument list is variadic.
// Those are warned by the `prefer-spread` rule.
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-call": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-call": "error",
},
});`bash
`oxlint --deny no-useless-call`

## Version

This rule was added in v0.15.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_call.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-call)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-call)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call.html)
- [oxc project](https://github.com/oxc-project/oxc)