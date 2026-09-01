# Google Font Display (nextjs)

**Pattern ID:** `nextjs_google-font-display`
**Plugin:** `nextjs`

## What it does

Enforce font-display behavior with Google Fonts.

## Why is this bad?

Specifying display=optional minimizes the risk of invisible text or layout shift. If swapping to the custom font after it has loaded is important to you, then use `display=swap`` instead.

## Examples

Examples of incorrect code for this rule:
jsx
`import Head from "next/head";
export default (Test = () => {
return (
<Head>
<link href="https://fonts.googleapis.com/css2?family=Krona+One" rel="stylesheet" />
</Head>
);
});`
Examples of correct code for this rule:
jsx
`import Head from "next/head";
export default (Test = () => {
return (
<Head>
<link
href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
rel="stylesheet"
/>
</Head>
);
});`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/google-font-display": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/google-font-display": "error",
},
});`bash
`oxlint --deny nextjs/google-font-display --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/google_font_display.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/google-font-display)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fgoogle-font-display)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/google-font-display.html)
- [oxc project](https://github.com/oxc-project/oxc)