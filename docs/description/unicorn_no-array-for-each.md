# No Array For Each (unicorn)

**Pattern ID:** `unicorn_no-array-for-each`
**Plugin:** `unicorn`

## What it does

Forbids the use of `Array#forEach` in favor of a for loop.

## Why is this bad?

Benefits of `for…of` statement over the `forEach` method can include:
- Faster
- Better readability
- Ability to exit early with `break` or `return`
Additionally, using `for…of` has great benefits if you are using TypeScript, because it does not cause a function boundary to be crossed. This means that type-narrowing earlier on in the current scope will work properly while inside of the loop (without having to re-type-narrow). Furthermore, any mutated variables inside of the loop will picked up on for the purposes of determining if a variable is being used.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = [1, 2, 3];
foo.forEach((element) => {
/* ... */
});`
Examples of correct code for this rule:
javascript
`const foo = [1, 2, 3];
for (const element of foo) {
/* ... */
}
for (const [index, element] of foo.entries()) {
/* ... */
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-array-for-each": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-array-for-each": "error",
},
});`bash
`oxlint --deny unicorn/no-array-for-each`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_array_for_each.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-array-for-each)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html)
- [oxc project](https://github.com/oxc-project/oxc)