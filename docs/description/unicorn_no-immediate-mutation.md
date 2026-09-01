# No Immediate Mutation (unicorn)

**Pattern ID:** `unicorn_no-immediate-mutation`
**Plugin:** `unicorn`

## What it does

Disallows mutating a variable immediately after initialization.

## Why is this bad?

When you initialize a variable and immediately mutate it, it's cleaner to include the mutation in the initialization. This makes the code more readable and reduces the number of statements.

## Examples

Examples of incorrect code for this rule:
js
`const array = [1, 2];
array.push(3);
const object = { foo: 1 };
object.bar = 2;
const set = new Set([1, 2]);
set.add(3);
const map = new Map([["foo", 1]]);
map.set("bar", 2);`
Examples of correct code for this rule:
js
`const array = [1, 2, 3];
const object = { foo: 1, bar: 2 };
const set = new Set([1, 2, 3]);
const map = new Map([
["foo", 1],
["bar", 2],
]);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-immediate-mutation": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-immediate-mutation": "error",
},
});`bash
`oxlint --deny unicorn/no-immediate-mutation`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_immediate_mutation.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-immediate-mutation)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html)
- [oxc project](https://github.com/oxc-project/oxc)