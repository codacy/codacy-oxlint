# Only Used In Recursion (oxc)

**Pattern ID:** `oxc_only-used-in-recursion`
**Plugin:** `oxc`

## What it does

Checks for arguments that are only used in recursion with no side-effects.
Inspired by the `only_used_in_recursion` rule in Clippy.

## Why is this bad?

Supplying an argument that is only used in recursive calls is likely a mistake.
It increases cognitive complexity and may impact performance.

## Examples

Examples of incorrect code for this rule:
ts
`function test(onlyUsedInRecursion) {
return test(onlyUsedInRecursion);
}`
Examples of correct code for this rule:
ts
`function f(a: number): number {
if (a == 0) {
return 1;
} else {
return f(a - 1);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/only-used-in-recursion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/only-used-in-recursion": "error",
},
});`bash
`oxlint --deny oxc/only-used-in-recursion`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/only_used_in_recursion.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fonly-used-in-recursion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html)
- [oxc project](https://github.com/oxc-project/oxc)