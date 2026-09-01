# No Plusplus (eslint)

**Pattern ID:** `eslint_no-plusplus`
**Plugin:** `eslint`

## What it does

Disallow the unary operators `++` and `--`.

## Why is this bad?

Because the unary `++` and `--` operators are subject to automatic semicolon insertion, differences in whitespace can change the semantics of source code. For example, these two code blocks are not equivalent:
js
`var i = 10;
var j = 20;
i++;
j;
// => i = 11, j = 20`js
`var i = 10;
var j = 20;
i;
++j;
// => i = 10, j = 21`

## Examples

Examples of incorrect code for this rule:
js
`var x = 0;
x++;
var y = 0;
y--;
for (let i = 0; i < l; i++) {
doSomething(i);
}`
Examples of correct code for this rule:
js
`var x = 0;
x += 1;
var y = 0;
y -= 1;
for (let i = 0; i < l; i += 1) {
doSomething(i);
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-plusplus": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-plusplus": "error",
},
});`bash
`oxlint --deny no-plusplus`

## Version

This rule was added in v0.9.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_plusplus.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-plusplus)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-plusplus)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html)
- [oxc project](https://github.com/oxc-project/oxc)