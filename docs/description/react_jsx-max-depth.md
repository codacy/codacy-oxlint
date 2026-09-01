# Jsx Max Depth (react)

**Pattern ID:** `react_jsx-max-depth`
**Plugin:** `react`

## What it does

Enforces a maximum depth for nested JSX elements and fragments.

## Why is this bad?

Excessively nested JSX makes components harder to read and maintain.

## Examples

Examples of incorrect code for this rule:
jsx
`const Component = () => (
<div>
<div>
<div>
<span />
</div>
</div>
</div>
);`
Examples of correct code for this rule:
jsx
`const Component = () => (
<div>
<div>
<span />
</div>
</div>
);`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-max-depth": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-max-depth": "error",
},
});`bash
`oxlint --deny react/jsx-max-depth --react-plugin`

## Version

This rule was added in v1.36.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_max_depth.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-max-depth)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-max-depth.html)
- [oxc project](https://github.com/oxc-project/oxc)