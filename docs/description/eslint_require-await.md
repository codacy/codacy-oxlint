# Require Await (eslint)

**Pattern ID:** `eslint_require-await`
**Plugin:** `eslint`

## What it does

Disallow async functions which have no `await` expression.
NOTE
This rule is inferior to the accuracy of the type-aware `typescript/require-await` rule. If using type-aware rules, always prefer that rule over this one.

## Why is this bad?

Asynchronous functions in JavaScript behave differently than other functions in two important ways:
- The return value is always a `Promise`.
- You can use the `await` operator inside of them.
The primary reason to use asynchronous functions is typically to use the await operator, such as this:
js
`async function fetchData(processDataItem) {
const response = await fetch(DATA_URL);
const data = await response.json();
return data.map(processDataItem);
}`
Asynchronous functions that don’t use `await` might not need to be asynchronous functions and could be the unintentional result of refactoring.
Note: this rule ignores async generator functions. This is because generators yield rather than return a value and async generators might yield all the values of another async generator without ever actually needing to use `await`.

## Examples

Examples of incorrect code for this rule:
js
`async function foo() {
doSomething();
}`
Examples of correct code for this rule:
js
`async function foo() {
await doSomething();
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"require-await": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"require-await": "error",
},
});`bash
`oxlint --deny require-await`

## Version

This rule was added in v0.4.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/require_await.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/require-await)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Frequire-await)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-await.html)
- [oxc project](https://github.com/oxc-project/oxc)