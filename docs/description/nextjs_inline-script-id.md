# Inline Script Id (nextjs)

**Pattern ID:** `nextjs_inline-script-id`
**Plugin:** `nextjs`

## What it does

Enforces that all `next/script` components with inline content or `dangerouslySetInnerHTML` must have an `id` prop.

## Why is this bad?

Next.js requires a unique `id` prop for inline scripts to properly deduplicate them during page renders. Without an `id`, the same inline script might be executed multiple times, leading to unexpected behavior or performance issues. This is particularly important for scripts that modify global state or perform one-time initializations.

## Examples

Examples of incorrect code for this rule:
javascript
`import Script from 'next/script';
export default function Page() {
return (
<Script>
{`console.log('Hello world');`}
</Script>
);
}
// Also incorrect with dangerouslySetInnerHTML
export default function Page() {
return (
<Script
dangerouslySetInnerHTML={{
__html: `console.log('Hello world');`
}}
/>
);
}`
Examples of correct code for this rule:
javascript
`import Script from 'next/script';
export default function Page() {
return (
<Script id="my-script">
{`console.log('Hello world');`}
</Script>
);
}
// Correct with dangerouslySetInnerHTML
export default function Page() {
return (
<Script
id="my-script"
dangerouslySetInnerHTML={{
__html: `console.log('Hello world');`
}}
/>
);
}
// No id required for external scripts
export default function Page() {
return (
<Script src="https://example.com/script.js" />
);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/inline-script-id": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/inline-script-id": "error",
},
});`bash
`oxlint --deny nextjs/inline-script-id --nextjs-plugin`

## Version

This rule was added in v0.2.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/inline_script_id.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/inline-script-id)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Finline-script-id)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/inline-script-id.html)
- [oxc project](https://github.com/oxc-project/oxc)