# No Fallthrough (eslint)

**Pattern ID:** `eslint_no-fallthrough`
**Plugin:** `eslint`

## What it does

Disallow fallthrough of `case` statements
This rule is aimed at eliminating unintentional fallthrough of one case to the other. As such, it flags any fallthrough scenarios that are not marked by a comment.

## Why is this bad?

The switch statement in JavaScript is one of the more error-prone constructs of the language thanks in part to the ability to “fall through” from one case to the next. For example:
js
`switch (foo) {
case 1:
doSomething();
case 2:
doSomethingElse();
}`
In this example, if `foo` is `1`, then execution will flow through both cases, as the first falls through to the second. You can prevent this by using `break`, as in this example:
js
`switch (foo) {
case 1:
doSomething();
break;
case 2:
doSomethingElse();
}`
That works fine when you don’t want a fallthrough, but what if the fallthrough is intentional, there is no way to indicate that in the language. It’s considered a best practice to always indicate when a fallthrough is intentional using a comment which matches the `/falls?\s?through/i`` regular expression but isn’t a directive:
js
`switch (foo) {
case 1:
doSomething();
// falls through
case 2:
doSomethingElse();
}
switch (foo) {
case 1:
doSomething();
// fall through
case 2:
doSomethingElse();
}
switch (foo) {
case 1:
doSomething();
// fallsthrough
case 2:
doSomethingElse();
}
switch (foo) {
case 1: {
doSomething();
// falls through
}
case 2: {
doSomethingElse();
}
}`
In this example, there is no confusion as to the expected behavior. It is clear that the first case is meant to fall through to the second case.

## Examples

Examples of incorrect code for this rule:
js
`switch (foo) {
case 1:
doSomething();
case 2:
doSomething();
}`
Examples of correct code for this rule:
js
`switch (foo) {
case 1:
doSomething();
break;
case 2:
doSomething();
}
function bar(foo) {
switch (foo) {
case 1:
doSomething();
return;
case 2:
doSomething();
}
}
switch (foo) {
case 1:
doSomething();
throw new Error("Boo!");
case 2:
doSomething();
}
switch (foo) {
case 1:
case 2:
doSomething();
}
switch (foo) {
case 1:
case 2:
doSomething();
}
switch (foo) {
case 1:
doSomething();
// falls through
case 2:
doSomething();
}
switch (foo) {
case 1: {
doSomething();
// falls through
}
case 2: {
doSomethingElse();
}
}`
Note that the last case statement in these examples does not cause a warning because there is nothing to fall through into.

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"rules": {
"no-fallthrough": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
rules: {
"no-fallthrough": "error",
},
});`bash
`oxlint --deny no-fallthrough`

## Version

This rule was added in v0.0.14.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/eslint/no_fallthrough.rs)
- [Upstream rule docs](https://eslint.org/docs/latest/rules/no-fallthrough)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=eslint%2Fno-fallthrough)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html)
- [oxc project](https://github.com/oxc-project/oxc)