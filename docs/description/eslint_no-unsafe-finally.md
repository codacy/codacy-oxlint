# No Unsafe Finally (eslint)

**Pattern ID:** `eslint_no-unsafe-finally`
**Plugin:** `eslint`

## What it does

Disallow control flow statements in `finally` blocks.

## Why is this bad?

JavaScript suspends the control flow statements of `try` and `catch` blocks until the execution of a `finally` block finishes.
So, when `return`, `throw`, `break`, or `continue` is used in `finally`, control flow statements inside `try` and `catch` are overwritten. This is possibly unexpected behavior for the developer.

## Examples

Examples of incorrect code for this rule:
javascript
`// We expect this function to return 1;
(() => {
try {
return 1; // 1 is returned but suspended until finally block ends
} catch (err) {
return 2;
} finally {
return 3; // 3 is returned before 1, which we did not expect
}
})();
// > 3`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unsafe-finally": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unsafe-finally": "error",
},
});`bash
`oxlint --deny no-unsafe-finally`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unsafe_finally.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unsafe-finally)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unsafe-finally)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html)
- [oxc project](https://github.com/oxc-project/oxc)