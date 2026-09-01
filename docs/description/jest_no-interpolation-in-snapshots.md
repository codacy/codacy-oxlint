# No Interpolation In Snapshots (jest)

**Pattern ID:** `jest_no-interpolation-in-snapshots`
**Plugin:** `jest`

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
"plugins": ["jest"],
"rules": {
"jest/no-interpolation-in-snapshots": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jest"],
rules: {
"jest/no-interpolation-in-snapshots": "error",
},
});`bash
`oxlint --deny jest/no-interpolation-in-snapshots --jest-plugin`

## Version

This rule was added in v0.0.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/jest/no_interpolation_in_snapshots.rs)
- [Upstream rule docs](https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jest%2Fno-interpolation-in-snapshots)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jest/no-interpolation-in-snapshots.html)
- [oxc project](https://github.com/oxc-project/oxc)