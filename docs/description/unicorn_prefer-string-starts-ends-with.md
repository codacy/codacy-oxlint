# Prefer String Starts Ends With (unicorn)

**Pattern ID:** `unicorn_prefer-string-starts-ends-with`
**Plugin:** `unicorn`

## What it does

Prefer `String#startsWith()` and `String#endsWith()` over using a regex with `/^foo/` or `/foo$/`.
WARNING
This rule is deprecated. Prefer the type-aware `typescript/prefer-string-starts-ends-with` rule instead.

## Why is this bad?

Using `String#startsWith()` and `String#endsWith()` is more readable and performant as it does not need to parse a regex.

## Examples

Examples of incorrect code for this rule:
javascript
`const foo = "hello";
/^abc/.test(foo);`
Examples of correct code for this rule:
javascript
`const foo = "hello";
foo.startsWith("abc");`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/prefer-string-starts-ends-with": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/prefer-string-starts-ends-with": "error",
},
});`bash
`oxlint --deny unicorn/prefer-string-starts-ends-with`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/prefer_string_starts_ends_with.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-starts-ends-with.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fprefer-string-starts-ends-with)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html)
- [oxc project](https://github.com/oxc-project/oxc)