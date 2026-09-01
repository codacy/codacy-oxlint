# Prefer Describe Function Title (vitest)

**Pattern ID:** `vitest_prefer-describe-function-title`
**Plugin:** `vitest`

## What it does

When testing a specific function, this rule aims to enforce passing a named function to `describe()` instead of an equivalent hardcoded string.

## Why is this bad?

For tests that are related to a specific function, if the function being tested is renamed, the describe title will no longer match and can cause confusion in the future. Using the function directly ensures consistency even if the function is renamed.

## Examples

Examples of incorrect code for this rule:
js
`// myFunction.test.js
import { myFunction } from "./myFunction";
describe("myFunction", () => {
// ...
});`
Examples of correct code for this rule:
js
`// myFunction.test.js
import { myFunction } from "./myFunction";
describe(myFunction, () => {
// ...
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-describe-function-title": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-describe-function-title": "error",
},
});`bash
`oxlint --deny vitest/prefer-describe-function-title --vitest-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_describe_function_title.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-describe-function-title.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-describe-function-title)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-describe-function-title.html)
- [oxc project](https://github.com/oxc-project/oxc)