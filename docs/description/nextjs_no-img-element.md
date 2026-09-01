# No Img Element (nextjs)

**Pattern ID:** `nextjs_no-img-element`
**Plugin:** `nextjs`

## What it does

Prevent the usage of the `<img>` element due to slower [LCP](https://nextjs.org/learn/seo/lcp) and higher bandwidth.

## Why is this bad?

`<img>` elements are not optimized for performance and can result in slower LCP and higher bandwidth. Using `<Image />` from `next/image` will automatically optimize images and serve them as static assets.

## Examples

Examples of incorrect code for this rule:
javascript
`export function MyComponent() {
return (
<div>
<img src="/test.png" alt="Test picture" />
</div>
);
}`
Examples of correct code for this rule:
javascript
`import Image from "next/image";
import testImage from "./test.png";
export function MyComponent() {
return (
<div>
<Image src={testImage} alt="Test picture" />
</div>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-img-element": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-img-element": "error",
},
});`bash
`oxlint --deny nextjs/no-img-element --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_img_element.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-img-element)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-img-element)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-img-element.html)
- [oxc project](https://github.com/oxc-project/oxc)