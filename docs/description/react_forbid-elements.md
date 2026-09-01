# Forbid Elements (react)

**Pattern ID:** `react_forbid-elements`
**Plugin:** `react`

## What it does

Allows you to configure a list of forbidden elements and to specify their desired replacements.

## Why is this bad?

You may want to forbid usage of certain elements in favor of others, e.g. forbid all `<div />` and use `<Box />` instead.

## Examples

Examples of incorrect code for this rule:
jsx
`// ["error", { "forbid": ["button"] }]
<button />;
React.createElement("button");
// ["error", { "forbid": ["Modal"] }]
<Modal />;
React.createElement(Modal);
// ["error", { "forbid": ["Namespaced.Element"] }]
<Namespaced.Element />;
React.createElement(Namespaced.Element);
// ["error", { "forbid": [{ "element": "button", "message": "use <Button> instead" }, "input"] }]
<div>
<button />
<input />
</div>;
React.createElement("div", {}, React.createElement("button", {}, React.createElement("input")));`
Examples of correct code for this rule:
jsx
`// ["error", { "forbid": ["button"] }]
<Button />
// ["error", { "forbid": [{ "element": "button" }] }]
<Button />`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/forbid-elements": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/forbid-elements": "error",
},
});`bash
`oxlint --deny react/forbid-elements --react-plugin`

## Version

This rule was added in v0.16.11.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/forbid_elements.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fforbid-elements)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-elements.html)
- [oxc project](https://github.com/oxc-project/oxc)