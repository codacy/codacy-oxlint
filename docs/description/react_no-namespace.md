# No Namespace (react)

**Pattern ID:** `react_no-namespace`
**Plugin:** `react`

## What it does

Enforce that namespaces are not used in React elements.

## Why is this bad?

Namespaces in React elements, such as svg:circle, are not supported by React.

## Examples

Examples of incorrect code for this rule:
jsx
`<ns:TestComponent />
<Ns:TestComponent />`
Examples of correct code for this rule:
jsx
`<TestComponent />
<testComponent />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-namespace": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-namespace": "error",
},
});`bash
`oxlint --deny react/no-namespace --react-plugin`

## Version

This rule was added in v0.15.13.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_namespace.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-namespace)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace.html)
- [oxc project](https://github.com/oxc-project/oxc)