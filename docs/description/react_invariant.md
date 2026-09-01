# Invariant (react)

**Pattern ID:** `react_invariant`
**Plugin:** `react`

## What it does

Reports internal React Compiler invariant violations. These indicate a bug in the compiler itself, not in your code — consider reporting them to the oxc or React teams.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/invariant`.

## Why is this bad?

An invariant violation means the compiler's internal state is inconsistent; the affected function is skipped rather than optimized.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/invariant": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/invariant": "error",
},
});`bash
`oxlint --deny react/invariant --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/invariant.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/invariant.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Finvariant)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/invariant.html)
- [oxc project](https://github.com/oxc-project/oxc)