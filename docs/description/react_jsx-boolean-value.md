# Jsx Boolean Value (react)

**Pattern ID:** `react_jsx-boolean-value`
**Plugin:** `react`

## What it does

Enforce a consistent boolean attribute style in your code.

## Why is this bad?

In JSX, you can set a boolean attribute to `true` or omit it. This rule will enforce a consistent style for boolean attributes.

## Examples

Examples of incorrect code for this rule with default `"never"` mode:
jsx
`const Hello = <Hello personal={true} />;`
Examples of correct code for this rule with default `"never"` mode:
jsx
`const Hello = <Hello personal />;
const Foo = <Foo isSomething={false} />;`
Examples of incorrect code for this rule with `"always"` mode:
jsx
`const Hello = <Hello personal />;`
Examples of correct code for this rule with `"always"` mode:
jsx
`const Hello = <Hello personal={true} />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-boolean-value": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-boolean-value": "error",
},
});`bash
`oxlint --deny react/jsx-boolean-value --react-plugin`

## Version

This rule was added in v0.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_boolean_value.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-boolean-value)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html)
- [oxc project](https://github.com/oxc-project/oxc)