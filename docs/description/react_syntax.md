# Syntax (react)

**Pattern ID:** `react_syntax`
**Plugin:** `react`

## What it does

Reports invalid JavaScript encountered by React Compiler while analyzing a component or hook, such as reassigning a `const` binding.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/syntax`.

## Why is this bad?

The code would throw at runtime; the compiler skips the function instead of optimizing it.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/syntax": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/syntax": "error",
},
});`bash
`oxlint --deny react/syntax --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/syntax.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/syntax.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fsyntax)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/syntax.html)
- [oxc project](https://github.com/oxc-project/oxc)