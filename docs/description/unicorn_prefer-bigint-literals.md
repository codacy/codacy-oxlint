# Prefer Bigint Literals (unicorn)

**Pattern ID:** `unicorn_prefer-bigint-literals`
**Plugin:** `unicorn`

## What it does

Requires using BigInt literals (e.g. `123n`) instead of calling the `BigInt()` constructor with literal arguments such as numbers or numeric strings

## Why is this bad?

Using `BigInt(…)` with literal values is unnecessarily verbose and less idiomatic than using a BigInt literal.

## Examples

Examples of incorrect code for this rule:
js
`BigInt(0);
BigInt(123);
BigInt(0xff);
BigInt(1e3);
BigInt("42");
BigInt("0x10");`
Examples of correct code for this rule:
js
`0n;
123n;
0xffn;
1000n;
// Non-integer, dynamic, or non-literal input:
BigInt(x);
BigInt("not-a-number");
BigInt("1.23");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-bigint-literals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-bigint-literals": "error",
},
});`bash
`oxlint --deny unicorn/prefer-bigint-literals`

## Version

This rule was added in v1.30.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_bigint_literals.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-bigint-literals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-bigint-literals.html)
- [oxc project](https://github.com/oxc-project/oxc)