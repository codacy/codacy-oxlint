# No Async Await (oxc)

**Pattern ID:** `oxc_no-async-await`
**Plugin:** `oxc`

## What it does

Disallows the use of `async`/`await`.
This rule should generally not be used in modern JavaScript/TypeScript codebases without good reason.

## Why is this bad?

This rule is useful for environments that don't support `async`/`await` syntax, or when you want to enforce the use of promises or other asynchronous patterns instead. It can also be used to maintain consistency in codebases that use alternative async patterns.

## Examples

Examples of incorrect code for this rule:
javascript
`async function foo() {
await bar();
return baz();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/no-async-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/no-async-await": "error",
},
});`bash
`oxlint --deny oxc/no-async-await`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/no_async_await.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fno-async-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html)
- [oxc project](https://github.com/oxc-project/oxc)