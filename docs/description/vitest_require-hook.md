# Require Hook (vitest)

**Pattern ID:** `vitest_require-hook`
**Plugin:** `vitest`

## What it does

This rule flags any expression that is either at the toplevel of a test file or directly within the body of a `describe`, except for the following:
- `import` statements
- `const` variables
- `let` declarations, and initializations to `null` or `undefined`
- Classes
- Types
- Calls to the standard Jest globals

## Why is this bad?

Having setup and teardown code outside of hooks can lead to unpredictable test behavior. Code that runs at the top level executes when the test file is loaded, not when tests run, which can cause issues with test isolation and make tests dependent on execution order. Using proper hooks like `beforeEach`, `beforeAll`, `afterEach`, and `afterAll` ensures that setup and teardown code runs at the correct time and maintains test isolation.

## Examples

Examples of incorrect code for this rule:
javascript
`import { database, isCity } from "../database";
import { Logger } from "../../../src/Logger";
import { loadCities } from "../api";
jest.mock("../api");
const initializeCityDatabase = () => {
database.addCity("Vienna");
database.addCity("San Juan");
database.addCity("Wellington");
};
const clearCityDatabase = () => {
database.clear();
};
initializeCityDatabase();
test("that persists cities", () => {
expect(database.cities.length).toHaveLength(3);
});
test("city database has Vienna", () => {
expect(isCity("Vienna")).toBeTruthy();
});
test("city database has San Juan", () => {
expect(isCity("San Juan")).toBeTruthy();
});
describe("when loading cities from the api", () => {
let consoleWarnSpy = jest.spyOn(console, "warn");
loadCities.mockResolvedValue(["Wellington", "London"]);
it("does not duplicate cities", async () => {
await database.loadCities();
expect(database.cities).toHaveLength(4);
});
});
clearCityDatabase();`
Examples of correct code for this rule:
javascript
`import { database, isCity } from "../database";
import { Logger } from "../../../src/Logger";
import { loadCities } from "../api";
jest.mock("../api");
const initializeCityDatabase = () => {
database.addCity("Vienna");
database.addCity("San Juan");
database.addCity("Wellington");
};
const clearCityDatabase = () => {
database.clear();
};
beforeEach(() => {
initializeCityDatabase();
});
test("that persists cities", () => {
expect(database.cities.length).toHaveLength(3);
});
test("city database has Vienna", () => {
expect(isCity("Vienna")).toBeTruthy();
});
test("city database has San Juan", () => {
expect(isCity("San Juan")).toBeTruthy();
});
describe("when loading cities from the api", () => {
let consoleWarnSpy;
beforeEach(() => {
consoleWarnSpy = jest.spyOn(console, "warn");
loadCities.mockResolvedValue(["Wellington", "London"]);
});
it("does not duplicate cities", async () => {
await database.loadCities();
expect(database.cities).toHaveLength(4);
});
});
afterEach(() => {
clearCityDatabase();
});`

## Configuration

This rule accepts a configuration object with the following properties:

## How to use

To enable this rule using the config file or in the CLI, you can use:
Config (.oxlintrc.json)Config (oxlint.config.ts)CLIjson
`{
"plugins": ["vitest"],
"rules": {
"vitest/require-hook": "error"
}
}`ts
`import { defineConfig } from "oxlint";
export default defineConfig({
plugins: ["vitest"],
rules: {
"vitest/require-hook": "error",
},
});`bash
`oxlint --deny vitest/require-hook --vitest-plugin`

## Version

This rule was added in v0.3.2.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/17ae11cd9c00fcb8d16779d30f317f659f0f2e47/crates/oxc_linter/src/rules/vitest/require_hook.rs)
- [Upstream rule docs](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
- [Open rule in Oxc Playground](https://playground.oxc.rs/?lintRules=vitest%2Frequire-hook)
- [oxlint rule reference](https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-hook.html)
- [oxc project](https://github.com/oxc-project/oxc)