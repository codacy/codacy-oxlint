# No Iterator (eslint)

**Pattern ID:** `eslint_no-iterator`
**Plugin:** `eslint`

## What it does

Disallow the use of the `__iterator__` property.

## Why is this bad?

The `__iterator__` property was a SpiderMonkey extension to JavaScript that could be used to create custom iterators that are compatible with JavaScript’s for in and for each constructs. However, this property is now obsolete, so it should not be used. Here’s an example of how this used to work:
js
`Foo.prototype.__iterator__ = function () {
return new FooIterator(this);
};`

## Examples

Examples of incorrect code for this rule:
javascript
`Foo.prototype.__iterator__ = function () {
return new FooIterator(this);
};
foo.__iterator__ = function () {};
foo["__iterator__"] = function () {};`
Examples of correct code for this rule:
js
`const __iterator__ = 42; // not using the __iterator__ property
Foo.prototype[Symbol.iterator] = function () {
return new FooIterator(this);
};`

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-iterator": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-iterator": "error",
},
});`bash
`oxlint --deny no-iterator`

## Version

This rule was added in v0.2.15.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_iterator.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-iterator)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-iterator)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-iterator.html)
- [oxc project](https://github.com/oxc-project/oxc)