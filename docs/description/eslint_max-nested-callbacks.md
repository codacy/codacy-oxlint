# Max Nested Callbacks (eslint)

**Pattern ID:** `eslint_max-nested-callbacks`
**Plugin:** `eslint`

## What it does

Enforce a maximum depth that callbacks can be nested. This rule helps to limit the complexity of callback nesting, ensuring that callbacks do not become too deeply nested, improving code readability and maintainability.

## Why is this bad?

Many JavaScript libraries use the callback pattern to manage asynchronous operations. A program of any complexity will most likely need to manage several asynchronous operations at various levels of concurrency. A common pitfall is nesting callbacks excessively, making code harder to read and understand.

## Examples

Examples of incorrect code for this rule with the `{ "max": 3 }` option:
js
`foo1(function () {
foo2(function () {
foo3(function () {
foo4(function () {
// ...
});
});
});
});`
Examples of correct code for this rule with the `{ "max": 3 }` option:
js
`foo1(handleFoo1);
function handleFoo1() {
foo2(handleFoo2);
}
function handleFoo2() {
foo3(handleFoo3);
}
function handleFoo3() {
foo4(handleFoo4);
}
function handleFoo4() {
foo5();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-nested-callbacks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-nested-callbacks": "error",
},
});`bash
`oxlint --deny max-nested-callbacks`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_nested_callbacks.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-nested-callbacks)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-nested-callbacks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html)
- [oxc project](https://github.com/oxc-project/oxc)