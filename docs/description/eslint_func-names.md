# Func Names (eslint)

**Pattern ID:** `eslint_func-names`
**Plugin:** `eslint`

## What it does

Require or disallow named function expressions.

## Why is this bad?

Leaving the name off a function will cause `<anonymous>` to appear in stack traces of errors thrown in it or any function called within it. This makes it more difficult to find where an error is thrown. Providing an explicit name also improves readability and consistency.
Example configuration:
json
`{
"func-names": ["error", "as-needed", { "generators": "never" }]
}`

## Examples

Examples of incorrect code for this rule:
js
`/* func-names: ["error", "always"] */
Foo.prototype.bar = function () {};
const cat = { meow: function () {} };
(function () {
/* ... */
})();
export default function () {}`
Examples of correct code for this rule:
js
`/* func-names: ["error", "always"] */
Foo.prototype.bar = function bar() {};
const cat = { meow() {} };
(function bar() {
/* ... */
})();
export default function foo() {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"func-names": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"func-names": "error",
},
});`bash
`oxlint --deny func-names`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/func_names.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/func-names)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Ffunc-names)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html)
- [oxc project](https://github.com/oxc-project/oxc)