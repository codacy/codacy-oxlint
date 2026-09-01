# No Negated Condition (eslint)

**Pattern ID:** `eslint_no-negated-condition`
**Plugin:** `eslint`

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
"no-negated-condition": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-negated-condition": "error",
},
});`bash
`oxlint --deny no-negated-condition`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_negated_condition.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-negated-condition)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-negated-condition)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-negated-condition.html)
- [oxc project](https://github.com/oxc-project/oxc)