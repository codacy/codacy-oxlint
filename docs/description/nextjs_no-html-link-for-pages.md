# No Html Link For Pages (nextjs)

**Pattern ID:** `nextjs_no-html-link-for-pages`
**Plugin:** `nextjs`

## What it does

Prevents the usage of `<a>` elements to navigate between Next.js pages.

## Why is this bad?

Using `<a>` elements for internal navigation in Next.js applications can cause:
- Full page reloads instead of client-side navigation
- Loss of application state
- Slower navigation performance
- Broken prefetching capabilities
Next.js provides the `<Link />` component from `next/link` for client-side navigation between pages, which provides better performance and user experience.

## Examples

Examples of incorrect code for this rule:
jsx
`function HomePage() {
return (
<div>
<a href="/about">About Us</a>
<a href="/contact">Contact</a>
</div>
);
}`
Examples of correct code for this rule:
jsx
`import Link from "next/link";
function HomePage() {
return (
<div>
<Link href="/about">About Us</Link>
<Link href="/contact">Contact</Link>
</div>
);
}`
External links are allowed:
jsx
`function HomePage() {
return (
<div>
<a href="https://example.com">External Link</a>
<a href="mailto:contact@example.com">Email</a>
<a href="tel:+1234567890">Phone</a>
</div>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-html-link-for-pages": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-html-link-for-pages": "error",
},
});`bash
`oxlint --deny nextjs/no-html-link-for-pages --nextjs-plugin`

## Version

This rule was added in v1.7.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_html_link_for_pages.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-html-link-for-pages)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-html-link-for-pages)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-html-link-for-pages.html)
- [oxc project](https://github.com/oxc-project/oxc)