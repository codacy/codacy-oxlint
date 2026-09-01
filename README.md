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

Pattern IDs: `eslint_no-unused-vars`, `react_jsx-key`, `typescript_no-explicit-any`, etc.

## Configuration

oxlint supports the configuration files:
`.oxlintrc.json`,
`.oxlintrc.jsonc`,
`oxlint.config.json`,
`oxlint.config.jsonc`
or the UI Codacy patterns.

See [oxlint docs](https://oxc.rs/) for configuration details.

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