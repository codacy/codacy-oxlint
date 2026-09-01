# Self Closing Comp (react)

**Pattern ID:** `react_self-closing-comp`
**Plugin:** `react`

## What it does

Detects components without children which can be self-closed to avoid unnecessary extra closing tags.

## Why is this bad?

Components without children don't need explicit closing tags. Using self-closing syntax makes code more concise and reduces visual clutter. It also follows common React and JSX conventions for empty elements.
A self-closing component which contains whitespace is allowed except when it also contains a newline.

## Examples

Examples of incorrect code for this rule:
jsx
`const elem = <Component linter="oxlint"></Component>;
const dom_elem = <div id="oxlint"></div>;
const welem = <div id="oxlint"></div>;`
Examples of correct code for this rule:
jsx
`const elem = <Component linter="oxlint" />;
const welem = <Component linter="oxlint"> </Component>;
const dom_elem = <div id="oxlint" />;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/self-closing-comp": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/self-closing-comp": "error",
},
});`bash
`oxlint --deny react/self-closing-comp --react-plugin`

## Version

This rule was added in v0.9.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/self_closing_comp.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fself-closing-comp)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html)
- [oxc project](https://github.com/oxc-project/oxc)