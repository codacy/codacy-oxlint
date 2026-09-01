# Prefer Regex Literals (eslint)

**Pattern ID:** `eslint_prefer-regex-literals`
**Plugin:** `eslint`

## What it does

Disallow use of the RegExp constructor in favor of regular expression literals.

## Why is this bad?

There are two ways to create a regular expression:
- Regular expression literals, e.g., `/abc/u`.
- The `RegExp` constructor function, e.g., `new RegExp("abc", "u")` or `RegExp("abc", "u")`.
The constructor function is particularly useful when you want to dynamically generate the pattern, because it takes string arguments.
When using the constructor function with string literals, don't forget that the string escaping rules still apply. If you want to put a backslash in the pattern, you need to escape it in the string literal. Thus, the following are equivalent:
js
`new RegExp("^\\d\\.$");
/^\d\.$/;
// matches "0.", "1.", "2." ... "9."`
In the above example, the regular expression literal is easier to read and reason about. Also, it's a common mistake to omit the extra `\` in the string literal, which would produce a completely different regular expression:
js
`new RegExp("^\d\.$");
// equivalent to /^d.$/, matches "d1", "d2", "da", "db" ...`
When a regular expression is known in advance, it is considered a best practice to avoid the string literal notation on top of the regular expression notation, and use regular expression literals instead of the constructor function.

## Examples

Examples of incorrect code for this rule:
js
`new RegExp("abc");
new RegExp("abc", "u");
RegExp("abc");
RegExp("abc", "u");
new RegExp("\\d\\d\\.\\d\\d\\.\\d\\d\\d\\d");
RegExp(`^\\d\\.$`);
new RegExp(String.raw`^\d\.$`);`
Examples of correct code for this rule:
js
`/abc/;
/abc/u;
/\d\d\.\d\d\.\d\d\d\d/;
/^\d\.$/;
// RegExp constructor is allowed for dynamically generated regular expressions
new RegExp(pattern);
RegExp("abc", flags);
new RegExp(prefix + "abc");
RegExp(`${prefix}abc`);
new RegExp(String.raw`^\d\. ${suffix}`);`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"prefer-regex-literals": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"prefer-regex-literals": "error",
},
});`bash
`oxlint --deny prefer-regex-literals`

## Version

This rule was added in v1.64.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/prefer_regex_literals.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/prefer-regex-literals)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fprefer-regex-literals)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-regex-literals.html)
- [oxc project](https://github.com/oxc-project/oxc)