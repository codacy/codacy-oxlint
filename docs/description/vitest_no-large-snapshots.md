# No Large Snapshots (vitest)

**Pattern ID:** `vitest_no-large-snapshots`
**Plugin:** `vitest`

## What it does

Disallow large snapshots.

## Why is this bad?

When using Jest's snapshot capability one should be mindful of the size of created snapshots. As a general best practice snapshots should be limited in size in order to be more manageable and reviewable. A stored snapshot is only as good as its review and as such keeping it short, sweet, and readable is important to allow for thorough reviews.

## Examples

Examples of incorrect code for this rule:
javascript
`exports[`a large snapshot 1`] = `
line 1
line 2
line 3
line 4
line 5
line 6
line 7
line 8
line 9
line 10
line 11
line 12
line 13
line 14
line 15
line 16
line 17
line 18
line 19
line 20
line 21
line 22
line 23
line 24
line 25
line 26
line 27
line 28
line 29
line 30
line 31
line 32
line 33
line 34
line 35
line 36
line 37
line 38
line 39
line 40
line 41
line 42
line 43
line 44
line 45
line 46
line 47
line 48
line 49
line 50
line 51
`;`
Examples of correct code for this rule:
js
`exports[`a more manageable and readable snapshot 1`] = `
line 1
line 2
line 3
line 4
`;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-large-snapshots": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-large-snapshots": "error",
},
});`bash
`oxlint --deny vitest/no-large-snapshots --vitest-plugin`

## Version

This rule was added in v0.4.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_large_snapshots.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-large-snapshots)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-large-snapshots.html)
- [oxc project](https://github.com/oxc-project/oxc)