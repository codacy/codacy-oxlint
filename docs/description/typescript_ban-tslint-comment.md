# Ban Tslint Comment (typescript)

**Pattern ID:** `typescript_ban-tslint-comment`
**Plugin:** `typescript`

## What it does

This rule disallows `tslint:<rule-flag>` comments.

## Why is this bad?

Useful when migrating from TSLint to ESLint. Once TSLint has been removed, this rule helps locate TSLint annotations

## Examples

Examples of incorrect code for this rule:
ts
`// tslint:disable-next-line
someCode();`
Examples of correct code for this rule:
ts
`someCode();`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"typescript/ban-tslint-comment": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"typescript/ban-tslint-comment": "error",
},
});`bash
`oxlint --deny typescript/ban-tslint-comment`

## Version

This rule was added in v0.2.9.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/typescript/ban_tslint_comment.rs)
- [Upstream rule docs](https://typescript-eslint.io/rules/ban-tslint-comment/)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=typescript%2Fban-tslint-comment)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html)
- [oxc project](https://github.com/oxc-project/oxc)