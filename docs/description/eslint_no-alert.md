# No Alert (eslint)

**Pattern ID:** `eslint_no-alert`
**Plugin:** `eslint`

## What it does

Disallow the use of `alert`, `confirm`, and `prompt`.

## Why is this bad?

JavaScript’s `alert`, `confirm`, and `prompt` functions are widely considered to be obtrusive as UI elements and should be replaced by a more appropriate custom UI implementation. Furthermore, `alert` is often used while debugging code, which should be removed before deployment to production.

## Examples

Examples of incorrect code for this rule:
js
`alert("here!");
confirm("Are you sure?");
prompt("What's your name?", "John Doe");`
Examples of correct code for this rule:
js
`customAlert("Something happened!");
customConfirm("Are you sure?");
customPrompt("Who are you?");
function foo() {
var alert = myCustomLib.customAlert;
alert();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-alert": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-alert": "error",
},
});`bash
`oxlint --deny no-alert`

## Version

This rule was added in v0.9.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_alert.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-alert)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-alert)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html)
- [oxc project](https://github.com/oxc-project/oxc)