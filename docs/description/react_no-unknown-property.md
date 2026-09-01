# No Unknown Property (react)

**Pattern ID:** `react_no-unknown-property`
**Plugin:** `react`

## What it does

Disallow usage of unknown DOM properties.

## Why is this bad?

DOM properties should only be used if they are valid for a given HTML element.

## Examples

Examples of incorrect code for this rule:
jsx
`// Unknown properties
const Hello = <div class="hello">Hello World</div>;
const Alphabet = <div abc="something">Alphabet</div>;
// Invalid aria-* attribute
const IconButton = <div aria-foo="bar" />;`
Examples of correct code for this rule:
jsx
`// Unknown properties
const Hello = <div className="hello">Hello World</div>;
const Alphabet = <div>Alphabet</div>;
// Invalid aria-* attribute
const IconButton = <div aria-label="bar" />;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-unknown-property": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-unknown-property": "error",
},
});`bash
`oxlint --deny react/no-unknown-property --react-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_unknown_property.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-unknown-property)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html)
- [oxc project](https://github.com/oxc-project/oxc)