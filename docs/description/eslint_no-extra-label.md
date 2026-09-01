# No Extra Label (eslint)

**Pattern ID:** `eslint_no-extra-label`
**Plugin:** `eslint`

## What it does

Disallow unnecessary labels.

## Why is this bad?

If a loop contains no nested loops or switches, labeling the loop is unnecessary.
js
`A: while (a) {
break A;
}`
You can achieve the same result by removing the label and using `break` or `continue` without a label. Probably those labels would confuse developers because they expect labels to jump to further.

## Examples

Examples of incorrect code for this rule:
js
`A: while (a) {
break A;
}
B: for (let i = 0; i < 10; ++i) {
break B;
}
C: switch (a) {
case 0:
break C;
}`
Examples of correct code for this rule:
js
`while (a) {
break;
}
for (let i = 0; i < 10; ++i) {
break;
}
switch (a) {
case 0:
break;
}
A: {
break A;
}
B: while (a) {
while (b) {
break B;
}
}
C: switch (a) {
case 0:
while (b) {
break C;
}
break;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-extra-label": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-extra-label": "error",
},
});`bash
`oxlint --deny no-extra-label`

## Version

This rule was added in v0.15.4.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_extra_label.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-extra-label)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-extra-label)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-label.html)
- [oxc project](https://github.com/oxc-project/oxc)