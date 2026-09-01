# Jsx Fragments (react)

**Pattern ID:** `react_jsx-fragments`
**Plugin:** `react`

## What it does

Enforces the shorthand or standard form for React Fragments.

## Why is this bad?

Makes code using fragments more consistent one way or the other.

## Configuration

This rule accepts one of the following string values:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-fragments": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-fragments": "error",
},
});`bash
`oxlint --deny react/jsx-fragments --react-plugin`

## Version

This rule was added in v1.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_fragments.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-fragments)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html)
- [oxc project](https://github.com/oxc-project/oxc)