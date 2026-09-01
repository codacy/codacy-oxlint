# No Implicit Globals (eslint)

**Pattern ID:** `eslint_no-implicit-globals`
**Plugin:** `eslint`

## What it does

Disallows declarations in the global scope, global variable leaks, and writes or redeclarations of read-only globals.

## Why is this bad?

Browser scripts share a global scope. Top-level `var` and `function` declarations, and assignments to undeclared variables in sloppy mode, create globals that can collide with other scripts.

## Examples

Examples of incorrect code for this rule:
js
`var foo = 1;
function bar() {}
baz = 1;`
Examples of correct code for this rule:
js
`window.foo = 1;
(function () {
var bar = 1;
})();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-implicit-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-implicit-globals": "error",
},
});`bash
`oxlint --deny no-implicit-globals`

## Version

This rule was added in v1.65.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_implicit_globals.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-implicit-globals)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-implicit-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)