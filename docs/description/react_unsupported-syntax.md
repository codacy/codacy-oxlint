# Unsupported Syntax (react)

**Pattern ID:** `react_unsupported-syntax`
**Plugin:** `react`

## What it does

Warns on syntax that React Compiler does not plan to support, such as `eval`; components and hooks using it are skipped, not optimized.
Powered by the React Compiler, which runs once per file and is shared with the other React Compiler rules. Port of `react-hooks/unsupported-syntax`.

## Why is this bad?

Constructs like `eval` make data flow unanalyzable, so the component permanently opts out of compiler optimization.

## Examples

Examples of incorrect code for this rule:
jsx
`function Component(props) {
eval("props.x = true");
return <div />;
}`
Examples of correct code for this rule:
jsx
`function Component(props) {
return <div>{props.x}</div>;
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/unsupported-syntax": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/unsupported-syntax": "error",
},
});`bash
`oxlint --deny react/unsupported-syntax --react-plugin`

## Version

This rule was added in v1.79.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/unsupported_syntax.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/unsupported-syntax.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Funsupported-syntax)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/unsupported-syntax.html)
- [oxc project](https://github.com/oxc-project/oxc)