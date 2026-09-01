# Accessor Pairs (eslint)

**Pattern ID:** `eslint_accessor-pairs`
**Plugin:** `eslint`

## What it does

Enforces getter/setter pairs in objects and classes.

## Why is this bad?

It's a common mistake in JavaScript to create an object with just a setter for a property but never have a corresponding getter defined for it. Without a getter, you cannot read the property, so it ends up not being used.

## Examples

Examples of incorrect code for this rule:
js
`var o = {
set a(value) {
this.val = value;
},
};
class C {
set a(value) {
this.val = value;
}
}`
Examples of correct code for this rule:
js
`var o = {
set a(value) {
this.val = value;
},
get a() {
return this.val;
},
};
class C {
set a(value) {
this.val = value;
}
get a() {
return this.val;
}
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"accessor-pairs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"accessor-pairs": "error",
},
});`bash
`oxlint --deny accessor-pairs`

## Version

This rule was added in v1.33.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/accessor_pairs.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/accessor-pairs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Faccessor-pairs)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs.html)
- [oxc project](https://github.com/oxc-project/oxc)