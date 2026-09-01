# No Const Assign (eslint)

**Pattern ID:** `eslint_no-const-assign`
**Plugin:** `eslint`

## What it does

Disallow reassigning `const` variables.

## Why is this bad?

We cannot modify variables that are declared using the `const` keyword, as it will raise a runtime error.
Note that this rule is not necessary for TypeScript code, as TypeScript will already catch this as an error.

## Examples

Examples of incorrect code for this rule:
js
`const a = 0;
a = 1;
const b = 0;
b += 1;`
Examples of correct code for this rule:
js
`const a = 0;
console.log(a);
var b = 0;
b += 1;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-const-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-const-assign": "error",
},
});`bash
`oxlint --deny no-const-assign`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_const_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-const-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-const-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-const-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)