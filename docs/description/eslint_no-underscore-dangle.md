# No Underscore Dangle (eslint)

**Pattern ID:** `eslint_no-underscore-dangle`
**Plugin:** `eslint`

## What it does

Disallows dangling underscores in identifiers.

## Why is this bad?

There is a long history of using `_` as a prefix or suffix for private members in JavaScript. It is however recommended to use the formal private class feature introduced in ES2022. See [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements) for more information.

## Examples

Examples of incorrect code for this rule:
js
`let foo_;
const __proto__ = {};
foo._bar();`
Examples of correct code for this rule:
js
`const _ = require("underscore");
const obj = _.contains(items, item);
obj.__proto__ = {};
const file = __filename;
function foo(_bar) {}
const bar = { onClick(_bar) {} };
const baz = (_bar) => {};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-underscore-dangle": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-underscore-dangle": "error",
},
});`bash
`oxlint --deny no-underscore-dangle`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_underscore_dangle.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-underscore-dangle)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-underscore-dangle)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-underscore-dangle.html)
- [oxc project](https://github.com/oxc-project/oxc)