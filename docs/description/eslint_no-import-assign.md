# No Import Assign (eslint)

**Pattern ID:** `eslint_no-import-assign`
**Plugin:** `eslint`

## What it does

Disallow assigning to imported bindings.

## Why is this bad?

The updates of imported bindings by ES Modules cause runtime errors.
The TypeScript compiler generally enforces this check already. Although it should be noted that there are some cases TypeScript does not catch, such as assignments via `Object.assign`. So this rule is still useful for TypeScript code in those cases.

## Examples

Examples of incorrect code for this rule:
javascript
`import mod, { named } from "./mod.mjs";
import * as mod_ns from "./mod.mjs";
mod = 1; // ERROR: 'mod' is readonly.
named = 2; // ERROR: 'named' is readonly.
mod_ns.named = 3; // ERROR: The members of 'mod_ns' are readonly.
mod_ns = {}; // ERROR: 'mod_ns' is readonly.
// Can't extend 'mod_ns'
Object.assign(mod_ns, { foo: "foo" }); // ERROR: The members of 'mod_ns' are readonly.`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-import-assign": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-import-assign": "error",
},
});`bash
`oxlint --deny no-import-assign`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_import_assign.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-import-assign)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-import-assign)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html)
- [oxc project](https://github.com/oxc-project/oxc)