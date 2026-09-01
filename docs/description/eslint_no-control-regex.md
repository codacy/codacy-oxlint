# No Control Regex (eslint)

**Pattern ID:** `eslint_no-control-regex`
**Plugin:** `eslint`

## What it does

Disallows control characters and some escape sequences that match control characters in regular expressions.

## Why is this bad?

Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings so a regular expression containing elements that explicitly match these characters is most likely a mistake.

## Examples

Examples of incorrect code for this rule:
javascript
`var pattern1 = /\x00/;
var pattern2 = /\x0C/;
var pattern3 = /\x1F/;
var pattern4 = /\u000C/;
var pattern5 = /\u{C}/u;
var pattern6 = new RegExp("\x0C"); // raw U+000C character in the pattern
var pattern7 = new RegExp("\\x0C"); // \x0C pattern`
Examples of correct code for this rule:
javascript
`var pattern1 = /\x20/;
var pattern2 = /\u0020/;
var pattern3 = /\u{20}/u;
var pattern4 = /\t/;
var pattern5 = /\n/;
var pattern6 = new RegExp("\x20");
var pattern7 = new RegExp("\\t");
var pattern8 = new RegExp("\\n");
var pattern9 = /\0/;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-control-regex": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-control-regex": "error",
},
});`bash
`oxlint --deny no-control-regex`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_control_regex.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-control-regex)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-control-regex)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-control-regex.html)
- [oxc project](https://github.com/oxc-project/oxc)