# No Extend Native (eslint)

**Pattern ID:** `eslint_no-extend-native`
**Plugin:** `eslint`

## What it does

Prevents extending native global objects such as `Object`, `String`, or `Array` with new properties.

## Why is this bad?

Extending native objects can cause unexpected behavior and conflicts with other code.
For example:
js
`// Adding a new property, which might seem okay
Object.prototype.extra = 55;
// Defining a user object
const users = {
1: "user1",
2: "user2",
};
for (const id in users) {
// This will print "extra" as well as "1" and "2":
console.log(id);
}`

## Examples

Examples of incorrect code for this rule:
js
`Object.prototype.p = 0;
Object.defineProperty(Array.prototype, "p", { value: 0 });`
Examples of correct code for this rule:
js
`x.prototype.p = 0;
Object.defineProperty(x.prototype, "p", { value: 0 });`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-extend-native": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-extend-native": "error",
},
});`bash
`oxlint --deny no-extend-native`

## Version

This rule was added in v0.9.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_extend_native.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-extend-native)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-extend-native)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html)
- [oxc project](https://github.com/oxc-project/oxc)