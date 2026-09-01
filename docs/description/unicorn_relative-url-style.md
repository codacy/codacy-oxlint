# Relative Url Style (unicorn)

**Pattern ID:** `unicorn_relative-url-style`
**Plugin:** `unicorn`

## What it does

Enforce consistent relative URL style.

## Why is this bad?

When using a relative URL in `new URL()`, the URL should either never or always use the `./` prefix consistently.

## Examples

Examples of incorrect code for this rule with the default `"never"` option:
js
`new URL("./foo", base);`
Examples of correct code for this rule with the default `"never"` option:
js
`new URL("foo", base);`
Examples of incorrect code for this rule with the `"always"` option:
js
`new URL("foo", base);`
Examples of correct code for this rule with the `"always"` option:
js
`new URL("./foo", base);`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/relative-url-style": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/relative-url-style": "error",
},
});`bash
`oxlint --deny unicorn/relative-url-style`

## Version

This rule was added in v1.44.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/relative_url_style.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Frelative-url-style)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/relative-url-style.html)
- [oxc project](https://github.com/oxc-project/oxc)