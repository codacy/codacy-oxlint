# Next Script For Ga (nextjs)

**Pattern ID:** `nextjs_next-script-for-ga`
**Plugin:** `nextjs`

## What it does

Enforces the use of the `next/script` component when implementing Google Analytics in Next.js applications, instead of using regular `<script>` tags.

## Why is this bad?

Using regular `<script>` tags for Google Analytics can lead to several issues:
- Scripts may load in a blocking manner, impacting page performance
- No built-in optimization or loading strategies
- Lack of automatic resource handling that Next.js provides

## Examples

Examples of incorrect code for this rule:
jsx
`// Using regular script tag with GA source
<script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
// Using inline script for GA initialization
<script dangerouslySetInnerHTML={{
__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
`
}} />`
Examples of correct code for this rule:
jsx
`import Script from 'next/script'
// Using next/script for GA source
<Script
src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
strategy="lazyOnload"
/>
// Using next/script for GA initialization
<Script id="google-analytics">
{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
`}
</Script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/next-script-for-ga": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/next-script-for-ga": "error",
},
});`bash
`oxlint --deny nextjs/next-script-for-ga --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/next_script_for_ga.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/next-script-for-ga)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fnext-script-for-ga)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/next-script-for-ga.html)
- [oxc project](https://github.com/oxc-project/oxc)