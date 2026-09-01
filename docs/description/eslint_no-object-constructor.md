# No Object Constructor (eslint)

**Pattern ID:** `eslint_no-object-constructor`
**Plugin:** `eslint`

## What it does

Disallow calls to the Object constructor without an argument.

## Why is this bad?

Use of the Object constructor to construct a new empty object is generally discouraged in favor of object literal notation because of conciseness and because the Object global may be redefined. The exception is when the Object constructor is used to intentionally wrap a specified value which is passed as an argument.

## Examples

Examples of incorrect code for this rule:
js
`Object();
new Object();`
Examples of correct code for this rule:
js
`Object("foo");
const obj = { a: 1, b: 2 };
const isObject = (value) => value === Object(value);
const createObject = (Object) => new Object();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-object-constructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-object-constructor": "error",
},
});`bash
`oxlint --deny no-object-constructor`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_object_constructor.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-object-constructor)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-object-constructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html)
- [oxc project](https://github.com/oxc-project/oxc)