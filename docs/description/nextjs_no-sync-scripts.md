# No Sync Scripts (nextjs)

**Pattern ID:** `nextjs_no-sync-scripts`
**Plugin:** `nextjs`

## What it does

Prevent the use of synchronous `<script>` tags in Next.js applications. Require any `<script>` tag with a `src` attribute to also have either the `async` or `defer` attribute.

## Why is this bad?

Synchronous scripts can block the page rendering and negatively impact performance. In Next.js applications, it's recommended to use `async` or `defer` attributes to load scripts asynchronously, which improves page load times and user experience.

## Examples

Examples of incorrect code for this rule:
javascript
`// Synchronous script without async/defer
<script src="https://example.com/script.js"></script>
// Dynamic src without async/defer
<script src={dynamicSrc}></script>`
Examples of correct code for this rule:
javascript
`// Script with async attribute
<script src="https://example.com/script.js" async></script>
// Script with defer attribute
<script src="https://example.com/script.js" defer></script>
// Script with spread props (allowed as it might include async/defer)
<script {...props}></script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-sync-scripts": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-sync-scripts": "error",
},
});`bash
`oxlint --deny nextjs/no-sync-scripts --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_sync_scripts.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-sync-scripts)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-sync-scripts)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-sync-scripts.html)
- [oxc project](https://github.com/oxc-project/oxc)