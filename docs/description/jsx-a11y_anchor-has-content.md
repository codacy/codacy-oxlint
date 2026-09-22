# Anchor Has Content (jsx-a11y)

**Pattern ID:** `jsx-a11y_anchor-has-content`
**Plugin:** `jsx-a11y`

## What it does

Enforce that anchors have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the `aria-hidden` prop.
Alternatively, you may use the `title` prop or the `aria-label` prop.
Anchors passed directly as JSX prop values to custom components are ignored, since the receiving component may supply their content.

## Why is this bad?

Anchor elements without content can be confusing for users relying on screen readers to understand.

## Examples

Examples of correct code for this rule:
jsx
`<a>Anchor Content!</a>
<a><TextWrapper /></a>
<a dangerouslySetInnerHTML={{ __html: 'foo' }} />
<a title='foo' />
<a aria-label='foo' />
<Button render={<a href='/home' />}>Home</Button>`
Examples of incorrect code for this rule:
jsx
`<a />
<a><TextWrapper aria-hidden /></a>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/anchor-has-content": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/anchor-has-content": "error",
},
});`bash
`oxlint --deny jsx-a11y/anchor-has-content --jsx-a11y-plugin`

## Version

This rule was added in v0.0.18.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/anchor_has_content.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fanchor-has-content)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html)
- [oxc project](https://github.com/oxc-project/oxc)