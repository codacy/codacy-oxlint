# Max Statements (eslint)

**Pattern ID:** `eslint_max-statements`
**Plugin:** `eslint`

## What it does

Enforce a maximum number of statements in a function. This rule ensures that functions do not exceed a specified statements count, promoting smaller, more focused functions that are easier to maintain and understand.

## Why is this bad?

Some people consider large functions a code smell. Large functions tend to do a lot of things and can make it hard to follow what's going on. This rule can help avoid large functions.

## Examples

Examples of incorrect code for this rule with the default `{ "max": 10 }` option:
js
`function foo() {
const foo1 = 1;
const foo2 = 2;
const foo3 = 3;
const foo4 = 4;
const foo5 = 5;
const foo6 = 6;
const foo7 = 7;
const foo8 = 8;
const foo9 = 9;
const foo10 = 10;
const foo11 = 11; // Too many.
}
const bar = () => {
const foo1 = 1;
const foo2 = 2;
const foo3 = 3;
const foo4 = 4;
const foo5 = 5;
const foo6 = 6;
const foo7 = 7;
const foo8 = 8;
const foo9 = 9;
const foo10 = 10;
const foo11 = 11; // Too many.
};`
Examples of correct code for this rule with the default `{ "max": 10 }` option:
js
`function foo() {
const foo1 = 1;
const foo2 = 2;
const foo3 = 3;
const foo4 = 4;
const foo5 = 5;
const foo6 = 6;
const foo7 = 7;
const foo8 = 8;
const foo9 = 9;
return function () {
// 10
// The number of statements in the inner function does not count toward the
// statement maximum.
let bar;
let baz;
return 42;
};
}
const bar = () => {
const foo1 = 1;
const foo2 = 2;
const foo3 = 3;
const foo4 = 4;
const foo5 = 5;
const foo6 = 6;
const foo7 = 7;
const foo8 = 8;
const foo9 = 9;
return function () {
// 10
// The number of statements in the inner function does not count toward the
// statement maximum.
let bar;
let baz;
return 42;
};
};`
Note that this rule does not apply to class static blocks, and that statements in class static blocks do not count as statements in the enclosing function.
Examples of correct code for this rule with `{ "max": 2 }` option:
js
`function foo() {
let one;
let two = class {
static {
let three;
let four;
let five;
if (six) {
let seven;
let eight;
let nine;
}
}
};
}`
Examples of additional correct code for this rule with the `{ "max": 10 }, { "ignoreTopLevelFunctions": true }` options:
js
`function foo() {
const foo1 = 1;
const foo2 = 2;
const foo3 = 3;
const foo4 = 4;
const foo5 = 5;
const foo6 = 6;
const foo7 = 7;
const foo8 = 8;
const foo9 = 9;
const foo10 = 10;
const foo11 = 11;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-statements": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-statements": "error",
},
});`bash
`oxlint --deny max-statements`

## Version

This rule was added in v1.35.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_statements.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-statements)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-statements)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html)
- [oxc project](https://github.com/oxc-project/oxc)