# Jsx Pascal Case (react)

**Pattern ID:** `react_jsx-pascal-case`
**Plugin:** `react`

## What it does

Enforce PascalCase for user-defined JSX components.

## Why is this bad?

It enforces coding style that user-defined JSX components are defined and referenced in PascalCase. Note that since React's JSX uses the upper vs. lower case convention to distinguish between local component classes and HTML tags this rule will not warn on components that start with a lower case letter.

## Examples

Examples of incorrect code for this rule:
jsx
`<Test_component />
<TEST_COMPONENT />`
Examples of correct code for this rule:
jsx
`<div />
<TestComponent />
<TestComponent>
<div />
</TestComponent>
<CSSTransitionGroup />`
Examples of correct code for the "allowAllCaps" option:
jsx
`<ALLOWED />
<TEST_COMPONENT />`
Examples of correct code for the "allowNamespace" option:
jsx
`<Allowed.div />
<TestComponent.p />`
Examples of correct code for the "allowLeadingUnderscore" option:
jsx
`<_AllowedComponent />
<_AllowedComponent>
<div />
</_AllowedComponent>`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-pascal-case": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-pascal-case": "error",
},
});`bash
`oxlint --deny react/jsx-pascal-case --react-plugin`

## Version

This rule was added in v1.19.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_pascal_case.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-pascal-case)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html)
- [oxc project](https://github.com/oxc-project/oxc)