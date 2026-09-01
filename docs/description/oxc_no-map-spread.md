# No Map Spread (oxc)

**Pattern ID:** `oxc_no-map-spread`
**Plugin:** `oxc`

## What it does

Disallow the use of object or array spreads in `Array.prototype.map` and `Array.prototype.flatMap` to add properties/elements to array items.
This rule only seeks to report cases where the spread operator is used to merge objects or arrays, not where it is used to copy them.

## Why is this bad?

Spreading is commonly used to add properties to objects in an array or to combine several objects together. Unfortunately, spreads incur a re-allocation for a new object, plus `O(n)` memory copies.
ts
`// each object in scores gets shallow-copied. Since `scores` is never
// reused, spreading is inefficient.
function getDisplayData() {
const scores: Array<{ username: string; score: number }> = getScores();
const displayData = scores.map((score) => ({ ...score, rank: getRank(score) }));
return displayData;
}`
Unless you expect objects in the mapped array to be mutated later, it is better to use `Object.assign`.
ts
`// `score` is mutated in place and is more performant.
function getDisplayData() {
const scores: Array<{ username: string; score: number }> = getScores();
const displayData = scores.map((score) => Object.assign(score, { rank: getRank(score) }));
return displayData;
}`

## Examples

Examples of incorrect code for this rule:
js
`const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
const arr2 = arr.map((obj) => ({ ...obj, b: obj.a * 2 }));`
Examples of correct code for this rule:
ts
`const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
arr.map((obj) => Object.assign(obj, { b: obj.a * 2 }));
// instance properties are ignored
class UsersDb {
#users = [];
public get users() {
// clone users, providing caller with their own deep(ish) copy.
return this.#users.map((user) => ({ ...user }));
}
}`tsx
`function UsersTable({ users }) {
const usersWithRoles = users.map((user) => ({ ...user, role: getRole(user) }));
return (
<table>
{usersWithRoles.map((user) => (
<tr>
<td>{user.name}</td>
<td>{user.role}</td>
</tr>
))}
<tfoot>
<tr>
{/* re-read of users */}
<td>Total users: {users.length}</td>
</tr>
</tfoot>
</table>
);
}`

## Configuration

This rule accepts a configurat

## References

- [ECMA262 - Object spread evaluation semantics](https://262.ecma-international.org/15.0/index.html#sec-runtime-semantics-propertydefinitionevaluation)
- JSPerf - `concat` vs array spread performance
## Configuration
This rule accepts a configurat
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html)
- [oxc project](https://github.com/oxc-project/oxc)