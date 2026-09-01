# Default Case Last (eslint)

**Pattern ID:** `eslint_default-case-last`
**Plugin:** `eslint`

## What it does

Requires the `default` clause in `switch` statements to be the last one.

## Why is this bad?

By convention and for readability, the `default` clause should be the last one in a `switch`. While it is legal to place it before or between `case` clauses, doing so is confusing and may lead to unexpected "fall-through" behavior.

## Examples

Examples of incorrect code for this rule:
js
`/* default-case-last: "error" */
switch (foo) {
default:
bar();
break;
case "a":
baz();
break;
}
switch (foo) {
case 1:
bar();
break;
default:
baz();
break;
case 2:
qux();
break;
}`
Examples of correct code for this rule:
js
`/* default-case-last: "error" */
switch (foo) {
case 1:
bar();
break;
case 2:
qux();
break;
default:
baz();
break;
}
switch (foo) {
case "x":
bar();
break;
case "y":
default:
baz();
break;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"default-case-last": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"default-case-last": "error",
},
});`bash
`oxlint --deny default-case-last`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/default_case_last.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/default-case-last)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fdefault-case-last)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case-last.html)
- [oxc project](https://github.com/oxc-project/oxc)