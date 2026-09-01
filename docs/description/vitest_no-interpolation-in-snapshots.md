# No Interpolation In Snapshots (vitest)

**Pattern ID:** `vitest_no-interpolation-in-snapshots`
**Plugin:** `vitest`

## What it does

Prevents the use of string interpolations in snapshots.

## Why is this bad?

Interpolation prevents snapshots from being updated. Instead, properties should be overloaded with a matcher by using [property matchers](https://jestjs.io/docs/en/snapshot-testing#property-matchers).

## Examples

Examples of incorrect code for this rule:
javascript
`expect(something).toMatchInlineSnapshot(
`Object {
property: ${interpolated}
}`,
);
expect(something).toMatchInlineSnapshot(
{ other: expect.any(Number) },
`Object {
other: Any<Number>,
property: ${interpolated}
}`,
);
expect(errorThrowingFunction).toThrowErrorMatchingInlineSnapshot(`${interpolated}`);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/no-interpolation-in-snapshots": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/no-interpolation-in-snapshots": "error",
},
});`bash
`oxlint --deny vitest/no-interpolation-in-snapshots --vitest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/no_interpolation_in_snapshots.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Fno-interpolation-in-snapshots)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-interpolation-in-snapshots.html)
- [oxc project](https://github.com/oxc-project/oxc)