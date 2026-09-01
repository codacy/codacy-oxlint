# No Anonymous Default Export (unicorn)

**Pattern ID:** `unicorn_no-anonymous-default-export`
**Plugin:** `unicorn`

## What it does

Disallows anonymous functions and classes as default exports.

## Why is this bad?

Naming default exports improves searchability and ensures consistent identifiers for a module’s default export in both declaration and import.

## Examples

Examples of incorrect code for this rule:
javascript
`export default class {}
export default function () {}
export default () => {};
module.exports = class {};
module.exports = function () {};
module.exports = () => {};`
Examples of correct code for this rule:
javascript
`export default class Foo {}
export default function foo () {}
const foo = () => {};
export default foo;
module.exports = class Foo {};
module.exports = function foo () {};
const foo = () => {};
module.exports = foo;`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"unicorn/no-anonymous-default-export": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"unicorn/no-anonymous-default-export": "error",
},
});`bash
`oxlint --deny unicorn/no-anonymous-default-export`

## Version

This rule was added in v0.3.3.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/unicorn/no_anonymous_default_export.rs)
- [Upstream rule docs](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=unicorn%2Fno-anonymous-default-export)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html)
- [oxc project](https://github.com/oxc-project/oxc)