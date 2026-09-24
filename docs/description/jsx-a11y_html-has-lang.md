# Html Has Lang (jsx-a11y)

**Pattern ID:** `jsx-a11y_html-has-lang`
**Plugin:** `jsx-a11y`

## What it does

Ensures that every HTML document has a lang attribute.

## Why is this bad?

If the language of a webpage is not specified, the screen reader assumes the default language set by the user. Language settings become an issue for users who speak multiple languages and access website in more than one language.

## Examples

Examples of incorrect code for this rule:
jsx
`<html />`
Examples of correct code for this rule:
jsx
`<html lang="en" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/html-has-lang": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/html-has-lang": "error",
},
});`bash
`oxlint --deny jsx-a11y/html-has-lang --jsx-a11y-plugin`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/html_has_lang.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fhtml-has-lang)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html)
- [oxc project](https://github.com/oxc-project/oxc)