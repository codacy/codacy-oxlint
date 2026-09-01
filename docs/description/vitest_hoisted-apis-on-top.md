# Hoisted Apis On Top (vitest)

**Pattern ID:** `vitest_hoisted-apis-on-top`
**Plugin:** `vitest`

## What it does

Requires [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) Vitest APIs (`vi.mock`, `vi.unmock`, and `vi.hoisted`) to appear at the top level of the file.

## Why is this bad?

Vitest hoists certain APIs to the top of the file during transformation, so they always run before any imports — regardless of where they appear in the source. Writing them inside conditionals, test bodies, or other runtime locations can be misleading and confusing.
The code looks like it executes at runtime, but it actually runs first. This rule ensures that these hoisted APIs are not allowed in confusing contexts.

## Examples

Examples of incorrect code for this rule:
js
`if (condition) {
vi.mock("some-module", () => {});
}`js
`if (condition) {
vi.unmock("some-module", () => {});
}`js
`if (condition) {
vi.hoisted(() => {});
}`js
`describe("suite", () => {
it("test", async () => {
vi.mock("some-module", () => {});
const sm = await import("some-module");
});
});`
Examples of correct code for this rule:
js
`if (condition) {
vi.doMock("some-module", () => {});
}`js
`vi.mock("some-module", () => {});
if (condition) {
}`js
`vi.unmock("some-module", () => {});
if (condition) {
}`js
`vi.hoisted(() => {});
if (condition) {
}`js
`vi.mock("some-module", () => {});
describe("suite", () => {
it("test", async () => {
const sm = await import("some-module");
});
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/hoisted-apis-on-top": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/hoisted-apis-on-top": "error",
},
});`bash
`oxlint --deny vitest/hoisted-apis-on-top --vitest-plugin`

## Version

This rule was added in v1.39.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/hoisted_apis_on_top.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fhoisted-apis-on-top)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/hoisted-apis-on-top.html)
- [oxc project](https://github.com/oxc-project/oxc)