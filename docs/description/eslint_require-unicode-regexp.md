# Require Unicode Regexp (eslint)

**Pattern ID:** `eslint_require-unicode-regexp`
**Plugin:** `eslint`

## What it does

Enforce the use of `u` or `v` flag on regular expressions.

## Why is this bad?

RegExp `u` flag has two effects:
- Make the regular expression handling UTF-16 surrogate pairs correctly.
js
`/^[👍]$/.test("👍") //→ false
/^[👍]$/u.test("👍") //→ true`- Make the regular expression throwing syntax errors early as disabling [Annex B extensions](https://262.ecma-international.org/6.0/#sec-regular-expressions-patterns). Because of historical reason, JavaScript regular expressions are tolerant of syntax errors. For example, `/\w{1, 2/` is a syntax error, but JavaScript doesn’t throw the error. It matches strings such as `"a{1, 2"` instead. Such a recovering logic is defined in Annex B.
The RegExp `v` flag, introduced in ECMAScript 2024, is a superset of the `u` flag, and offers two more features:
- Unicode properties of strings
js
`const re = /^\p{RGI_Emoji}$/v;
// Match an emoji that consists of just 1 code point:
re.test("⚽"); // '\u26BD'
// → true ✅
// Match an emoji that consists of multiple code points:
re.test("👨🏾⚕️"); // '\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F'
// → true ✅`- Set notation It allows for set operations between character classes:
js
`const re = /[\p{White_Space}&&\p{ASCII}]/v;
re.test("\n"); // → true
re.test("\u2028"); // → false`

## Examples

Examples of incorrect code for this rule:
js
`const a = /aaa/;
const b = /bbb/gi;
const c = new RegExp("ccc");
const d = new RegExp("ddd", "gi");`
Examples of correct code for this rule:
js
`const a = /aaa/u;
const b = /bbb/giu;
const c = new RegExp("ccc", "u");
const d = new RegExp("ddd", "giu");
const e = /aaa/v;
const f = /bbb/giv;
const g = new RegExp("ccc", "v");
const h = new RegExp("ddd", "gv");
// This rule ignores RegExp calls if the flags could not be evaluated to a static value.
function i(flags) {
return new RegExp("eee", flags);
}`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"require-unicode-regexp": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"require-unicode-regexp": "error",
},
});`bash
`oxlint --deny require-unicode-regexp`

## Version

This rule was added in v1.63.0.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/require_unicode_regexp.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/require-unicode-regexp)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Frequire-unicode-regexp)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/require-unicode-regexp.html)
- [oxc project](https://github.com/oxc-project/oxc)