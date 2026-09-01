# Capitalized Calls (react)

**Pattern ID:** `react_capitalized-calls`
**Plugin:** `react`

## What it does

Disallows calling capitalized functions or methods directly during render instead of rendering them with JSX, since capitalized names are reserved for components.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/capitalized-calls`.

## Why is this bad?

Calling a component as a plain function hides it from React: it gets no state isolation and no hooks context of its own, and it breaks memoization.

## Examples

Examples of incorrect code for this rule:
jsx
`import Child from "./Child";
function Component() {
return <div>{Child()}</div>;
}`
Examples of correct code for this rule:
jsx
`import Child from "./Child";
function Component() {
return (
<div>
<Child />
</div>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/capitalized-calls": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/capitalized-calls": "error",
},
});`bash
`oxlint --deny react/capitalized-calls --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/capitalized_calls.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/capitalized-calls.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fcapitalized-calls)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/capitalized-calls.html)
- [oxc project](https://github.com/oxc-project/oxc)