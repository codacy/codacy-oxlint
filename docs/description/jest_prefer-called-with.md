# Prefer Called With (jest)

**Pattern ID:** `jest_prefer-called-with`
**Plugin:** `jest`

## What it does

Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`

## Why is this bad?

When testing function calls, it's often more valuable to assert both that a function was called AND what arguments it was called with. Using `toBeCalled()` or `toHaveBeenCalled()` only verifies the function was invoked, but doesn't validate the arguments, potentially missing bugs where functions are called with incorrect parameters.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(someFunction).toBeCalled();
expect(someFunction).toHaveBeenCalled();`
Examples of correct code for this rule:
javascript
`expect(noArgsFunction).toBeCalledWith();
expect(roughArgsFunction).toBeCalledWith(expect.anything(), expect.any(Date));
expect(anyArgsFunction).toBeCalledTimes(1);
expect(uncalledFunction).not.toBeCalled();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/prefer-called-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/prefer-called-with": "error",
},
});`bash
`oxlint --deny jest/prefer-called-with --jest-plugin`

## Version

This rule was added in v0.2.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/prefer_called_with.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fprefer-called-with)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-called-with.html)
- [oxc project](https://github.com/oxc-project/oxc)