# Max Lines (eslint)

**Pattern ID:** `eslint_max-lines`
**Plugin:** `eslint`

## What it does

Enforce a maximum number of lines per file.

## Why is this bad?

Some people consider large files a code smell. Large files tend to do a lot of things and can make it hard following what’s going. While there is not an objective maximum number of lines considered acceptable in a file, most people would agree it should not be in the thousands. Recommendations usually range from 100 to 500 lines.

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"max-lines": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"max-lines": "error",
},
});`bash
`oxlint --deny max-lines`

## Version

This rule was added in v0.2.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/max_lines.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/max-lines)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fmax-lines)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html)
- [oxc project](https://github.com/oxc-project/oxc)