# Max Depth (eslint)

**Pattern ID:** `eslint_max-depth`
**Plugin:** `eslint`

## What it does

Enforce a maximum depth that blocks can be nested. This rule helps to limit the complexity of nested blocks, improving readability and maintainability by ensuring that code does not become too deeply nested.

## Why is this bad?

Many developers consider code difficult to read if blocks are nested beyond a certain depth. Excessive nesting can make it harder to follow the flow of the code, increasing cognitive load and making maintenance more error-prone. By enforcing a maximum block depth, this rule encourages cleaner, more readable code.

## Examples

Examples of incorrect code for this rule with the default `{ "max": 3 }` option:
js
`function foo() {
for (;;) { // Nested 1 deep
while (true) { // Nested 2 deep
if (true) { // Nested 3 deep
if (true) { // Nested 4 deep }
}
}
}
}`
Examples of correct code for this rule with the default `{ "max": 3 }` option:
js
`function foo() {
for (;;) { // Nested 1 deep
while (true) { // Nested 2 deep
if (true) { // Nested 3 deep }
}
}
}`
Note that class static blocks do not count as nested blocks, and that the depth in them is calculated separately from the enclosing context.
Example:
js
`function foo() {
if (true) { // Nested 1 deep
class C {
static {
if (true) { // Nested 1 deep
if (true) { // Nested 2 deep }
}
}
}
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-depth": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-depth": "error",
},
});`bash
`oxlint --deny max-depth`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_depth.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-depth)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-depth)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-depth.html)
- [oxc project](https://github.com/oxc-project/oxc)