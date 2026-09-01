# No Negated Condition (unicorn)

**Pattern ID:** `unicorn_no-negated-condition`
**Plugin:** `unicorn`

## What it does

Disallow negated conditions.

## Why is this bad?

Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition.

## Examples

Examples of incorrect code for this rule:
javascript
`if (!a) {
doSomethingC();
} else {
doSomethingB();
}
!a ? doSomethingC() : doSomethingB();`
Examples of correct code for this rule:
javascript
`if (a) {
doSomethingB();
} else {
doSomethingC();
}
a ? doSomethingB() : doSomethingC();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-negated-condition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-negated-condition": "error",
},
});`bash
`oxlint --deny unicorn/no-negated-condition`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_negated_condition.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-negated-condition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negated-condition.html)
- [oxc project](https://github.com/oxc-project/oxc)