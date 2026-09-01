# No Before Interactive Script Outside Document (nextjs)

**Pattern ID:** `nextjs_no-before-interactive-script-outside-document`
**Plugin:** `nextjs`

## What it does

Prevents the usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`. This rule ensures that scripts with the `beforeInteractive` loading strategy are only used in the document component where they are most effective.

## Why is this bad?

The `beforeInteractive` strategy is specifically designed to load scripts before any page hydration occurs, which is only guaranteed to work correctly when placed in `pages/_document.js`. Using it elsewhere:
- May not achieve the intended early loading behavior
- Can lead to inconsistent script loading timing
- Might cause hydration mismatches or other runtime issues
- Could impact the application's performance optimization

## Examples

Examples of incorrect code for this rule:
jsx
`// pages/index.js
import Script from "next/script";
export default function HomePage() {
return (
<div>
<Script
src="https://example.com/script.js"
strategy="beforeInteractive" // ❌ Wrong placement
/>
</div>
);
}`
Examples of correct code for this rule:
jsx
`// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
render() {
return (
<Html>
<Head />
<body>
<Script
src="https://example.com/script.js"
strategy="beforeInteractive" // ✅ Correct placement
/>
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
"nextjs/no-before-interactive-script-outside-document": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-before-interactive-script-outside-document": "error",
},
});`bash
`oxlint --deny nextjs/no-before-interactive-script-outside-document --nextjs-plugin`

## Version

This rule was added in v0.2.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_before_interactive_script_outside_document.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-before-interactive-script-outside-document)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-before-interactive-script-outside-document)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-before-interactive-script-outside-document.html)
- [oxc project](https://github.com/oxc-project/oxc)