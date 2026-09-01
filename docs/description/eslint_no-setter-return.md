# No Setter Return (eslint)

**Pattern ID:** `eslint_no-setter-return`
**Plugin:** `eslint`

## What it does

Setters cannot return values.
This rule can be disabled for TypeScript code, as the TypeScript compiler enforces this check.

## Why is this bad?

While returning a value from a setter does not produce an error, the returned value is being ignored. Therefore, returning a value from a setter is either unnecessary or a possible error, since the returned value cannot be used.

## Examples

Examples of incorrect code for this rule:
javascript
`class URL {
set origin() {
return true;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-setter-return": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-setter-return": "error",
},
});`bash
`oxlint --deny no-setter-return`

## Version

This rule was added in v0.0.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_setter_return.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-setter-return)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-setter-return)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-setter-return.html)
- [oxc project](https://github.com/oxc-project/oxc)