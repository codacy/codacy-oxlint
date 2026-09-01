# Jsx No Target Blank (react)

**Pattern ID:** `react_jsx-no-target-blank`
**Plugin:** `react`

## What it does

This rule aims to prevent user-generated link hrefs and form actions from creating security vulnerabilities by requiring `rel='noreferrer'` for external link hrefs and form actions, and optionally any dynamically generated link hrefs and form actions.

## Why is this bad?

When creating a JSX element that has an `a` tag, it is often desired to have the link open in a new tab using the `target='_blank'` attribute. Using this attribute unaccompanied by `rel='noreferrer'`, however, is a severe security vulnerability (see `noreferrer` docs and `noopener` docs for more details). This rules requires that you accompany `target='_blank'` attributes with `rel='noreferrer'`.

## Examples

Examples of incorrect code for this rule:
jsx
`var Hello = <a target="_blank" href="https://example.com/"></a>;
var Hello = <a target="_blank" href={dynamicLink}></a>;`
Examples of correct code for this rule:
jsx
`/// correct
var Hello = <p target="_blank"></p>;
var Hello = <a target="_blank" rel="noreferrer" href="https://example.com"></a>;
var Hello = <a target="_blank" rel="noopener noreferrer" href="https://example.com"></a>;
var Hello = <a target="_blank" href="relative/path/in/the/host"></a>;
var Hello = <a target="_blank" href="/absolute/path/in/the/host"></a>;
var Hello = <a></a>;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-target-blank": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-target-blank": "error",
},
});`bash
`oxlint --deny react/jsx-no-target-blank --react-plugin`

## Version

This rule was added in v0.2.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_target_blank.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-target-blank)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html)
- [oxc project](https://github.com/oxc-project/oxc)