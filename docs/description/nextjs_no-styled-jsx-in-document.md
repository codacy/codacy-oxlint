# No Styled Jsx In Document (nextjs)

**Pattern ID:** `nextjs_no-styled-jsx-in-document`
**Plugin:** `nextjs`

## What it does

Prevent usage of styled-jsx in `pages/_document.js`.

## Why is this bad?

Custom CSS like styled-jsx is not allowed in a [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document).

## Examples

Examples of incorrect code for this rule:
javascript
`// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
render() {
return (
<Html>
<Head />
<body>
<Main />
<NextScript />
<style jsx>{`
body {
background: hotpink;
}
`}</style>
</body>
</Html>
);
}
}`
Examples of correct code for this rule:
javascript
`// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
render() {
return (
<Html>
<Head />
<body>
<Main />
<NextScript />
</body>
</Html>
);
}
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-styled-jsx-in-document": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-styled-jsx-in-document": "error",
},
});`bash
`oxlint --deny nextjs/no-styled-jsx-in-document --nextjs-plugin`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_styled_jsx_in_document.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-styled-jsx-in-document)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-styled-jsx-in-document)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.html)
- [oxc project](https://github.com/oxc-project/oxc)