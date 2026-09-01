# Exhaustive Deps (react)

**Pattern ID:** `react_exhaustive-deps`
**Plugin:** `react`

## What it does

Verifies the list of dependencies for Hooks like `useEffect` and similar.

## Why is this bad?

React Hooks like `useEffect` and similar require a list of dependencies to be passed as an argument. This list is used to determine when the effect should be re-run. If the list is missing or incomplete, the effect may run more often than necessary, or not at all.

## Examples

Examples of incorrect code for this rule:
javascript
`function MyComponent(props) {
useEffect(() => {
console.log(props.foo);
}, []);
// `props` is missing from the dependencies array
return <div />;
}`
Examples of correct code for this rule:
javascript
`function MyComponent(props) {
useEffect(() => {
console.log(props.foo);
}, [props]);
return <div />;
}`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/exhaustive-deps": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/exhaustive-deps": "error",
},
});`bash
`oxlint --deny react/exhaustive-deps --react-plugin`

## Version

This rule was added in v0.12.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/exhaustive_deps.rs)
- [Upstream rule docs](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fexhaustive-deps)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html)
- [oxc project](https://github.com/oxc-project/oxc)