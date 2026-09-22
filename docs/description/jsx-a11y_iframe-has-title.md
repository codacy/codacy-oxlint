# Iframe Has Title (jsx-a11y)

**Pattern ID:** `jsx-a11y_iframe-has-title`
**Plugin:** `jsx-a11y`

## What it does

Enforce iframe elements have a title attribute.

## Why is this bad?

Screen reader users rely on a iframe title to describe the contents of the iframe. Navigating through iframe and iframe elements quickly becomes difficult and confusing for users of this technology if the markup does not contain a title attribute.

## Examples

Examples of incorrect code for this rule:
jsx
`<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={''} />
<iframe title={``} />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />`
Examples of correct code for this rule:
jsx
`<iframe title="This is a unique title" />
<iframe title={uniqueTitle} />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/iframe-has-title": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/iframe-has-title": "error",
},
});`bash
`oxlint --deny jsx-a11y/iframe-has-title --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/iframe_has_title.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fiframe-has-title)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html)
- [oxc project](https://github.com/oxc-project/oxc)