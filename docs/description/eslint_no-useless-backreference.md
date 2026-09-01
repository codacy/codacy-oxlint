# No Useless Backreference (eslint)

**Pattern ID:** `eslint_no-useless-backreference`
**Plugin:** `eslint`

## What it does

Disallows backreferences in regular expressions that will always be ignored because the capture group they refer to has not matched and cannot match at the time the backreference is evaluated.

## Why is this bad?

Useless backreferences can lead to confusing or misleading regular expressions. They may give the impression that a group’s value is being reused, but due to the structure of the pattern (e.g., order of evaluation, disjunctions, or negative lookarounds), the group has not matched anything — so the reference always resolves to an empty string. This is almost always a mistake and makes patterns harder to understand and maintain.

## Examples

Examples of incorrect code for this rule:
js
`/\1(a)/; // backreference appears before group
/(a|\1b)/; // group and reference are in different alternatives
/(?<=\1(a))b/; // backreference used before group in lookbehind
/\1(?!(a))/; // group is inside negative lookahead
/(a\1)/; // backreference is inside its own group`
Examples of correct code for this rule:
js
`/(a)\1/; // valid — backreference follows completed group
/(?<name>a)\k<name>/; // named group used properly
/(?:a|(b))\1/; // backreference only used when group matches`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-backreference": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-backreference": "error",
},
});`bash
`oxlint --deny no-useless-backreference`

## Version

This rule was added in v0.16.10.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_backreference.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-backreference)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-backreference)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-backreference.html)
- [oxc project](https://github.com/oxc-project/oxc)