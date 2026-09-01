# Id Denylist (eslint)

**Pattern ID:** `eslint_id-denylist`
**Plugin:** `eslint`

## What it does

Disallow specified identifiers

## Why is this bad?

Generic names can lead to hard-to-decipher code. This rule allows you to specify a deny list of disallowed identifier names to avoid this practice.

## Examples

Examples of incorrect code for this rule:
js
`/*eslint id-denylist: ["error", "data", "callback"] */
const data = { ...values };
function callback() {
// ...
}
element.callback = function () {
// ...
};
const itemSet = {
data: [...values],
};
class Foo {
data = [];
}
class Bar {
#data = [];
}
class Baz {
callback() {}
}
class Qux {
#callback() {}
}`
Examples of correct code for this rule:
js
`/*eslint id-denylist: ["error", "data", "callback"] */
const encodingOptions = { ...values };
function processFileResult() {
// ...
}
element.successHandler = function () {
// ...
};
const itemSet = {
entities: [...values],
};
callback(); // all function calls are ignored
foo.callback(); // all function calls are ignored
foo.data; // all property names that are not assignments are ignored
class Foo {
items = [];
}
class Bar {
#items = [];
}
class Baz {
method() {}
}
class Qux {
#method() {}
}`

## Configuration

type: `array`
default: `[]`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"id-denylist": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"id-denylist": "error",
},
});`bash
`oxlint --deny id-denylist`

## Version

This rule was added in v1.76.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/id_denylist.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/id-denylist)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fid-denylist)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-denylist.html)
- [oxc project](https://github.com/oxc-project/oxc)