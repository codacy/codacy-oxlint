# Jsx No Undef (react)

**Pattern ID:** `react_jsx-no-undef`
**Plugin:** `react`

## What it does

Disallow undeclared variables in JSX.
Note that this rule is generally unnecessary if you are using TypeScript, as TypeScript will catch undeclared variables for you.

## Why is this bad?

It is most likely a potential ReferenceError caused by a misspelling of a variable or parameter name.

## Examples

Examples of incorrect code for this rule:
jsx
`const A = () => <App />;
const C = <B />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-undef": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-undef": "error",
},
});`bash
`oxlint --deny react/jsx-no-undef --react-plugin`

## Version

This rule was added in v0.1.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_undef.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-undef)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html)
- [oxc project](https://github.com/oxc-project/oxc)