# No Danger (react)

**Pattern ID:** `react_no-danger`
**Plugin:** `react`

## What it does

This rule prevents the use of `dangerouslySetInnerHTML` prop.

## Why is this bad?

`dangerouslySetInnerHTML` is a way to inject HTML into your React component. This is dangerous because it can easily lead to XSS vulnerabilities.

## Examples

Examples of incorrect code for this rule:
jsx
`import React from "react";
const Hello = <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;`
Examples of correct code for this rule:
jsx
`import React from "react";
const Hello = <div>Hello World</div>;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/no-danger": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/no-danger": "error",
},
});`bash
`oxlint --deny react/no-danger --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/no_danger.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fno-danger)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html)
- [oxc project](https://github.com/oxc-project/oxc)