# No Unreadable Iife (unicorn)

**Pattern ID:** `unicorn_no-unreadable-iife`
**Plugin:** `unicorn`

## What it does

This rule disallows IIFEs with a parenthesized arrow function body.

## Why is this bad?

IIFEs with a parenthesized arrow function body are unreadable.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = ((bar) => (bar ? bar.baz : baz))(getBar());
const foo = ((bar, baz) => ({ bar, baz }))(bar, baz);`
Examples of correct code for this rule:
javascript
`const bar = getBar();
const foo = bar ? bar.baz : baz;
const getBaz = (bar) => (bar ? bar.baz : baz);
const foo = getBaz(getBar());
const foo = ((bar) => {
return bar ? bar.baz : baz;
})(getBar());`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-unreadable-iife": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-unreadable-iife": "error",
},
});`bash
`oxlint --deny unicorn/no-unreadable-iife`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_unreadable_iife.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-unreadable-iife)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unreadable-iife.html)
- [oxc project](https://github.com/oxc-project/oxc)