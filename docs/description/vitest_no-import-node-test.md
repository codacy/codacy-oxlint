# No Import Node Test (vitest)

**Pattern ID:** `vitest_no-import-node-test`
**Plugin:** `vitest`

## What it does

This rule warns when `node:test` is imported (usually accidentally). With `--fix`, it will replace the import with `vitest`.

## Why is this bad?

Using `node:test` instead of `vitest` can lead to inconsistent test results and missing features. `vitest` should be used for all testing to ensure compatibility and access to its full functionality.

## Examples

Examples of incorrect code for this rule:
javascript
`import { test } from "node:test";
import { expect } from "vitest";
test("foo", () => {
expect(1).toBe(1);
});`
Examples of correct code for this rule:
javascript
`import { test, expect } from "vitest";
test("foo", () => {
expect(1).toBe(1);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-import-node-test": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-import-node-test": "error",
},
});`bash
`oxlint --deny vitest/no-import-node-test --vitest-plugin`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_import_node_test.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-import-node-test)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-import-node-test.html)
- [oxc project](https://github.com/oxc-project/oxc)