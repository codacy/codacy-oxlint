# No Unused Labels (eslint)

**Pattern ID:** `eslint_no-unused-labels`
**Plugin:** `eslint`

## What it does

Disallow unused labels.

## Why is this bad?

Labels that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.

## Examples

Examples of incorrect code for this rule:
javascript
`OUTER_LOOP: for (const student of students) {
if (checkScores(student.scores)) {
continue;
}
doSomething(student);
}`
Examples of correct code for this rule:
javascript
`for (const student of students) {
if (checkScores(student.scores)) {
continue;
}
doSomething(student);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unused-labels": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unused-labels": "error",
},
});`bash
`oxlint --deny no-unused-labels`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unused_labels.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unused-labels)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unused-labels)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-labels.html)
- [oxc project](https://github.com/oxc-project/oxc)