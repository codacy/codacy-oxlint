# Anchor Is Valid (jsx-a11y)

**Pattern ID:** `jsx-a11y_anchor-is-valid`
**Plugin:** `jsx-a11y`

## What it does

The HTML `<a>` element, with a valid href attribute, is formally defined as representing a hyperlink. That is, a link between one HTML document and another, or between one location inside an HTML document and another location inside the same document.
While before it was possible to attach logic to an anchor element, with the advent of JSX libraries, it's now easier to attach logic to any HTML element, anchors included.
This rule is designed to prevent users to attach logic at the click of anchors, and also makes sure that the `href` provided to the anchor element is valid. If the anchor has logic attached to it, the rules suggests to turn it to a `button`, because that's likely what the user wants.
Anchor `<a></a>` elements should be used for navigation, while `<button></button>` should be used for user interaction.
Consider the following:
jsx
`<>
<a href="javascript:void(0)" onClick={foo}>
Perform action
</a>
<a href="#" onClick={foo}>
Perform action
</a>
<a onClick={foo}>Perform action</a>
</>`
All these anchor implementations indicate that the element is only used to execute JavaScript code. All the above should be replaced with:
jsx
`<button onClick={foo}>Perform action</button>`

## Why is this bad?

There are many reasons why an anchor should not have logic and have a correct `href` attribute:
- it can disrupt the correct flow of the user navigation e.g. a user that wants to open the link in another tab, but the default "click" behaviour is prevented
- it can source of invalid links, and crawlers can't navigate the website, risking to penalise SEO ranking

## Examples

Examples of valid code for this rule:
jsx
`<>
<a href={`https://www.javascript.com`}>navigate here</a>
<a href={somewhere}>navigate here</a>
<a {...spread}>navigate here</a>
</>`
Examples of invalid code for this rule:
jsx
`<>
<a href={null}>navigate here</a>
<a href={undefined}>navigate here</a>
<a href>navigate here</a>
<a href="javascript:void(0)">navigate here</a>
<a href="https://example.com" onClick={something}>
navigate here
</a>
</>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/anchor-is-valid": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/anchor-is-valid": "error",
},
});`bash
`oxlint --deny jsx-a11y/anchor-is-valid --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/anchor_is_valid.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fanchor-is-valid)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html)
- [oxc project](https://github.com/oxc-project/oxc)