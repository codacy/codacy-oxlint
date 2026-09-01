# No Alias Methods (jest)

**Pattern ID:** `jest_no-alias-methods`
**Plugin:** `jest`

## What it does

Enforces Jest's canonical matcher names instead of aliases.

## Why is this bad?

Jest matcher aliases are deprecated and are going to be removed in the next major version of Jest. See [jestjs/jest#13164](https://github.com/jestjs/jest/issues/13164) for more.
This rule makes it easier to search for all occurrences of a matcher and ensures consistency among matcher names.

## Examples

Examples of incorrect code for this rule:
javascript
`expect(a).toBeCalled();
expect(a).toBeCalledTimes();
expect(a).toBeCalledWith();
expect(a).lastCalledWith();
expect(a).nthCalledWith();
expect(a).toReturn();
expect(a).toReturnTimes();
expect(a).toReturnWith();
expect(a).lastReturnedWith();
expect(a).nthReturnedWith();
expect(a).toThrowError();`
Examples of correct code for this rule:
javascript
`expect(a).toHaveBeenCalled();
expect(a).toHaveBeenCalledTimes();
expect(a).toHaveBeenCalledWith();
expect(a).toHaveBeenLastCalledWith();
expect(a).toHaveBeenNthCalledWith();
expect(a).toHaveReturned();
expect(a).toHaveReturnedTimes();
expect(a).toHaveReturnedWith();
expect(a).toHaveLastReturnedWith();
expect(a).toHaveNthReturnedWith();
expect(a).toThrow();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jest"],
"rules": {
"jest/no-alias-methods": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-alias-methods": "error",
},
});`bash
`oxlint --deny jest/no-alias-methods --jest-plugin`

## Version

This rule was added in v0.0.12.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_alias_methods.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-alias-methods)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-alias-methods.html)
- [oxc project](https://github.com/oxc-project/oxc)