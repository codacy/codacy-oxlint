# Preserve Manual Memoization (react)

**Pattern ID:** `react_preserve-manual-memoization`
**Plugin:** `react`

## What it does

Validates that existing manual memoization (`useMemo`, `useCallback`, `React.memo`) is preserved by the React Compiler: the compiler only compiles code whose inferred dependencies match or exceed the manually specified ones.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/preserve-manual-memoization`.

## Why is this bad?

When the compiler cannot prove that existing manual memoization is preserved, it skips optimizing that code.

## Examples

Examples of incorrect code for this rule:
jsx
`import { useCallback } from "react";
function useFoo(props) {
const values = [];
values.push(props);
return useCallback(() => values, [values]);
}`
Examples of correct code for this rule:
jsx
`import { useMemo } from "react";
function Component({ propA }) {
return useMemo(() => propA.x, [propA]);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/preserve-manual-memoization": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/preserve-manual-memoization": "error",
},
});`bash
`oxlint --deny react/preserve-manual-memoization --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/preserve_manual_memoization.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/preserve-manual-memoization.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fpreserve-manual-memoization)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/preserve-manual-memoization.html)
- [oxc project](https://github.com/oxc-project/oxc)