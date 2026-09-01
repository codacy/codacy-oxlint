# No Restricted Globals (eslint)

**Pattern ID:** `eslint_no-restricted-globals`
**Plugin:** `eslint`

## What it does

Specify global variable names that should not be used in your application.

## Why is this bad?

Disallowing usage of specific global variables can be useful if you want to allow a set of global variables by enabling an environment, but still want to disallow some of those.
For instance, early Internet Explorer versions exposed the current DOM event as a global variable `event`, but using this variable has been considered as a bad practice for a long time. Restricting this will make sure this variable isn't used in browser code.

## Examples

If we have options:
json
`"no-restricted-globals": ["error", "event"]`
The following patterns are considered problems:
javascript
`function onClick() {
console.log(event); // Unexpected global variable 'event'. Use local parameter instead.
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-restricted-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-restricted-globals": "error",
},
});`bash
`oxlint --deny no-restricted-globals`

## Version

This rule was added in v0.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_restricted_globals.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-restricted-globals)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-restricted-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)