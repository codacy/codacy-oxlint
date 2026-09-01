# Jsx No Duplicate Props (react)

**Pattern ID:** `react_jsx-no-duplicate-props`
**Plugin:** `react`

## What it does

This rule prevents duplicate props in JSX elements.

## Why is this bad?

Having duplicate props in a JSX element is most likely a mistake. Creating JSX elements with duplicate props can cause unexpected behavior in your application.

## Examples

Examples of incorrect code for this rule:
jsx
`<App a a />;
<App foo={2} bar baz foo={3} />;`
Examples of correct code for this rule:
jsx
`<App a />;
<App bar baz foo={3} />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-duplicate-props": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-duplicate-props": "error",
},
});`bash
`oxlint --deny react/jsx-no-duplicate-props --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_duplicate_props.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-duplicate-props)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html)
- [oxc project](https://github.com/oxc-project/oxc)