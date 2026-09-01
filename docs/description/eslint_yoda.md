# Yoda (eslint)

**Pattern ID:** `eslint_yoda`
**Plugin:** `eslint`

## What it does

Require or disallow "Yoda" conditions. This rule aims to enforce consistent style of conditions which compare a variable to a literal value.

## Why is this bad?

Yoda conditions are so named because the literal value of the condition comes first while the variable comes second. For example, the following is a Yoda condition:
js
`if ("red" === color) {
}`
This is called a Yoda condition because it reads as, "if red equals the color", similar to the way the Star Wars character Yoda speaks. Compare to the other way of arranging the operands:
js
`if (color === "red") {
// ...
}`
This typically reads, "if the color equals red", which is arguably a more natural way to describe the comparison. Proponents of Yoda conditions highlight that it is impossible to mistakenly use `=` instead of `==` because you cannot assign to a literal value. Doing so will cause a syntax error and you will be informed of the mistake early on. This practice was therefore very common in early programming where tools were not yet available. Opponents of Yoda conditions point out that tooling has made us better programmers because tools will catch the mistaken use of `=` instead of `==` (ESLint will catch this for you). Therefore, they argue, the utility of the pattern doesn't outweigh the readability hit the code takes while using Yoda conditions.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"yoda": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"yoda": "error",
},
});`bash
`oxlint --deny yoda`

## Version

This rule was added in v0.14.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/yoda.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/yoda)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fyoda)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html)
- [oxc project](https://github.com/oxc-project/oxc)