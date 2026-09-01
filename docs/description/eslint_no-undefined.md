# No Undefined (eslint)

**Pattern ID:** `eslint_no-undefined`
**Plugin:** `eslint`

## What it does

Disallow the use of `undefined` as an identifier.

## Why is this bad?

Using `undefined` directly can lead to bugs, since it can be shadowed or overwritten in JavaScript. It's safer and more intentional to use `null` or rely on implicit `undefined` (e.g., missing return) to avoid accidental issues.

## Examples

Examples of incorrect code for this rule:
javascript
`var foo = undefined;
var undefined = "foo";
if (foo === undefined) {
// ...
}
function baz(undefined) {
// ...
}
bar(undefined, "lorem");`
Examples of correct code for this rule:
javascript
`var foo = void 0;
var Undefined = "foo";
if (typeof foo === "undefined") {
// ...
}
global.undefined = "foo";
bar(void 0, "lorem");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-undefined": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-undefined": "error",
},
});`bash
`oxlint --deny no-undefined`

## Version

This rule was added in v0.5.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_undefined.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-undefined)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-undefined)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html)
- [oxc project](https://github.com/oxc-project/oxc)