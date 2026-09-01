# No Unassigned Vars (eslint)

**Pattern ID:** `eslint_no-unassigned-vars`
**Plugin:** `eslint`

## What it does

Disallow let or var variables that are read but never assigned.

## Why is this bad?

This rule flags let or var declarations that are never assigned a value but are still read or used in the code. Since these variables will always be `undefined`, their usage is likely a programming mistake.

## Examples

Examples of incorrect code for this rule:
js
`let status;
if (status === "ready") {
console.log("Ready!");
}`
Examples of correct code for this rule:
js
`let message = "hello";
console.log(message);
let user;
user = getUser();
console.log(user.name);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unassigned-vars": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unassigned-vars": "error",
},
});`bash
`oxlint --deny no-unassigned-vars`

## Version

This rule was added in v1.10.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unassigned_vars.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unassigned-vars)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unassigned-vars)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html)
- [oxc project](https://github.com/oxc-project/oxc)