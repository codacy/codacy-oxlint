# No Restricted Jest Methods (jest)

**Pattern ID:** `jest_no-restricted-jest-methods`
**Plugin:** `jest`

## What it does

Restrict the use of specific `jest` and `vi` methods.

## Why is this bad?

Certain Jest or Vitest methods may be deprecated, discouraged in specific contexts, or incompatible with your testing environment. Restricting them helps maintain consistent and reliable test practices.
By default, no methods are restricted by this rule. You must configure the rule for it to disable anything.

## Examples

Examples of incorrect code for this rule:
javascript
`jest.useFakeTimers();
it("calls the callback after 1 second via advanceTimersByTime", () => {
// ...
jest.advanceTimersByTime(1000);
// ...
});
test("plays video", () => {
const spy = jest.spyOn(video, "play");
// ...
});`

## Configuration

This rule accepts a configuration object with the following properties:
type: `object`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-restricted-jest-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-restricted-jest-methods": "error",
},
});`bash
`oxlint --deny jest/no-restricted-jest-methods --jest-plugin`

## Version

This rule was added in v0.2.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_restricted_jest_methods.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-restricted-jest-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-restricted-jest-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)