# No Head Element (nextjs)

**Pattern ID:** `nextjs_no-head-element`
**Plugin:** `nextjs`

## What it does

Prevents the usage of the native `<head>` element inside a Next.js application.

## Why is this bad?

A `<head>` element can cause unexpected behavior in a Next.js application. Use Next.js' built-in `next/head` component instead.

## Examples

Examples of incorrect code for this rule:
jsx
`function Index() {
return (
<>
<head>
<title>My page title</title>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
</head>
</>
);
}
export default Index;`
Examples of correct code for this rule:
jsx
`import Head from "next/head";
function Index() {
return (
<>
<Head>
<title>My page title</title>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
</>
);
}
export default Index;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-head-element": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-head-element": "error",
},
});`bash
`oxlint --deny nextjs/no-head-element --nextjs-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_head_element.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-head-element)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-head-element)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-head-element.html)
- [oxc project](https://github.com/oxc-project/oxc)