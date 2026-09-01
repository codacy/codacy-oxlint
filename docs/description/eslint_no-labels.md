# No Labels (eslint)

**Pattern ID:** `eslint_no-labels`
**Plugin:** `eslint`

## What it does

Disallow labeled statements.

## Why is this bad?

Labeled statements in JavaScript are used in conjunction with `break` and `continue` to control flow around multiple loops. For example:
js
`outer: while (true) {
while (true) {
break outer;
}
}`
The `break outer` statement ensures that this code will not result in an infinite loop because control is returned to the next statement after the `outer` label was applied. If this statement was changed to be just `break`, control would flow back to the outer `while` statement and an infinite loop would result. While convenient in some cases, labels tend to be used only rarely and are frowned upon by some as a remedial form of flow control that is more error prone and harder to understand.

## Examples

Examples of incorrect code for this rule:
js
`label: while (true) {
// ...
}
label: while (true) {
break label;
}
label: while (true) {
continue label;
}
label: switch (a) {
case 0:
break label;
}
label: {
break label;
}
label: if (a) {
break label;
}`
Examples of correct code for this rule:
js
`var f = {
label: "foo",
};
while (true) {
break;
}
while (true) {
continue;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-labels": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-labels": "error",
},
});`bash
`oxlint --deny no-labels`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_labels.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-labels)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-labels)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html)
- [oxc project](https://github.com/oxc-project/oxc)