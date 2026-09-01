# No Unexpected Multiline (eslint)

**Pattern ID:** `eslint_no-unexpected-multiline`
**Plugin:** `eslint`

## What it does

In most cases, semicolons are not required in JavaScript in order for code to be parsed and executed as expected. Typically this occurs because semicolons are automatically inserted based on a fixed set of rules. This rule exists to detect those cases where a semicolon is NOT inserted automatically, and may be parsed differently than expected.

## Why is this bad?

Code that has unexpected newlines may be parsed and executed differently than what the developer intended. This can lead to bugs that are difficult to track down.

## Examples

Examples of incorrect code for this rule:
js
`var a = b(x || y).doSomething();
var a = b[(a, b, c)].forEach(doSomething);
let x = (function () {})`hello`;
foo / bar / g.test(baz);`
Examples of correct code for this rule:
js
`var a = b;
(x || y).doSomething();
var a = b;
[a, b, c].forEach(doSomething);
let x = function () {};
`hello`;
foo;
/bar/g.test(baz);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unexpected-multiline": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unexpected-multiline": "error",
},
});`bash
`oxlint --deny no-unexpected-multiline`

## Version

This rule was added in v0.9.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unexpected_multiline.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unexpected-multiline)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html)
- [oxc project](https://github.com/oxc-project/oxc)