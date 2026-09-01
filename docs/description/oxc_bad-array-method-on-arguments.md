# Bad Array Method On Arguments (oxc)

**Pattern ID:** `oxc_bad-array-method-on-arguments`
**Plugin:** `oxc`

## What it does

This rule applies when an array method is called on the arguments object itself.

## Why is this bad?

The [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is not an array, but an array-like object. It should be converted to a real array before calling an array method. Otherwise, a TypeError exception will be thrown because of the non-existent method.
Note that you probably don't need this rule if you are using exclusively TypeScript, as it will catch these errors when typechecking.
`arguments` usage is usually discouraged in modern JavaScript, and you should prefer using rest parameters instead, e.g. `function sum(...args)`.

## Examples

Examples of incorrect code for this rule:
javascript
`function add(x, y) {
return x + y;
}
function sum() {
return arguments.reduce(add, 0);
}`
Examples of correct code for this rule:
javascript
`function add(x, y) {
return x + y;
}
function sum(...args) {
return args.reduce(add, 0);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-array-method-on-arguments": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-array-method-on-arguments": "error",
},
});`bash
`oxlint --deny oxc/bad-array-method-on-arguments`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_array_method_on_arguments.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-array-method-on-arguments)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html)
- [oxc project](https://github.com/oxc-project/oxc)