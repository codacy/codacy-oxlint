# No This Alias (typescript)

**Pattern ID:** `typescript_no-this-alias`
**Plugin:** `typescript`

## What it does

Disallow aliasing of `this`.

## Why is this bad?

Assigning a variable to `this` instead of properly using arrow lambdas may be a symptom of pre-ES2015 practices or not managing scope well.

## Examples

Examples of incorrect code for this rule:
js
`const self = this;
setTimeout(function () {
self.doWork();
});`
Examples of correct code for this rule:
js
`setTimeout(() => {
this.doWork();
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/no-this-alias": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/no-this-alias": "error",
},
});`bash
`oxlint --deny typescript/no-this-alias`

## Version

This rule was added in v0.0.7.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/no_this_alias.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/no-this-alias/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fno-this-alias)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html)
- [oxc project](https://github.com/oxc-project/oxc)