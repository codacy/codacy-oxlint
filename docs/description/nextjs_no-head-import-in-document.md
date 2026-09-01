# No Head Import In Document (nextjs)

**Pattern ID:** `nextjs_no-head-import-in-document`
**Plugin:** `nextjs`

## What it does

Prevents the usage of `next/head` inside a Next.js document.

## Why is this bad?

Importing `next/head` inside `pages/_document.js` can cause unexpected issues in your Next.js application.

## Examples

Examples of incorrect code for this rule:
jsx
`import Document, { Html, Main, NextScript } from "next/document";
import Head from "next/head";
class MyDocument extends Document {
static async getInitialProps(ctx) {
//...
}
render() {
return (
<Html>
<Head></Head>
</Html>
);
}
}
export default MyDocument;`
Examples of correct code for this rule:
jsx
`import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
static async getInitialProps(ctx) {
//...
}
render() {
return (
<Html>
<Head></Head>
</Html>
);
}
}
export default MyDocument;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-head-import-in-document": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-head-import-in-document": "error",
},
});`bash
`oxlint --deny nextjs/no-head-import-in-document --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_head_import_in_document.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-head-import-in-document)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-head-import-in-document)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-head-import-in-document.html)
- [oxc project](https://github.com/oxc-project/oxc)