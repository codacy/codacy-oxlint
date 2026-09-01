# No Unwanted Polyfillio (nextjs)

**Pattern ID:** `nextjs_no-unwanted-polyfillio`
**Plugin:** `nextjs`

## What it does

Prevent use of unsafe polyfill.io domains and duplicate polyfills.

## Why is this bad?

Security Risk: The domains `cdn.polyfill.io` and `polyfill.io` were compromised in a supply chain attack in 2024, where the domain was acquired by a malicious actor and began injecting harmful code into websites. Over 380,000+ websites were affected. These domains should not be used under any circumstances.
Performance Issue: For safe alternatives like `cdnjs.cloudflare.com/polyfill/`, including polyfills already shipped with Next.js unnecessarily increases page weight which can affect loading performance.

## Examples

Examples of incorrect code for this rule:
javascript
`// Security risk - compromised domain
<script src='https://cdn.polyfill.io/v2/polyfill.min.js'></script>
<script src='https://polyfill.io/v3/polyfill.min.js'></script>
// Duplicate polyfills
<script src='https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=Array.prototype.copyWithin'></script>
<script src='https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=WeakSet%2CPromise'></script>`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["nextjs"],
"rules": {
"nextjs/no-unwanted-polyfillio": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["nextjs"],
rules: {
"nextjs/no-unwanted-polyfillio": "error",
},
});`bash
`oxlint --deny nextjs/no-unwanted-polyfillio --nextjs-plugin`

## Version

This rule was added in v0.2.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/nextjs/no_unwanted_polyfillio.rs)
- [Upstream rule docs](https://nextjs.org/docs/messages/no-unwanted-polyfillio)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=nextjs%2Fno-unwanted-polyfillio)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.html)
- [oxc project](https://github.com/oxc-project/oxc)