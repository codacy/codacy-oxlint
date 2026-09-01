# Prefer Top Level Await (unicorn)

**Pattern ID:** `unicorn_prefer-top-level-await`
**Plugin:** `unicorn`

## What it does

Prefer top-level await over top-level promises and async function calls.

## Why is this bad?

Top-level await is more readable and can prevent unhandled rejections.

## Examples

Examples of incorrect code for this rule:
js
`(async () => {
await run();
})();
run().catch((error) => {
console.error(error);
});`
Examples of correct code for this rule:
js
`await run();
try {
await run();
} catch (error) {
console.error(error);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-top-level-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-top-level-await": "error",
},
});`bash
`oxlint --deny unicorn/prefer-top-level-await`

## Version

This rule was added in v1.20.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_top_level_await.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-top-level-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html)
- [oxc project](https://github.com/oxc-project/oxc)