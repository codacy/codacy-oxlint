# No Test Prefixes (vitest)

**Pattern ID:** `vitest_no-test-prefixes`
**Plugin:** `vitest`

## What it does

Require using `.only` and `.skip` over `f` and `x`.

## Why is this bad?

Jest allows you to choose how you want to define focused and skipped tests, with multiple permutations for each:
- only & skip: it.only, test.only, describe.only, it.skip, test.skip, describe.skip.
- 'f' & 'x': fit, fdescribe, xit, xtest, xdescribe.
This rule enforces usages from the only & skip list.

## Examples

Examples of incorrect code for this rule:
javascript
`fit("foo"); // invalid
fdescribe("foo"); // invalid
xit("foo"); // invalid
xtest("foo"); // invalid
xdescribe("foo"); // invalid`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-test-prefixes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-test-prefixes": "error",
},
});`bash
`oxlint --deny vitest/no-test-prefixes --vitest-plugin`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_test_prefixes.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-test-prefixes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-test-prefixes.html)
- [oxc project](https://github.com/oxc-project/oxc)