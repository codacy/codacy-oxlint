# Prefer Todo (jest)

**Pattern ID:** `jest_prefer-todo`
**Plugin:** `jest`

## What it does

When test cases are empty then it is better to mark them as `test.todo` as it will be highlighted in the summary output.

## Why is this bad?

This rule triggers a warning if empty test cases are used without 'test.todo'.

## Examples

Examples of incorrect code for this rule:
javascript
`test("i need to write this test"); // invalid
test("i need to write this test", () => {}); // invalid
test.skip("i need to write this test", () => {}); // invalid`
Examples of correct code for this rule:
javascript
`test.todo("i need to write this test");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-todo": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-todo": "error",
},
});`bash
`oxlint --deny jest/prefer-todo --jest-plugin`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_todo.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-todo)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-todo.html)
- [oxc project](https://github.com/oxc-project/oxc)