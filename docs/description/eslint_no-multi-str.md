# No Multi Str (eslint)

**Pattern ID:** `eslint_no-multi-str`
**Plugin:** `eslint`

## What it does

Disallow multiline strings.

## Why is this bad?

Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.

## Examples

Examples of incorrect code for this rule:
javascript
`var x =
"Line 1 \
Line 2";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-multi-str": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-multi-str": "error",
},
});`bash
`oxlint --deny no-multi-str`

## Version

This rule was added in v0.5.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_multi_str.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-multi-str)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-multi-str)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-str.html)
- [oxc project](https://github.com/oxc-project/oxc)