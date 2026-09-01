# No Useless Assignment (eslint)

**Pattern ID:** `eslint_no-useless-assignment`
**Plugin:** `eslint`

## What it does

Flags assignments where the newly assigned value is never read afterward (a "dead store"). This helps catch wasted work or accidental mistakes.

## Why is this bad?

Dead stores add noise and can hide real bugs (e.g., you meant to use that value or wrote to the wrong variable). Removing them improves clarity and performance.

## Examples

Examples of incorrect code for this rule:
js
`function fn1() {
let v = "used";
doSomething(v);
v = "unused"; // assigned but never read
}
function fn2() {
let v = "used";
if (condition) {
v = "unused"; // early return; this write is never observed
return;
}
doSomething(v);
}
function fn3() {
let v = "used";
if (condition) {
doSomething(v);
} else {
v = "unused"; // value not used later in this branch
}
}`
Examples of correct code for this rule:
js
`function fn1() {
let v = "used";
doSomething(v);
v = "used-2";
doSomething(v); // the reassigned value is read
}
function fn2() {
let v = "used";
if (condition) {
v = "used-2";
doSomething(v); // reassignment is observed before returning
return;
}
doSomething(v);
}
function fn3() {
let v = "used";
for (let i = 0; i < 10; i++) {
doSomething(v);
v = "used in next iteration"; // used on the next loop pass
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-assignment": "error",
},
});`bash
`oxlint --deny no-useless-assignment`

## Version

This rule was added in v1.59.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_assignment.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-assignment)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-assignment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)