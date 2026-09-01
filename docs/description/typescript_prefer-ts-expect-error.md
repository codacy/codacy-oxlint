# Prefer Ts Expect Error (typescript)

**Pattern ID:** `typescript_prefer-ts-expect-error`
**Plugin:** `typescript`

## What it does

Enforce using @ts-expect-error over @ts-ignore.

## Why is this bad?

TypeScript allows you to suppress all errors on a line by placing a comment starting with @ts-ignore or @ts-expect-error immediately before the erroring line. The two directives work the same, except @ts-expect-error causes a type error if placed before a line that's not erroring in the first place.
This means it's easy for @ts-ignores to be forgotten about, and remain in code even after the error they were suppressing is fixed. This is dangerous, as if a new error arises on that line it'll be suppressed by the forgotten about @ts-ignore, and so be missed.

## Examples

Examples of incorrect code for this rule:
ts
`// @ts-ignore
const str: string = 1;
/**
* Explaining comment
*
* @ts-ignore */
const multiLine: number = "value";`
Examples of correct code for this rule:
ts
`/**
* Explaining comment
*
* @ts-expect-error */
const multiLine: number = "value";`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/prefer-ts-expect-error": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/prefer-ts-expect-error": "error",
},
});`bash
`oxlint --deny typescript/prefer-ts-expect-error`

## Version

This rule was added in v0.2.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/prefer_ts_expect_error.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/prefer-ts-expect-error/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fprefer-ts-expect-error)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html)
- [oxc project](https://github.com/oxc-project/oxc)