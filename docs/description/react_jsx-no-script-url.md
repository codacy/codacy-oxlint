# Jsx No Script Url (react)

**Pattern ID:** `react_jsx-no-script-url`
**Plugin:** `react`

## What it does

Disallow usage of `javascript:` URLs.

## Why is this bad?

URLs starting with `javascript:` are a dangerous attack surface because it’s easy to accidentally include unsanitized output in a tag like `<a href>` and create a security hole.
Starting in React 16.9, any URLs starting with `javascript:` log a warning.
In React 19, `javascript:` URLs are [disallowed entirely](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#other-breaking-changes).

## Examples

Examples of incorrect code for this rule:
jsx
`<a href="javascript:void(0)">Test</a>`
Examples of correct code for this rule:
jsx
`<Foo test="javascript:void(0)" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-script-url": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-script-url": "error",
},
});`bash
`oxlint --deny react/jsx-no-script-url --react-plugin`

## Version

This rule was added in v0.13.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_script_url.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-script-url)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html)
- [oxc project](https://github.com/oxc-project/oxc)