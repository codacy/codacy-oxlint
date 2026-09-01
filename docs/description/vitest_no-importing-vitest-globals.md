# No Importing Vitest Globals (vitest)

**Pattern ID:** `vitest_no-importing-vitest-globals`
**Plugin:** `vitest`

## What it does

The rule disallows importing any Vitest global functions.

## Why is this bad?

If a project is [configured to provide Vitest functions as globals](https://vitest.dev/config/globals.html), this rule can be used to ensure that the globals are never imported via `import` or `require`.
Note that this rule should not be used if the `globals` config option is set to `false` in Vitest (`false` is the default configuration).

## Examples

Examples of incorrect code for this rule:
js
`import { test, expect } from "vitest";
test("foo", () => {
expect(1).toBe(1);
});`js
`const { test, expect } = require("vitest");
test("foo", () => {
expect(1).toBe(1);
});`
Examples of correct code for this rule:
js
`test("foo", () => {
expect(1).toBe(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-importing-vitest-globals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-importing-vitest-globals": "error",
},
});`bash
`oxlint --deny vitest/no-importing-vitest-globals --vitest-plugin`

## Version

This rule was added in v1.49.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_importing_vitest_globals.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-importing-vitest-globals.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-importing-vitest-globals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-importing-vitest-globals.html)
- [oxc project](https://github.com/oxc-project/oxc)