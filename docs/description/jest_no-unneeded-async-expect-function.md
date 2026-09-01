# No Unneeded Async Expect Function (jest)

**Pattern ID:** `jest_no-unneeded-async-expect-function`
**Plugin:** `jest`

## What it does

Disallows unnecessary async function wrapper for expected promises.

## Why is this bad?

When the only statement inside an async wrapper is `await someCall()`, the call should be passed directly to `expect` instead. This makes the test code more concise and easier to read.

## Examples

Examples of incorrect code for this rule:
js
`await expect(async () => {
await doSomethingAsync();
}).rejects.toThrow();
await expect(async () => await doSomethingAsync()).rejects.toThrow();`
Examples of correct code for this rule:
js
`await expect(doSomethingAsync()).rejects.toThrow();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-unneeded-async-expect-function": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-unneeded-async-expect-function": "error",
},
});`bash
`oxlint --deny jest/no-unneeded-async-expect-function --jest-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_unneeded_async_expect_function.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-unneeded-async-expect-function.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-unneeded-async-expect-function)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-unneeded-async-expect-function.html)
- [oxc project](https://github.com/oxc-project/oxc)