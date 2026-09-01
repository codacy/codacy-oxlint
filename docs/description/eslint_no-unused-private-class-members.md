# No Unused Private Class Members (eslint)

**Pattern ID:** `eslint_no-unused-private-class-members`
**Plugin:** `eslint`

## What it does

Disallow unused private class members.

## Why is this bad?

Private class members that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such class members take up space in the code and can lead to confusion by readers.

## Examples

Examples of incorrect code for this rule:
javascript
`class A {
#unusedMember = 5;
}
class B {
#usedOnlyInWrite = 5;
method() {
this.#usedOnlyInWrite = 42;
}
}
class C {
#usedOnlyToUpdateItself = 5;
method() {
this.#usedOnlyToUpdateItself++;
}
}
class D {
#unusedMethod() {}
}
class E {
get #unusedAccessor() {}
set #unusedAccessor(value) {}
}`
Examples of correct code for this rule:
javascript
`class A {
#usedMember = 42;
method() {
return this.#usedMember;
}
}
class B {
#usedMethod() {
return 42;
}
anotherMethod() {
return this.#usedMethod();
}
}
class C {
get #usedAccessor() {}
set #usedAccessor(value) {}
method() {
this.#usedAccessor = 42;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-unused-private-class-members": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-unused-private-class-members": "error",
},
});`bash
`oxlint --deny no-unused-private-class-members`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_unused_private_class_members.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-unused-private-class-members)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-private-class-members.html)
- [oxc project](https://github.com/oxc-project/oxc)