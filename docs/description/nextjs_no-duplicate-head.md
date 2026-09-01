# No Duplicate Head (nextjs)

**Pattern ID:** `nextjs_no-duplicate-head`
**Plugin:** `nextjs`

## What it does

Prevent duplicate usage of `<Head>` in `pages/_document.js`.

## Why is this bad?

This can cause unexpected behavior in your application.

## Examples

Examples of incorrect code for this rule:
jsx
`import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
static async getInitialProps(ctx) {}
render() {
return (
<Html>
<Head />
<Head />
<body>
<Main />
<NextScript />
</body>
</Html>
);
}
}
export default MyDocument;`
Examples of correct code for this rule:
jsx
`import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
static async getInitialProps(ctx) {}
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
}
export default MyDocument;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-duplicate-head": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-duplicate-head": "error",
},
});`bash
`oxlint --deny nextjs/no-duplicate-head --nextjs-plugin`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_duplicate_head.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-duplicate-head)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-duplicate-head)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-duplicate-head.html)
- [oxc project](https://github.com/oxc-project/oxc)