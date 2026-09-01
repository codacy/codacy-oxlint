# Button Has Type (react)

**Pattern ID:** `react_button-has-type`
**Plugin:** `react`

## What it does

Enforces an explicit `type` attribute for all HTML `button` elements.

## Why is this bad?

The default value of `type` attribute for `button` HTML element is `"submit"` which is often not the desired behavior and may lead to unexpected page reloads.

## Examples

Examples of incorrect code for this rule:
jsx
`<button />
<button type="foo" />`
Examples of correct code for this rule:
jsx
`<button type="button" />
<button type="submit" />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/button-has-type": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/button-has-type": "error",
},
});`bash
`oxlint --deny react/button-has-type --react-plugin`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/button_has_type.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fbutton-has-type)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html)
- [oxc project](https://github.com/oxc-project/oxc)