# No Is Mounted (react)

**Pattern ID:** `react_no-is-mounted`
**Plugin:** `react`

## What it does

This rule prevents using `isMounted` in class components.

## Why is this bad?

`isMounted` is an anti-pattern, and is not available when using classes or function components.

## Examples

Examples of incorrect code for this rule:
jsx
`class Hello extends React.Component {
someMethod() {
if (!this.isMounted()) {
return;
}
}
render() {
return <div onClick={this.someMethod.bind(this)}>Hello</div>;
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-is-mounted": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-is-mounted": "error",
},
});`bash
`oxlint --deny react/no-is-mounted --react-plugin`

## Version

This rule was added in v0.0.19.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_is_mounted.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-is-mounted)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html)
- [oxc project](https://github.com/oxc-project/oxc)