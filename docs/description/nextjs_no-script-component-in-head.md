# No Script Component In Head (nextjs)

**Pattern ID:** `nextjs_no-script-component-in-head`
**Plugin:** `nextjs`

## What it does

Prevent usage of `next/script` in `next/head` component.

## Why is this bad?

The `next/script` component should not be used in a `next/head` component. Instead move the `<Script />` component outside of `<Head>` instead.

## Examples

Examples of incorrect code for this rule:
jsx
`import Script from "next/script";
import Head from "next/head";
export default function Index() {
return (
<Head>
<title>Next.js</title>
<Script src="/my-script.js" />
</Head>
);
}`
Examples of correct code for this rule:
jsx
`import Script from "next/script";
import Head from "next/head";
export default function Index() {
return (
<>
<Head>
<title>Next.js</title>
</Head>
<Script src="/my-script.js" />
</>
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-script-component-in-head": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-script-component-in-head": "error",
},
});`bash
`oxlint --deny nextjs/no-script-component-in-head --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_script_component_in_head.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-script-component-in-head)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-script-component-in-head)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-script-component-in-head.html)
- [oxc project](https://github.com/oxc-project/oxc)