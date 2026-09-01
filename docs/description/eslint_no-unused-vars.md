# No Unused Vars (eslint)

**Pattern ID:** `eslint_no-unused-vars`
**Plugin:** `eslint`

## What it does

Disallows variable declarations, imports, or type declarations that are not used in code.

## Why is this bad?

Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
ts
`// `b` is unused; this indicates a bug.
function add(a: number, b: number) {
return a;
}
console.log(add(1, 2));`
A variable `foo` is considered to be used if any of the following are true:
- It is called (`foo()`) or constructed (`new foo()`)
- It is read (`var bar = foo`)
- It is passed into a function or constructor as an argument (`doSomething(foo)`)
- It is read inside of a function that is passed to another function (`doSomething(function() { foo(); })`)
- It is exported (`export const foo = 42`)
- It is used as an operand to TypeScript's `typeof` operator (`const bar: typeof foo = 4`)
A variable is not considered to be used if it is only ever declared (`var foo = 5`) or assigned to (`foo = 7`).

## Examples

Examples of incorrect code for this rule:
javascript
`/* no-unused-vars: "error" */
/* if you have `some_unused_var` defined as a global in .oxlintrc.json */
// It checks variables you have defined as global
some_unused_var = 42;
var x;
// Write-only variables are not considered as used.
var y = 10;
y = 5;
// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;
// By default, unused arguments cause warnings.
(function (foo) {
return 5;
})();
// Unused recursive functions also cause warnings.
function fact(n) {
if (n < 2) return 1;
return n * fact(n - 1);
}
// When a function definition destructures an array, unused entries from
// the array also cause warnings.
function getY([x, y]) {
return y;
}`ts
`type A = Array<A>;
enum Color {
Red,
Green,
Blue,
}`
Examples of correct code for this rule:
js
`/* no-unused-vars: "error" */
var x = 10;
alert(x);
// foo is considered used here
myFunc(
function foo() {
// ...
}.bind(this),
);
(function (foo) {
return foo;
})();
var myFunc;
myFunc = setTimeout(function () {
// myFunc is considered used
myFunc();
}, 50);
// Only the second argument from the destructured array is used.
function getY([, y]) {
return y;
}`ts
`export const x = 1;
const y = 1;
export { y };
type A = Record<string, unknown>;
type B<T> = T extends Record<infer K, any> ? K : never;
const x = "foo" as B<A>;
console.log(x);`
Examples of incorrect code for `/* exported variableName */` operation:
js
`/* exported global_var */
// Not respected, use ES modules instead.
var global_var = 42;`

## References

- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html)
- [oxc project](https://github.com/oxc-project/oxc)