# No Css Tags (nextjs)

**Pattern ID:** `nextjs_no-css-tags`
**Plugin:** `nextjs`

## What it does

Prevents manual inclusion of stylesheets using `<link>` tags in Next.js applications. This rule checks for `<link>` tags with `rel="stylesheet"` that reference local CSS files.

## Why is this bad?

Next.js handles CSS imports automatically through its built-in CSS support. Manual stylesheet inclusion bypasses Next.js's built-in CSS optimization, prevents proper code splitting and optimization of styles, and may cause Flash of Unstyled Content (FOUC). This also breaks automatic CSS hot reloading during development.

## Examples

Examples of incorrect code for this rule:
jsx
`// Manually including local CSS file
<link href="/_next/static/css/styles.css" rel="stylesheet" />
// In pages/_document.js
<Head>
<link href="css/my-styles.css" rel="stylesheet" />
</Head>`
Examples of correct code for this rule:
jsx
`// Importing CSS file directly
import '../styles/global.css'
// Using CSS Modules
import styles from './Button.module.css'
// Using external stylesheets (allowed)
<link
href="https://fonts.googleapis.com/css?family=Open+Sans"
rel="stylesheet"
/>
// Using styled-jsx
<style jsx>{`
.button { color: blue; }
`}</style>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-css-tags": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-css-tags": "error",
},
});`bash
`oxlint --deny nextjs/no-css-tags --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_css_tags.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-css-tags)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-css-tags)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-css-tags.html)
- [oxc project](https://github.com/oxc-project/oxc)