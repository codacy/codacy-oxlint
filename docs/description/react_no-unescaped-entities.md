# No Unescaped Entities (react)

**Pattern ID:** `react_no-unescaped-entities`
**Plugin:** `react`

## What it does

This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.

## Why is this bad?

JSX escape characters are used to inject characters into JSX statements that would otherwise be interpreted as code.

## Examples

Incorrect
jsx
`<div> > </div>`
Correct
jsx
`<div> > </div>`jsx
`<div> {">"} </div>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-unescaped-entities": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-unescaped-entities": "error",
},
});`bash
`oxlint --deny react/no-unescaped-entities --react-plugin`

## Version

This rule was added in v0.0.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_unescaped_entities.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-unescaped-entities)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html)
- [oxc project](https://github.com/oxc-project/oxc)