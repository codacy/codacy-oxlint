# No Hooks (vitest)

**Pattern ID:** `vitest_no-hooks`
**Plugin:** `vitest`

## What it does

Disallows Jest setup and teardown hooks, such as `beforeAll`.

## Why is this bad?

Jest provides global functions for setup and teardown tasks, which are called before/after each test case and each test suite. The use of these hooks promotes shared state between tests.
This rule reports for the following function calls:
- `beforeAll`
- `beforeEach`
- `afterAll`
- `afterEach`

## Examples

Examples of incorrect code for this rule:
javascript
`function setupFoo(options) {
/* ... */
}
function setupBar(options) {
/* ... */
}
describe("foo", () => {
let foo;
beforeEach(() => {
foo = setupFoo();
});
afterEach(() => {
foo = null;
});
it("does something", () => {
expect(foo.doesSomething()).toBe(true);
});
describe("with bar", () => {
let bar;
beforeEach(() => {
bar = setupBar();
});
afterEach(() => {
bar = null;
});
it("does something with bar", () => {
expect(foo.doesSomething(bar)).toBe(true);
});
});
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-hooks": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-hooks": "error",
},
});`bash
`oxlint --deny vitest/no-hooks --vitest-plugin`

## Version

This rule was added in v0.0.16.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_hooks.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-hooks)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-hooks.html)
- [oxc project](https://github.com/oxc-project/oxc)