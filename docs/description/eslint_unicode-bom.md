# Unicode Bom (eslint)

**Pattern ID:** `eslint_unicode-bom`
**Plugin:** `eslint`

## What it does

Require or disallow Unicode byte order mark (BOM)

## Why is this bad?

The Unicode Byte Order Mark (BOM) is used to specify whether code units are big endian or little endian. That is, whether the most significant or least significant bytes come first. UTF-8 does not require a BOM because byte ordering does not matter when characters are a single byte. Since UTF-8 is the dominant encoding of the web, we make "never" the default option.

## Examples

Examples of incorrect code for this rule:
javascript
`var a = 123;`

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicode-bom": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicode-bom": "error",
},
});`bash
`oxlint --deny unicode-bom`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/unicode_bom.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/unicode-bom)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Funicode-bom)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html)
- [oxc project](https://github.com/oxc-project/oxc)