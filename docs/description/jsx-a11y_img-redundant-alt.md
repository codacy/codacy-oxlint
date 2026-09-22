# Img Redundant Alt (jsx-a11y)

**Pattern ID:** `jsx-a11y_img-redundant-alt`
**Plugin:** `jsx-a11y`

## What it does

Enforce that `img` alt attributes do not contain redundant words like "image", "picture", or "photo".

## Why is this bad?

Screen readers already announce `img` elements as an image, so there is no need to use words such as "image", "photo", or "picture" in the alt text. This creates redundant information for users of assistive technologies and makes the alt text less concise and useful.

## Examples

Examples of incorrect code for this rule:
jsx
`<img src="foo" alt="Photo of foo being weird." />
<img src="bar" alt="Image of me at a bar!" />
<img src="baz" alt="Picture of baz fixing a bug." />`
Examples of correct code for this rule:
jsx
`<img src="foo" alt="Foo eating a sandwich." />
<img src="bar" aria-hidden alt="Picture of me taking a photo of an image" /> // Will pass because it is hidden.
<img src="baz" alt={`Baz taking a ${photo}`} /> // This is valid since photo is a variable name.`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["jsx-a11y"],
"rules": {
"jsx-a11y/img-redundant-alt": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["jsx-a11y"],
rules: {
"jsx-a11y/img-redundant-alt": "error",
},
});`bash
`oxlint --deny jsx-a11y/img-redundant-alt --jsx-a11y-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/6060eee768ef4cc3876eda2cbf54cd9bf5c5acad/crates/oxc_linter/src/rules/jsx_a11y/img_redundant_alt.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=jsx-a11y%2Fimg-redundant-alt)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/img-redundant-alt.html)
- [oxc project](https://github.com/oxc-project/oxc)