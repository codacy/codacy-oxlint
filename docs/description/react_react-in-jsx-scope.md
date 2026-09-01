# React In Jsx Scope (react)

**Pattern ID:** `react_react-in-jsx-scope`
**Plugin:** `react`

## What it does

Enforces that React is imported and in-scope when using JSX syntax.
Note that this rule is not necessary on React 17+ if you are using the new JSX Transform, and you can disable this rule and skip importing `React` in files with JSX syntax.
If your `tsconfig.json` has `jsx` set to `react-jsx` or `react-jsxdev`, you are using the new JSX Transform. For JavaScript projects using Babel, you are using the new JSX Transform if your React preset configuration (in `.babelrc` or `babel.config.js`) has `runtime: "automatic"`.
For more information, see [the React blog post on JSX Transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint).

## Why is this bad?

When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope.

## Examples

Examples of incorrect code for this rule:
jsx
`const a = <a />;`
Examples of correct code for this rule:
jsx
`import React from "react";
const a = <a />;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/react-in-jsx-scope": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/react-in-jsx-scope": "error",
},
});`bash
`oxlint --deny react/react-in-jsx-scope --react-plugin`

## Version

This rule was added in v0.0.20.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/react_in_jsx_scope.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Freact-in-jsx-scope)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html)
- [oxc project](https://github.com/oxc-project/oxc)