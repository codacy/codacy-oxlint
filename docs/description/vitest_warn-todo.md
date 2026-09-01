# Warn Todo (vitest)

**Pattern ID:** `vitest_warn-todo`
**Plugin:** `vitest`

## What it does

This rule warns about usage of `.todo` in `describe`, `it`, or `test` functions.

## Why is this bad?

The tests you push should be complete. Any pending/`TODO` code should not be committed.

## Examples

Examples of incorrect code for this rule:
js
`describe.todo("foo", () => {});
it.todo("foo", () => {});
test.todo("foo", () => {});`
Examples of correct code for this rule:
js
`describe([])("foo", () => {});
it([])("foo", () => {});
test([])("foo", () => {});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/warn-todo": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/warn-todo": "error",
},
});`bash
`oxlint --deny vitest/warn-todo --vitest-plugin`

## Version

This rule was added in v1.37.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/warn_todo.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/warn-todo.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fwarn-todo)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/warn-todo.html)
- [oxc project](https://github.com/oxc-project/oxc)