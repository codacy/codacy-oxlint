# Func Name Matching (eslint)

**Pattern ID:** `eslint_func-name-matching`
**Plugin:** `eslint`

## What it does

Requires function expression names to match the variable or property names they are assigned to, or disallows such matches with `"never"`.

## Why is this bad?

Matching names keep stack traces and source code easier to connect. If a project prefers distinct names, the `"never"` option enforces that convention consistently.

## Examples

Examples of incorrect code for this rule:
js
`/*eslint func-name-matching: "error"*/
let foo = function bar() {};
foo = function bar() {};
const obj = { foo: function bar() {} };
obj.foo = function bar() {};
obj["foo"] = function bar() {};
class C {
foo = function bar() {};
}
/*eslint func-name-matching: ["error", "never"] */
let foo = function foo() {};
foo = function foo() {};
const obj = { foo: function foo() {} };
obj.foo = function foo() {};
obj["foo"] = function foo() {};
class C {
foo = function foo() {};
}`
Examples of correct code for this rule:
js
`/*eslint func-name-matching: "error"*/
// equivalent to /*eslint func-name-matching: ["error", "always"]*/
const foo = function foo() {};
const foo1 = function () {};
const foo2 = () => {};
foo = function foo() {};
const obj = { foo: function foo() {} };
obj.foo = function foo() {};
obj["foo"] = function foo() {};
const obj1 = { [foo]: function bar() {} };
const obj3 = { foo: function () {} };
obj["x" + 2] = function bar() {};
const [bar] = [function bar() {}];
class C {
foo = function foo() {};
baz = function () {};
}
// private names are ignored
class D {
#foo = function foo() {};
#bar = function foo() {};
baz() {
this.#foo = function foo() {};
this.#foo = function bar() {};
}
}
module.exports = function foo(name) {};
/*eslint func-name-matching: ["error", "never"] */
let foo = function bar() {};
const foo1 = function () {};
const foo2 = () => {};
foo = function bar() {};
const obj = { foo: function bar() {} };
obj.foo = function bar() {};
obj["foo"] = function bar() {};
const obj1 = { foo: function bar() {} };
const obj2 = { [foo]: function foo() {} };
const obj4 = { foo: function () {} };
obj["x" + 2] = function bar() {};
const [bar] = [function bar() {}];
class C {
foo = function bar() {};
baz = function () {};
}
// private names are ignored
class D {
#foo = function foo() {};
#bar = function foo() {};
baz() {
this.#foo = function foo() {};
this.#foo = function bar() {};
}
}
module.exports = function foo(name) {};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"func-name-matching": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"func-name-matching": "error",
},
});`bash
`oxlint --deny func-name-matching`

## Version

This rule was added in v1.62.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/func_name_matching.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/func-name-matching)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Ffunc-name-matching)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-name-matching.html)
- [oxc project](https://github.com/oxc-project/oxc)