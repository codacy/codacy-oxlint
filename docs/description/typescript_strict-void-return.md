# Strict Void Return (typescript)

**Pattern ID:** `typescript_strict-void-return`
**Plugin:** `typescript`

## What it does

Disallow returning non-void values where a `void` return is expected.

## Why is this bad?

Returning values from `void` contexts can hide logic errors and make callback APIs behave unexpectedly.

## Examples

Examples of incorrect code for this rule:
ts
`declare function run(cb: () => void): void;
run(() => "value");
run(async () => 123);`
Examples of correct code for this rule:
ts
`declare function run(cb: () => void): void;
run(() => {
doWork();
});
run(() => undefined);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/strict-void-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/strict-void-return": "error",
},
});`bash
`oxlint --type-aware --deny typescript/strict-void-return`

## Version

This rule was added in v0.0.8.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/strict_void_return.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/strict-void-return/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/strict_void_return/strict_void_return.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-void-return.html)
- [oxc project](https://github.com/oxc-project/oxc)