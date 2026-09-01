# No Restricted Vi Methods (vitest)

**Pattern ID:** `vitest_no-restricted-vi-methods`
**Plugin:** `vitest`

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
"plugins": ["vitest"],
"rules": {
"vitest/no-restricted-vi-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-restricted-vi-methods": "error",
},
});`bash
`oxlint --deny vitest/no-restricted-vi-methods --vitest-plugin`

## Version

This rule was added in v0.2.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_restricted_vi_methods.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-restricted-vi-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-restricted-vi-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)