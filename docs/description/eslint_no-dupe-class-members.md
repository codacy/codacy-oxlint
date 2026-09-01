# No Dupe Class Members (eslint)

**Pattern ID:** `eslint_no-dupe-class-members`
**Plugin:** `eslint`

## What it does

Disallow duplicate class members.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

If there are declarations of the same name in class members, the last declaration overwrites other declarations silently. It can cause unexpected behaviors.

## Examples

Examples of incorrect code for this rule:
javascript
`class A {
foo() {
console.log("foo");
}
foo = 123;
}
let a = new A();
a.foo(); // Uncaught TypeError: a.foo is not a function`
Examples of correct code for this rule:
javascript
`class A {
foo() {
console.log("foo");
}
}
let a = new A();
a.foo();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-dupe-class-members": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-dupe-class-members": "error",
},
});`bash
`oxlint --deny no-dupe-class-members`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_dupe_class_members.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-dupe-class-members)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-dupe-class-members)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-class-members.html)
- [oxc project](https://github.com/oxc-project/oxc)