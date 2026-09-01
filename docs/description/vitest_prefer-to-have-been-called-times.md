# Prefer To Have Been Called Times (vitest)

**Pattern ID:** `vitest_prefer-to-have-been-called-times`
**Plugin:** `vitest`

## What it does

In order to have a better failure message, `toHaveBeenCalledTimes` should be used instead of directly checking the length of `mock.calls`.

## Why is this bad?

This rule triggers a warning if `toHaveLength` is used to assert the number of times a mock is called.

## Examples

Examples of incorrect code for this rule:
js
`expect(someFunction.mock.calls).toHaveLength(1);
expect(someFunction.mock.calls).toHaveLength(0);
expect(someFunction.mock.calls).not.toHaveLength(1);`
Examples of correct code for this rule:
js
`expect(someFunction).toHaveBeenCalledTimes(1);
expect(someFunction).toHaveBeenCalledTimes(0);
expect(someFunction).not.toHaveBeenCalledTimes(0);
expect(uncalledFunction).not.toBeCalled();
expect(method.mock.calls[0][0]).toStrictEqual(value);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/prefer-to-have-been-called-times": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/prefer-to-have-been-called-times": "error",
},
});`bash
`oxlint --deny vitest/prefer-to-have-been-called-times --vitest-plugin`

## Version

This rule was added in v1.34.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/prefer_to_have_been_called_times.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-been-called-times.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fprefer-to-have-been-called-times)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-have-been-called-times.html)
- [oxc project](https://github.com/oxc-project/oxc)