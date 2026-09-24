# codacy-oxlint

Codacy wrapper for [oxlint](https://github.com/oxc-project/oxc) — the fast JavaScript/TypeScript linter.

## Quick start

**Test the tool:**
```sh
docker build -t codacy-oxlint .
docker run -it -v ${PWD}:/src -v ${PWD}/.codacyrc:/.codacyrc codacy-oxlint
```
**Updating oxlint documentation:**
1. Run `npm run generate-docs` to update rule documentation

**Updating oxlint version:**
1. Update `.tool_version` with the new oxlint version
2. Run `npm run generate-docs` to update rule documentation
3. Open PR in codacy-oxlint

## Supported plugins

ESLint, TypeScript, React, Jest, Vitest, JSDoc, JSX a11y, Import, Next.js, Node, Promise, Vue, Unicorn, and OXC.

## Configuration

oxlint supports the configuration files:
`.oxlintrc.json`,
`.oxlintrc.jsonc`,
`oxlint.config.json`,
`oxlint.config.jsonc`
or the UI Codacy patterns.

See [oxlint docs](https://oxc.rs/) for configuration details.

## Agent Playbook: Updating This Repository End-to-End

This section is written for an AI coding agent (or a human) tasked with updating this repo — most
commonly bumping the wrapped [oxlint](https://github.com/oxc-project/oxc) version, but also Node
base image / CircleCI orb bumps. Follow it top to bottom.

### 1. What this repository is

This is a **Codacy engine**: a small Node.js/TypeScript wrapper with no build step and no npm
dependency on the tool itself — `src/index.ts` reads Codacy's `.codacyrc` (`src/codacyrc.ts`), then
`src/engineImpl.ts` shells out to the `oxlint` binary (`spawnSync("oxlint", ["--format", "json", ...])`)
and translates its JSON diagnostics into Codacy `Issue` lines on stdout. There's no `codacy-seed`
package and no compiled `dist/` — both `src/index.ts` and `docs-generator/docs-generator.ts` run
directly via Node's `--experimental-strip-types` flag (see `entrypoint.sh` and the `package.json`
scripts). `tsconfig.json` has `noEmit: true`; it exists only so `npx tsc --noEmit` can type-check.

The `docs/` directory **is** machine-consumed configuration, not just documentation:

- `docs/patterns.json` — every oxlint rule Codacy knows about ("patterns": `<plugin>_<rule>`, e.g.
  `eslint_no-unused-vars`), with a Codacy category/level and `enabled: false` for all of them (rules
  are opt-in; Codacy's UI/`.codacyrc` decides what's actually enabled per project). Also carries the
  oxlint version string. Generated file, do not hand-edit.
- `docs/description/description.json` + `docs/description/<patternId>.md` — human-readable
  titles/descriptions per pattern, scraped from `oxc.rs`. Generated files, do not hand-edit.
- `docs/multiple-tests/{all-patterns,with-config-file}/{patterns.xml,results.xml,src/}` — fixtures
  used by `codacy-plugins-test`'s "multiple" DockerTest mode to validate real lint output against
  real source files.

All three generated artifacts come from `docs-generator/docs-generator.ts` (run via
`npm run generate-docs`), which:
1. Runs `oxlint --rules` **using whatever `oxlint` binary is on `PATH`** to get the full rule list
   as Markdown — this means the generator needs the *target* oxlint version installed locally
   first (see step 1 below), not just bumped in `.tool_version`.
2. Parses that Markdown table into `{plugin, rule, category, level, enabled}` entries
   (`CATEGORY_MAPPING`/`PLUGIN_ALIASES` in this file control the plugin→Codacy category mapping —
   check these if a bump adds a brand-new plugin oxlint didn't have before).
3. Fetches each rule's doc page from `https://oxc.rs/docs/guide/usage/linter/rules/<plugin>/<rule>.html`
   (5 requests in parallel, 5s timeout each) — this needs **network access**, and a slow/unreachable
   `oxc.rs` will silently produce thin descriptions rather than fail loudly (see step 4 below).

### 2. Files that encode versions — check all of these on every update

| File | What it controls | What to check |
|---|---|---|
| `.tool_version` | The **single source of truth** for the oxlint version — read by the `Dockerfile` (`npm install -g oxlint@"${VERSION}"`) and by `docs-generator.ts`'s `getOxlintVersion()` (written into `docs/patterns.json`'s `"version"` field) | Bump to the target version. There is no `package.json` dependency on `oxlint` and no lockfile to regenerate — this file is the only pin. |
| `Dockerfile` → `FROM node:lts-alpine3.24` | Node runtime the whole engine runs on | Only bump if asked explicitly or if the new oxlint release's `engines.node` requires it — don't bump opportunistically. |
| `.circleci/config.yml` → `codacy/base` and `codacy/plugins-test` orbs | Shared CircleCI steps and the `codacy-plugins-test` runner (`run_multiple_tests: true`) | Check orb versions only if asked to update CI tooling itself; not tied to oxlint version bumps. |

This repo is new (first version merged via PR #1, a handful of follow-up fixes since) — there is no
prior "version bump" commit to pattern-match against yet. Expect the first few bumps to be purely
mechanical (`.tool_version` + regenerated `docs/`), and to become a precedent for the next agent:
consider looking at `git log --oneline` for whatever bump commits *do* exist by the time you read
this.

### 3. Step-by-step update procedure

1. **Install the target oxlint version locally** so the doc generator can query it directly:
   `npm install -g oxlint@<new-version>` (matches what the `Dockerfile` does) — then confirm with
   `oxlint --version`.
2. **Bump `.tool_version`** to the new version string (no `v` prefix, e.g. `1.85.0`).
3. **Regenerate the docs**: `npm run generate-docs`. This needs network access to `oxc.rs`. Review
   the diff in `docs/patterns.json` (new/removed/renamed pattern IDs — a plugin rename or new plugin
   shows up here first), `docs/description/description.json`, and the per-rule `.md` files.
4. **Sanity-check the description scrape**: if `oxc.rs` was flaky, some `docs/description/*.md` files
   will fall back to the generic "See the documentation for more details." blurb even though
   `description.json`'s entry looks fine — grep for that string post-regeneration
   (`grep -rl "See the documentation for more details" docs/description/`) and re-run
   `npm run generate-docs` if too many hit it (a handful is normal for genuinely thin upstream docs).
5. **Type-check**: `npx tsc --noEmit` (no dedicated npm script for this; `noEmit: true` in
   `tsconfig.json` is deliberate — this only catches type errors, it does not build anything).
6. **Build the Docker image**: `docker build -t codacy-oxlint .`.
7. **Run `codacy-plugins-test` locally** before pushing — clone
   https://github.com/codacy/codacy-plugins-test and run its "multiple" DockerTest mode against your
   local image tag, exercising both fixtures under `docs/multiple-tests/`. Update the relevant
   `results.xml` if oxlint's message text or line numbers for those exact rules legitimately changed
   between versions (`all-patterns` covers a constant-reassignment, duplicate-key, and `debugger`
   check; `with-config-file` covers a repo-provided `.oxlintrc.json` being picked up correctly).
8. **Iterate on failures**, re-running only the relevant command after each fix.
9. **Commit** the `.tool_version` bump together with the regenerated `docs/` files (and any fixture
   updates) in one change.
10. **Push and open a PR.**
11. **Poll the PR's real CI checks until they all pass — local validation is NOT the finish line.**
    `.circleci/config.yml` runs `codacy/checkout_and_version` → `publish_docker_local` (build +
    save the image) → `plugins_test` (`codacy_plugins_test/run` with `run_multiple_tests: true`) →
    (master only) `codacy/publish_docker` → `codacy/tag_version`. After every push, run
    `gh pr checks <pr-url>` and keep re-polling (short sleep while any check is `pending`) until all
    finish. If a check fails, fetch its actual log (CircleCI, not a guess), find the true root
    cause, fix it, push again (never `--no-verify`, never force-push), and re-poll. Only stop
    iterating when every check passes, or you hit a genuine product/infra decision that needs a
    human — explain it in the PR rather than guessing.

### 4. Common failure modes and fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| `docs-generator` throws "Failed to run oxlint --rules" | The target oxlint version isn't installed locally yet, or an old `oxlint` on `PATH` doesn't match `.tool_version` | Run `npm install -g oxlint@<version>` for the exact target version first, then re-run `npm run generate-docs`; confirm with `oxlint --version`. |
| A rule's `.md` file is just "See the documentation for more details." | `oxc.rs` request timed out (5s) or returned a page shape the scraper's `<article>`/`<main>` regex couldn't match | Re-run `npm run generate-docs` (transient network flakiness is common); if it persists for that rule specifically, check the rule's actual page at `https://oxc.rs/docs/guide/usage/linter/rules/<plugin>/<rule>.html` for a structural change and adjust the scraping regexes in `docs-generator/docs-generator.ts` if needed. |
| `multiple` DockerTest fails on `all-patterns` or `with-config-file` | oxlint's diagnostic message text, severity, or line/column for one of the exact rules those fixtures exercise changed upstream | Confirm the new output is correct against oxlint's own changelog/release notes, then update that fixture's `results.xml` to match. |
| A brand-new plugin appears in `docs/patterns.json` mapped to a generic `CodeStyle`/`Warning` default | `CATEGORY_MAPPING` in `docs-generator/docs-generator.ts` doesn't have an entry for the new oxlint rule category yet | Add the new category to `CATEGORY_MAPPING` with an appropriate Codacy category/level, then regenerate. |

### 5. Definition of done

- `.tool_version` bumped to the target oxlint version.
- `docs/patterns.json`, `docs/description/description.json`, and `docs/description/*.md`
  regenerated via `npm run generate-docs` against the *actually-installed* target version, with any
  new/renamed/removed patterns reviewed and any thin-description fallbacks re-checked.
- `npx tsc --noEmit` passes.
- Docker image builds successfully (`docker build -t codacy-oxlint .`).
- `codacy-plugins-test`'s multiple-pattern DockerTest passes locally against the freshly built image
  for both `docs/multiple-tests/` fixtures; `results.xml` updated if output legitimately changed.
- **After pushing and opening/updating the PR, every CI check on it is green.** Poll
  `gh pr checks <pr-url>` and iterate on any failure (fetch the real CI log, fix, push, re-poll)
  until all pass — a passing local build is not sufficient, since the CI environment's toolchain and
  network access can differ from your local one.

## What is Codacy

[Codacy](https://www.codacy.com/) is an Automated Code Review Tool that monitors your technical debt, helps you improve your code quality, teaches best practices to your developers, and helps you save time in Code Reviews.

### Among Codacy’s features

-   Identify new Static Analysis issues
-   Commit and Pull Request Analysis with GitHub, BitBucket/Stash, GitLab (and also direct git repositories)
-   Auto-comments on Commits and Pull Requests
-   Integrations with Slack, HipChat, Jira, YouTrack
-   Track issues in Code Style, Security, Error Proneness, Performance, Unused Code and other categories

Codacy also helps keep track of Code Coverage, Code Duplication, and Code Complexity.

Codacy supports PHP, Python, Ruby, Java, JavaScript, and Scala, among others.

### Free for Open Source

Codacy is free for Open Source projects.