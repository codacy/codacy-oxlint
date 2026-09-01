# Grouped Accessor Pairs (eslint)

**Pattern ID:** `eslint_grouped-accessor-pairs`
**Plugin:** `eslint`

## What it does

Require grouped accessor pairs in object literals and classes.

## Why is this bad?

While it is allowed to define the pair for a getter or a setter anywhere in an object or class definition, it’s considered a best practice to group accessor functions for the same property.

## Examples

Examples of incorrect code for this rule:
js
`const foo = {
get a() {
return this.val;
},
b: 1,
set a(value) {
this.val = value;
},
};`
Examples of correct code for this rule:
js
`const foo = {
get a() {
return this.val;
},
set a(value) {
this.val = value;
},
b: 1,
};`
Examples of incorrect code for this rule with the `getBeforeSet` option:
js
`const foo = {
set a(value) {
this.val = value;
},
get a() {
return this.val;
},
};`
Examples of correct code for this rule with the `getBeforeSet` option:
js
`const foo = {
get a() {
return this.val;
},
set a(value) {
this.val = value;
},
};`
Examples of incorrect code for this rule with the `setBeforeGet` option:
js
`const foo = {
get a() {
return this.val;
},
set a(value) {
this.val = value;
},
};`
Examples of correct code for this rule with the `setBeforeGet` option:
js
`const foo = {
set a(value) {
this.val = value;
},
get a() {
return this.val;
},
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"grouped-accessor-pairs": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"grouped-accessor-pairs": "error",
},
});`bash
`oxlint --deny grouped-accessor-pairs`

## Version

This rule was added in v0.15.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/grouped_accessor_pairs.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fgrouped-accessor-pairs)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html)
- [oxc project](https://github.com/oxc-project/oxc)