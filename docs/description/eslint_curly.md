# Curly (eslint)

**Pattern ID:** `eslint_curly`
**Plugin:** `eslint`

## What it does

This rule enforces the use of curly braces `{}` for all control statements (`if`, `else`, `for`, `while`, `do`, `with`). It ensures that all blocks are enclosed in curly braces to improve code clarity and maintainability.

## Why is this bad?

Omitting curly braces can reduce code readability and increase the likelihood of errors, especially in deeply nested or indented code. It can also lead to bugs if additional statements are added later without properly enclosing them in braces. Using curly braces consistently makes the code safer and easier to modify.

## Configuration

Configuration for the curly rule, specified as an array of one or two elements.
Examples:
- `["all"]` - Require braces in all cases (default)
- `["multi"]` - Require braces only for multi-statement blocks
- `["multi-line"]` - Require braces for multi-line blocks
- `["multi-or-nest"]` - Require braces for nested or multi-line blocks
- `["multi", "consistent"]` - Multi mode with consistent braces in if-else chains

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"curly": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"curly": "error",
},
});`bash
`oxlint --deny curly`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/curly.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/curly)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fcurly)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html)
- [oxc project](https://github.com/oxc-project/oxc)