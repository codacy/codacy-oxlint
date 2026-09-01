# No Page Custom Font (nextjs)

**Pattern ID:** `nextjs_no-page-custom-font`
**Plugin:** `nextjs`

## What it does

Prevent page-only custom fonts.

## Why is this bad?

- The custom font you're adding was added to a page - this only adds the font to the specific page and not the entire application.
- The custom font you're adding was added to a separate component within `pages/_document.js` - this disables automatic font optimization.

## Examples

Examples of incorrect code for this rule:
jsx
`// pages/index.jsx
import Head from "next/head";
function IndexPage() {
return (
<Head>
<link
href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
rel="stylesheet"
/>
</Head>
);
}
export default IndexPage;`
Examples of correct code for this rule:
jsx
`// pages/_document.jsx
import NextDocument, { Html, Head } from "next/document";
class Document extends NextDocument {
render() {
return (
<Html>
<Head>
<link
href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
rel="stylesheet"
/>
</Head>
</Html>
);
}
}
export default Document;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-page-custom-font": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-page-custom-font": "error",
},
});`bash
`oxlint --deny nextjs/no-page-custom-font --nextjs-plugin`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_page_custom_font.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-page-custom-font)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-page-custom-font)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-page-custom-font.html)
- [oxc project](https://github.com/oxc-project/oxc)