# No Title In Document Head (nextjs)

**Pattern ID:** `nextjs_no-title-in-document-head`
**Plugin:** `nextjs`

## What it does

Prevent usage of `<title>` with `Head` component from `next/document`.

## Why is this bad?

A `<title>` element should only be used for any `<head>` code that is common for all pages. Title tags should be defined at the page-level using `next/head` instead.

## Examples

Examples of incorrect code for this rule:
javascript
`import { Head } from "next/document";
export function Home() {
return (
<div>
<Head>
<title>My page title</title>
</Head>
</div>
);
}`
Examples of correct code for this rule:
javascript
`import Head from "next/head";
export function Home() {
return (
<div>
<Head>
<title>My page title</title>
</Head>
</div>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-title-in-document-head": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-title-in-document-head": "error",
},
});`bash
`oxlint --deny nextjs/no-title-in-document-head --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_title_in_document_head.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-title-in-document-head)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-title-in-document-head)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-title-in-document-head.html)
- [oxc project](https://github.com/oxc-project/oxc)