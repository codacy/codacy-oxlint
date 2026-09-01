# Google Font Preconnect (nextjs)

**Pattern ID:** `nextjs_google-font-preconnect`
**Plugin:** `nextjs`

## What it does

Enforces the presence of `rel="preconnect"` when using Google Fonts via `<link>` tags.

## Why is this bad?

When using Google Fonts, it's recommended to include a preconnect resource hint to establish early connections to the required origin. Without preconnect, the browser needs to perform DNS lookups, TCP handshakes, and TLS negotiations before it can download the font files, which can delay font loading and impact performance.

## Examples

Examples of incorrect code for this rule:
javascript
`<link href="https://fonts.gstatic.com" />
<link rel="preload" href="https://fonts.gstatic.com" />`
Examples of correct code for this rule:
javascript
`<link rel="preconnect" href="https://fonts.gstatic.com" />`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/google-font-preconnect": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/google-font-preconnect": "error",
},
});`bash
`oxlint --deny nextjs/google-font-preconnect --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/google_font_preconnect.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/google-font-preconnect)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fgoogle-font-preconnect)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/google-font-preconnect.html)
- [oxc project](https://github.com/oxc-project/oxc)