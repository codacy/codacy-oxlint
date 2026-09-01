# Error Boundaries (react)

**Pattern ID:** `react_error-boundaries`
**Plugin:** `react`

## What it does

Validates using error boundaries instead of `try`/`catch` around JSX for errors in child components.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/error-boundaries`.

## Why is this bad?

React renders components lazily — the child has not rendered yet inside the `try` block, so the `catch` never sees its errors; only an error boundary can catch them.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component(props) {
let el;
try {
el = <Child />;
} catch {
return null;
}
return el;
}`
Examples of correct code for this rule:
jsx
`function Component(props) {
return (
<ErrorBoundary fallback={null}>
<Child />
</ErrorBoundary>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/error-boundaries": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/error-boundaries": "error",
},
});`bash
`oxlint --deny react/error-boundaries --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/error_boundaries.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/error-boundaries.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Ferror-boundaries)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/error-boundaries.html)
- [oxc project](https://github.com/oxc-project/oxc)