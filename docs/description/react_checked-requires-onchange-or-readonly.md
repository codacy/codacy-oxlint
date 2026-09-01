# Checked Requires Onchange Or Readonly (react)

**Pattern ID:** `react_checked-requires-onchange-or-readonly`
**Plugin:** `react`

## What it does

This rule enforces `onChange` or `readOnly` attribute for checked property of input elements. It also warns when `checked` and `defaultChecked` properties are used together.

## Why is this bad?

`checked` should generally always be used with one of `onChange` or `readOnly`.
And using `checked` and `defaultChecked` together is likely an error as they are mutually exclusive ways to control the checked state of an input element.

## Examples

Examples of incorrect code for this rule:
jsx
`<input type="checkbox" checked />
<input type="checkbox" checked defaultChecked />
<input type="radio" checked defaultChecked />
React.createElement('input', { checked: false });
React.createElement('input', { type: 'checkbox', checked: true });
React.createElement('input', { type: 'checkbox', checked: true, defaultChecked: true });`
Examples of correct code for this rule:
jsx
`<input type="checkbox" checked onChange={() => {}} />
<input type="checkbox" checked readOnly />
<input type="checkbox" checked onChange readOnly />
<input type="checkbox" defaultChecked />
React.createElement('input', { type: 'checkbox', checked: true, onChange() {} });
React.createElement('input', { type: 'checkbox', checked: true, readOnly: true });
React.createElement('input', { type: 'checkbox', checked: true, onChange() {}, readOnly: true });
React.createElement('input', { type: 'checkbox', defaultChecked: true });`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/checked-requires-onchange-or-readonly": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/checked-requires-onchange-or-readonly": "error",
},
});`bash
`oxlint --deny react/checked-requires-onchange-or-readonly --react-plugin`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/checked_requires_onchange_or_readonly.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fchecked-requires-onchange-or-readonly)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html)
- [oxc project](https://github.com/oxc-project/oxc)