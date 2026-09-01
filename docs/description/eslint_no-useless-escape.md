# No Useless Escape (eslint)

**Pattern ID:** `eslint_no-useless-escape`
**Plugin:** `eslint`

## What it does

Disallow unnecessary escape characters.

## Why is this bad?

Escaping characters unnecessarily has no effect on the behavior of strings or regexes, and can make code harder to read and understand by adding unnecessary complexity. This applies to string literals, template literals, and regular expressions.

## Examples

Examples of incorrect code for this rule:
javascript
`"\'";
'\"';
"\#";
"\e";
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
/[\[]/;
/[a-z\-]/;`
Examples of correct code for this rule:
javascript
`"\"";
'\'';
"\x12";
"\u00a9";
"\371";
"xs\u2111";
`\``;
`\${${foo}}`;
`$\{${foo}}`;
/\\/g;
/\t/g;
/\w\$\*\^\./;
/[[]/;
/[\]]/;
/[a-z-]/;`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-useless-escape": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-useless-escape": "error",
},
});`bash
`oxlint --deny no-useless-escape`

## Version

This rule was added in v0.0.5.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_useless_escape.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-useless-escape)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-useless-escape)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html)
- [oxc project](https://github.com/oxc-project/oxc)