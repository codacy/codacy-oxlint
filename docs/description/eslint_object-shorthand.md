# Object Shorthand (eslint)

**Pattern ID:** `eslint_object-shorthand`
**Plugin:** `eslint`

## What it does

Require or disallow method and property shorthand syntax for object literals

## Examples

Here are a few common examples using the ES5 syntax:
javascript
`var properties = { x: x, y: y, z: z };
var methods = { a: function () {}, b: function () {} };`
Now here are ES6 equivalents:
javascript
`var properties = { x, y, z };
var methods = { a() {}, b() {} };`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"object-shorthand": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"object-shorthand": "error",
},
});`bash
`oxlint --deny object-shorthand`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/object_shorthand.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/object-shorthand)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fobject-shorthand)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/object-shorthand.html)
- [oxc project](https://github.com/oxc-project/oxc)