# Radix (eslint)

**Pattern ID:** `eslint_radix`
**Plugin:** `eslint`

## What it does

Enforce the consistent use of the radix argument when using `parseInt()`, which specifies what base to use for parsing the number.

## Why is this bad?

Using the `parseInt()` function without specifying the radix can lead to unexpected results.
See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#radix) for more information on how `parseInt()` handles certain edge-cases.

## Examples

Examples of incorrect code for this rule:
javascript
`let num = parseInt("071"); // 57`
Examples of correct code for this rule:
javascript
`let num = parseInt("071", 10); // 71`

## Configuration

Note that passing an option to this rule has no effect on its behavior. In v1.49.0, the config option for this rule was removed and made a no-op. This matches the behavior change made in ESLint v10, and the rule now always enforces that a radix parameter is provided to `parseInt()`.
If you receive new violations due to this change, you may either opt to disable this rule, or add the radix parameter to all usages of `parseInt()` in your codebase.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"radix": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"radix": "error",
},
});`bash
`oxlint --deny radix`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/radix.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/radix)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fradix)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html)
- [oxc project](https://github.com/oxc-project/oxc)