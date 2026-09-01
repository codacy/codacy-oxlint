# No Script Url (eslint)

**Pattern ID:** `eslint_no-script-url`
**Plugin:** `eslint`

## What it does

Disallow `javascript:` URLs.

## Why is this bad?

Using `javascript:` URLs is considered by some as a form of `eval`. Code passed in `javascript:` URLs must be parsed and evaluated by the browser in the same way that `eval` is processed. This can lead to security and performance issues.

## Examples

Examples of incorrect code for this rule:
javascript
`location.href = "javascript:void(0)";
location.href = `javascript:void(0)`;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-script-url": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-script-url": "error",
},
});`bash
`oxlint --deny no-script-url`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_script_url.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-script-url)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-script-url)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-script-url.html)
- [oxc project](https://github.com/oxc-project/oxc)