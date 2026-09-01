# Iframe Missing Sandbox (react)

**Pattern ID:** `react_iframe-missing-sandbox`
**Plugin:** `react`

## What it does

Enforce the `sandbox` attribute on `iframe` elements.

## Why is this bad?

The sandbox attribute enables an extra set of restrictions for the content in the iframe. Using sandbox attribute is considered a good security practice. To learn more about sandboxing, see MDN's documentation on the `sandbox` attribute.
This rule checks all React `<iframe>` elements and verifies that there is `sandbox` attribute and that it's value is valid. In addition to that it also reports cases where attribute contains `allow-scripts` and `allow-same-origin` at the same time as this combination allows the embedded document to remove the sandbox attribute and bypass the restrictions.

## Examples

Examples of incorrect code for this rule:
jsx
`<iframe />;
<iframe sandbox="invalid-value" />;
<iframe sandbox="allow-same-origin allow-scripts" />;`
Examples of correct code for this rule:
jsx
`<iframe sandbox="" />;
<iframe sandbox="allow-origin" />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/iframe-missing-sandbox": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/iframe-missing-sandbox": "error",
},
});`bash
`oxlint --deny react/iframe-missing-sandbox --react-plugin`

## Version

This rule was added in v0.10.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/iframe_missing_sandbox.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fiframe-missing-sandbox)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/iframe-missing-sandbox.html)
- [oxc project](https://github.com/oxc-project/oxc)