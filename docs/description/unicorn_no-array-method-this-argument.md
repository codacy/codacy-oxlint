# No Array Method This Argument (unicorn)

**Pattern ID:** `unicorn_no-array-method-this-argument`
**Plugin:** `unicorn`

## What it does

Disallows the use of the `thisArg` parameter in array iteration methods such as `map`, `filter`, `some`, `every`, and similar.

## Why is this bad?

The `thisArg` parameter makes code harder to understand and reason about. Instead, prefer arrow functions or bind explicitly in a clearer way. Arrow functions inherit `this` from the lexical scope, which is more intuitive and less error-prone.

## Examples

Examples of incorrect code for this rule:
js
`array.map(function (x) {
return x + this.y;
}, this);
array.filter(function (x) {
return x !== this.value;
}, this);`
Examples of correct code for this rule:
js
`array.map((x) => x + this.y);
array.filter((x) => x !== this.value);
const self = this;
array.map(function (x) {
return x + self.y;
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-method-this-argument": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-method-this-argument": "error",
},
});`bash
`oxlint --deny unicorn/no-array-method-this-argument`

## Version

This rule was added in v0.16.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_method_this_argument.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-method-this-argument)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-method-this-argument.html)
- [oxc project](https://github.com/oxc-project/oxc)