# Bad Match All Arg (oxc)

**Pattern ID:** `oxc_bad-match-all-arg`
**Plugin:** `oxc`

## What it does

This rule warns when the `matchAll` method is called with a regular expression that does not have the global flag (g).

## Why is this bad?

When called with a regular expression, the `matchAll` method requires the global flag (g). Otherwise, it throws a `TypeError` at runtime instead of returning an iterator.

## Examples

Examples of incorrect code for this rule:
javascript
`text.matchAll(/pattern/);`
Examples of correct code for this rule:
javascript
`text.matchAll(/pattern/g);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"oxc/bad-match-all-arg": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"oxc/bad-match-all-arg": "error",
},
});`bash
`oxlint --deny oxc/bad-match-all-arg`

## Version

This rule was added in v1.76.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/oxc/bad_match_all_arg.rs)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=oxc%2Fbad-match-all-arg)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-match-all-arg.html)
- [oxc project](https://github.com/oxc-project/oxc)