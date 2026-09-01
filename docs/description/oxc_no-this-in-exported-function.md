# No This In Exported Function (oxc)

**Pattern ID:** `oxc_no-this-in-exported-function`
**Plugin:** `oxc`

## What it does

Disallows the use of `this` in exported functions.

## Why is this bad?

In most bundlers, the value of `this` is not preserved for exported functions. When a function is exported and imported in another module, `this` typically becomes `undefined` instead of the module namespace object. This can lead to unexpected runtime errors or incorrect behavior.

## Examples

Examples of incorrect code for this rule:
javascript
`export function foo() {
console.log(this);
}
export default function bar() {
this.something();
}
function baz() {
const self = this;
}
export { baz };`
Examples of correct code for this rule:
javascript
`function foo() {
console.log(this);
}
export const bar = () => {
console.log(this);
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-this-in-exported-function": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-this-in-exported-function": "error",
},
});`bash
`oxlint --deny oxc/no-this-in-exported-function`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_this_in_exported_function.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-this-in-exported-function)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html)
- [oxc project](https://github.com/oxc-project/oxc)