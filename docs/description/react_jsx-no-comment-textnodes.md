# Jsx No Comment Textnodes (react)

**Pattern ID:** `react_jsx-no-comment-textnodes`
**Plugin:** `react`

## What it does

This rule prevents comment strings (e.g. beginning with `//` or `/*`) from being accidentally injected as a text node in JSX statements.

## Why is this bad?

In JSX, any text node that is not wrapped in curly braces is considered a literal string to be rendered. This can lead to unexpected behavior when the text contains a comment.

## Examples

Examples of incorrect code for this rule:
jsx
`const Hello = () => {
return <div>// empty div</div>;
};
const Hello = () => {
return <div>/* empty div */</div>;
};`
Examples of correct code for this rule:
jsx
`const Hello = () => {
return <div>{/* empty div */}</div>;
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["react"],
"rules": {
"react/jsx-no-comment-textnodes": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["react"],
rules: {
"react/jsx-no-comment-textnodes": "error",
},
});`bash
`oxlint --deny react/jsx-no-comment-textnodes --react-plugin`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/react/jsx_no_comment_textnodes.rs)
- [Upstream rule docs](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=react%2Fjsx-no-comment-textnodes)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html)
- [oxc project](https://github.com/oxc-project/oxc)