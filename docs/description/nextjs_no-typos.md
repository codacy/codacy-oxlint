# No Typos (nextjs)

**Pattern ID:** `nextjs_no-typos`
**Plugin:** `nextjs`

## What it does

Detects common typos in Next.js data fetching function names.

## Why is this bad?

Next.js will not call incorrectly named data fetching functions, causing pages to render without expected data.

## Examples

Examples of incorrect code for this rule:
javascript
`export default function Page() {
return <div></div>;
}
export async function getServurSideProps() {}`
Examples of correct code for this rule:
javascript
`export default function Page() {
return <div></div>;
}
export async function getServerSideProps() {}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-typos": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-typos": "error",
},
});`bash
`oxlint --deny nextjs/no-typos --nextjs-plugin`

## Version

This rule was added in v0.2.1.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_typos.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-typos)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-typos)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-typos.html)
- [oxc project](https://github.com/oxc-project/oxc)