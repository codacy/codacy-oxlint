# No New Native Nonconstructor (eslint)

**Pattern ID:** `eslint_no-new-native-nonconstructor`
**Plugin:** `eslint`

## What it does

Disallow `new` operators with global non-constructor functions (`Symbol`, `BigInt`).
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

Both `new Symbol` and `new BigInt` throw a type error because they are functions and not classes. It is easy to make this mistake by assuming the uppercase letters indicate classes.

## Examples

Examples of incorrect code for this rule:
js
`// throws a TypeError
let foo = new Symbol("foo");
// throws a TypeError
let result = new BigInt(9007199254740991);`
Examples of correct code for this rule:
js
`let foo = Symbol("foo");
let result = BigInt(9007199254740991);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-new-native-nonconstructor": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-new-native-nonconstructor": "error",
},
});`bash
`oxlint --deny no-new-native-nonconstructor`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_new_native_nonconstructor.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-new-native-nonconstructor)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html)
- [oxc project](https://github.com/oxc-project/oxc)