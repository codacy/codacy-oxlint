# No Implied Eval (eslint)

**Pattern ID:** `eslint_no-implied-eval`
**Plugin:** `eslint`

## What it does

Disallows passing strings to `setTimeout()`, `setInterval()`, and `execScript()`.

## Why is this bad?

Passing a string to these APIs evaluates the string as JavaScript source text at runtime. This has many of the same security, readability, and performance problems as `eval()`. Pass a function instead.

## Examples

Examples of incorrect code for this rule:
js
`setTimeout("alert('Hi!')", 100);
setInterval("doWork()", 1000);
window.setTimeout("doWork()", 100);`
Examples of correct code for this rule:
js
`setTimeout(() => alert("Hi!"), 100);
setInterval(doWork, 1000);
window.setTimeout(doWork, 100);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-implied-eval": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-implied-eval": "error",
},
});`bash
`oxlint --deny no-implied-eval`

## Version

This rule was added in v1.66.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_implied_eval.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-implied-eval)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-implied-eval)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implied-eval.html)
- [oxc project](https://github.com/oxc-project/oxc)