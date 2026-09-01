# No Accessor Recursion (unicorn)

**Pattern ID:** `unicorn_no-accessor-recursion`
**Plugin:** `unicorn`

## What it does

Disallow recursive access to `this` within getters and setters.

## Why is this bad?

This rule prevents recursive access to `this` within getter and setter methods in objects and classes, avoiding infinite recursion and stack overflow errors.

## Examples

Examples of incorrect code for this rule:
js
`const foo = {
get bar() {
return this.bar;
},
};
const baz = {
set bar(value) {
this.bar = value;
},
};`
Examples of correct code for this rule:
js
`const foo = {
get bar() {
return this.qux;
},
};
const baz = {
set bar(value) {
this._bar = value;
},
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-accessor-recursion": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-accessor-recursion": "error",
},
});`bash
`oxlint --deny unicorn/no-accessor-recursion`

## Version

This rule was added in v0.16.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_accessor_recursion.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-accessor-recursion)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html)
- [oxc project](https://github.com/oxc-project/oxc)