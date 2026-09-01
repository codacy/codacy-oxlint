# No Document Import In Page (nextjs)

**Pattern ID:** `nextjs_no-document-import-in-page`
**Plugin:** `nextjs`

## What it does

Prevent importing `next/document` outside of `pages/_document.js`.

## Why is this bad?

Importing `next/document` outside of `pages/_document.js` can cause unexpected issues in your Next.js application.

## Examples

Examples of incorrect code for this rule:
jsx
`// `components/MyDocument.jsx`
import Document from "next/document";
class MyDocument extends Document {
//...
}
export default MyDocument;`
Examples of correct code for this rule:
jsx
`// `pages/_document.jsx`
import Document from "next/document";
class MyDocument extends Document {
//...
}
export default MyDocument;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-document-import-in-page": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-document-import-in-page": "error",
},
});`bash
`oxlint --deny nextjs/no-document-import-in-page --nextjs-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_document_import_in_page.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-document-import-in-page)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-document-import-in-page)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-document-import-in-page.html)
- [oxc project](https://github.com/oxc-project/oxc)