# No This Assignment (unicorn)

**Pattern ID:** `unicorn_no-this-assignment`
**Plugin:** `unicorn`

## What it does

Disallow assigning `this` to a variable.

## Why is this bad?

Assigning `this` to a variable is unnecessary and confusing.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = this;
class Bar {
method() {
foo.baz();
}
}
new Bar().method();`
Examples of correct code for this rule:
javascript
`class Bar {
constructor(fooInstance) {
this.fooInstance = fooInstance;
}
method() {
this.fooInstance.baz();
}
}
new Bar(this).method();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-this-assignment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-this-assignment": "error",
},
});`bash
`oxlint --deny unicorn/no-this-assignment`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_this_assignment.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-this-assignment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html)
- [oxc project](https://github.com/oxc-project/oxc)