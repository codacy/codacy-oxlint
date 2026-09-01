# Id Length (eslint)

**Pattern ID:** `eslint_id-length`
**Plugin:** `eslint`

## What it does

Enforce a minimum and/or maximum identifier length convention by counting the graphemes for a given identifier.

## Why is this bad?

Very short identifier names like e, x, _t or very long ones like hashGeneratorResultOutputContainerObject can make code harder to read and potentially less maintainable. To prevent this, one may enforce a minimum and/or maximum identifier length.

## Examples

Examples of incorrect code for this rule:
js
`/* id-length: "error" */ // default is minimum 2-chars ({ "min": 2 })
const x = 5;
obj.e = document.body;
const foo = function (e) {};
try {
dangerousStuff();
} catch (e) {
// ignore as many do
}
const myObj = { a: 1 };
(a) => {
a * a;
};
class y {}
class Foo {
x() {}
}
class Bar {
#x() {}
}
class Baz {
x = 1;
}
class Qux {
#x = 1;
}
function bar(...x) {}
function baz([x]) {}
const [z] = arr;
const {
prop: [i],
} = {};
function qux({ x }) {}
const { j } = {};
const { prop: a } = {};
({ prop: obj.x } = {});`
Examples of correct code for this rule:
js
`/* id-length: "error" */ // default is minimum 2-chars ({ "min": 2 })
const num = 5;
function _f() {
return 42;
}
function _func() {
return 42;
}
obj.el = document.body;
const foo = function (evt) {
/* do stuff */
};
try {
dangerousStuff();
} catch (error) {
// ignore as many do
}
const myObj = { apple: 1 };
(num) => {
num * num;
};
function bar(num = 0) {}
class MyClass {}
class Foo {
method() {}
}
class Bar {
#method() {}
}
class Baz {
field = 1;
}
class Qux {
#field = 1;
}
function baz(...args) {}
function qux([longName]) {}
const { prop } = {};
const {
prop: [name],
} = {};
const [longName] = arr;
function foobar({ prop }) {}
function foobaz({ a: prop }) {}
const { a: property } = {};
({ prop: obj.longName } = {});
const data = { x: 1 }; // excused because of quotes
data["y"] = 3; // excused because of calculated property access`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"id-length": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"id-length": "error",
},
});`bash
`oxlint --deny id-length`

## Version

This rule was added in v1.4.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/id_length.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/id-length)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fid-length)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html)
- [oxc project](https://github.com/oxc-project/oxc)