# Require Mock Type Parameters (vitest)

**Pattern ID:** `vitest_require-mock-type-parameters`
**Plugin:** `vitest`

## What it does

Enforces the use of type parameters on `vi.fn()`, and optionally on `vi.importActual()` and `vi.importMock()`.
By default, only `vi.fn()` is checked. Set `checkImportFunctions` to `true` to also check `vi.importActual()` and `vi.importMock()`.

## Why is this bad?

Without explicit type parameters, `vi.fn()` creates a mock typed as `(...args: any[]) => any`. This disables type checking between the mock and the real implementation, which can lead to two problems:
- tests that fail due to incorrect mock usage when they should pass
- or worse, tests that pass while the mock silently diverges from the actual runtime behavior.

## Examples

Examples of incorrect code for this rule configured as `{ "checkImportFunctions": false }`:
ts
`import { vi } from "vitest";
test("foo", () => {
const myMockedFn = vi.fn();
});`
Examples of incorrect code for this rule configured as `{ "checkImportFunctions": true }`:
ts
`import { vi } from "vitest";
vi.mock("./example.js", async () => {
const originalModule = await vi.importActual("./example.js");
return { ...originalModule };
});
const fs = await vi.importMock("fs");`
Examples of correct code for this rule configured as `{ "checkImportFunctions": false }`:
ts
`import { vi } from "vitest";
test("foo", () => {
const myMockedFnOne = vi.fn<(arg1: string, arg2: boolean) => number>();
const myMockedFnTwo = vi.fn<() => void>();
const myMockedFnThree = vi.fn<any>();
});`
Examples of correct code for this rule configured as `{ "checkImportFunctions": true }`:
ts
`import { vi } from "vitest";
vi.mock("./example.js", async () => {
const originalModule = await vi.importActual<any>("./example.js");
return { ...originalModule };
});
const fs = await vi.importMock<any>("fs");`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/require-mock-type-parameters": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-mock-type-parameters": "error",
},
});`bash
`oxlint --deny vitest/require-mock-type-parameters --vitest-plugin`

## Version

This rule was added in v1.58.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_mock_type_parameters.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-mock-type-parameters)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-mock-type-parameters.html)
- [oxc project](https://github.com/oxc-project/oxc)