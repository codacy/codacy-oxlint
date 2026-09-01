# Jsx Props No Spread Multi (react)

**Pattern ID:** `react_jsx-props-no-spread-multi`
**Plugin:** `react`

## What it does

Enforces that any unique expression is only spread once.

## Why is this bad?

Generally spreading the same expression twice is an indicator of a mistake since any attribute between the spreads may be overridden when the intent was not to. Even when that is not the case this will lead to unnecessary computations being performed.

## Examples

Examples of incorrect code for this rule:
jsx
`<App {...props} myAttr="1" {...props} />`
Examples of correct code for this rule:
jsx
`<App myAttr="1" {...props} />
<App {...props} myAttr="1" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-props-no-spread-multi": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-props-no-spread-multi": "error",
},
});`bash
`oxlint --deny react/jsx-props-no-spread-multi --react-plugin`

## Version

This rule was added in v0.7.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_props_no_spread_multi.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-props-no-spread-multi)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html)
- [oxc project](https://github.com/oxc-project/oxc)