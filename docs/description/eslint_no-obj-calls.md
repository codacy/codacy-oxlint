# No Obj Calls (eslint)

**Pattern ID:** `eslint_no-obj-calls`
**Plugin:** `eslint`

## What it does

Disallow calling some global objects as functions.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

Some global objects are not intended to be called as functions. Calling them as functions will usually result in a TypeError being thrown.

## Examples

Examples of incorrect code for this rule:
javascript
`let math = Math();
let newMath = new Math();
let json = JSON();
let newJson = new JSON();
let atomics = Atomics();
let newAtomics = new Atomics();
let intl = Intl();
let newIntl = new Intl();
let reflect = Reflect();
let newReflect = new Reflect();`
Examples of correct code for this rule:
javascript
`let area = (r) => 2 * Math.PI * r * r;
let object = JSON.parse("{}");
let first = Atomics.load(sharedArray, 0);
let segmenterFrom = Intl.Segmenter("fr", { granularity: "word" });`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-obj-calls": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-obj-calls": "error",
},
});`bash
`oxlint --deny no-obj-calls`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_obj_calls.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-obj-calls)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-obj-calls)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-obj-calls.html)
- [oxc project](https://github.com/oxc-project/oxc)