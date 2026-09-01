# No Implied Eval (typescript)

**Pattern ID:** `typescript_no-implied-eval`
**Plugin:** `typescript`

## What it does

This rule disallows the use of eval-like methods.

## Why is this bad?

It's considered a good practice to avoid using `eval()` in JavaScript. There are security and performance implications involved with doing so, which is why many linters recommend disallowing `eval()`. However, there are some other ways to pass a string and have it interpreted as JavaScript code that have similar concerns.

## Examples

Examples of incorrect code for this rule:
ts
`setTimeout('alert("Hi!");', 100);
setInterval('alert("Hi!");', 100);
setImmediate('alert("Hi!")');
window.setTimeout("count = 5", 10);
window.setInterval("foo = bar", 10);
const fn = new Function("a", "b", "return a + b");`
Examples of correct code for this rule:
ts
`setTimeout(() => {
alert("Hi!");
}, 100);
setInterval(() => {
alert("Hi!");
}, 100);
setImmediate(() => {
alert("Hi!");
});
const fn = (a: number, b: number) => a + b;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-implied-eval": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-implied-eval": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-implied-eval`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_implied_eval.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-implied-eval/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_implied_eval/no_implied_eval.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-implied-eval.html)
- [oxc project](https://github.com/oxc-project/oxc)