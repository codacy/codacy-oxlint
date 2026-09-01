# No Misused Promises (typescript)

**Pattern ID:** `typescript_no-misused-promises`
**Plugin:** `typescript`

## What it does

This rule forbids providing Promises to logical locations such as if statements in places where the TypeScript compiler allows them but they are not handled properly. These situations can often arise due to a missing `await` keyword or just a misunderstanding of the way async functions are handled/awaited.

## Why is this bad?

Misused promises can cause crashes or other unexpected behavior, unless there are possibly some global unhandled promise handlers registered.

## Examples

Examples of incorrect code for this rule:
ts
`// Promises in conditionals:
const promise = Promise.resolve("value");
if (promise) {
// Do something
}
// Promises where `void` return was expected:
[1, 2, 3].forEach(async (value) => {
await fetch(`/${value}`);
});
// Spreading Promises:
const getData = () => fetch("/");
console.log({ foo: 42, ...getData() });`
Examples of correct code for this rule:
ts
`// Awaiting the Promise to get its value in a conditional:
const promise = Promise.resolve("value");
if (await promise) {
// Do something
}
// Using a `for-of` with `await` inside (instead of `forEach`):
for (const value of [1, 2, 3]) {
await fetch(`/${value}`);
}
// Spreading data returned from Promise, instead of the Promise itself:
const getData = () => fetch("/");
console.log({ foo: 42, ...(await getData()) });`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"options": {
"typeAware": true
},
"rules": {
"typescript/no-misused-promises": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
options: { typeAware: true },
rules: {
"typescript/no-misused-promises": "error",
},
});`bash
`oxlint --type-aware --deny typescript/no-misused-promises`

## Version

This rule was added in v1.11.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_misused_promises.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-misused-promises/)
- [Rule Source (tsgolint)](https://github.com/oxc-project/tsgolint/blob/main/internal/rules/no_misused_promises/no_misused_promises.go)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-promises.html)
- [oxc project](https://github.com/oxc-project/oxc)