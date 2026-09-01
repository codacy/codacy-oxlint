# Memo Dependencies (react)

**Pattern ID:** `react_memo-dependencies`
**Plugin:** `react`

## What it does

Validates that `useMemo()` and `useCallback()` declare comprehensive dependency lists without extraneous values.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/memo-dependencies`.

## Why is this bad?

Missing dependencies produce stale memoized values; extraneous ones cause unnecessary recomputation.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/memo-dependencies": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/memo-dependencies": "error",
},
});`bash
`oxlint --deny react/memo-dependencies --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/memo_dependencies.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/memo-dependencies.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fmemo-dependencies)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/memo-dependencies.html)
- [oxc project](https://github.com/oxc-project/oxc)