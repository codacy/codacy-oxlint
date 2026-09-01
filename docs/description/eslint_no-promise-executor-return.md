# No Promise Executor Return (eslint)

**Pattern ID:** `eslint_no-promise-executor-return`
**Plugin:** `eslint`

## What it does

Disallow returning values from Promise executor functions.

## Why is this bad?

The `new Promise` constructor accepts an executor function as an argument, which has `resolve` and `reject` parameters that can be used to control the state of the created Promise.
The return value of the executor is ignored. Returning a value from an executor function is a possible error because the returned value cannot be used and it doesn't affect the promise in any way.

## Examples

Examples of incorrect code for this rule:
javascript
`new Promise((resolve, reject) => {
if (someCondition) {
return defaultResult;
}
getSomething((err, result) => {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});
new Promise((resolve, reject) =>
getSomething((err, data) => {
if (err) {
reject(err);
} else {
resolve(data);
}
}),
);
new Promise(() => {
return 1;
});`
Examples of correct code for this rule:
javascript
`new Promise((resolve, reject) => {
if (someCondition) {
resolve(defaultResult);
return;
}
getSomething((err, result) => {
if (err) {
reject(err);
} else {
resolve(result);
}
});
});
new Promise((resolve, reject) => {
getSomething((err, data) => {
if (err) {
reject(err);
} else {
resolve(data);
}
});
});
new Promise((r) => {
r(1);
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-promise-executor-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-promise-executor-return": "error",
},
});`bash
`oxlint --deny no-promise-executor-return`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_promise_executor_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-promise-executor-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-promise-executor-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html)
- [oxc project](https://github.com/oxc-project/oxc)