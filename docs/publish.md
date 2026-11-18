# publish

Creates release pull requests or publishes packages to npm using [changesets](https://github.com/changesets/changesets).

When pending changesets exist, this workflow opens a release PR. When that PR is merged, it publishes the packages to npm. Release commits and tags are pushed through the GitHub API, so they are signed and attributed to `bombshell-bot[bot]`.

## Requirements

This workflow uses [`changesets/action`](https://github.com/changesets/action) v2, which requires `@changesets/cli` v3 in the calling repository. See the [Changesets migration guide](https://changesets.dev/guide/migration) for how to upgrade.

Repositories still on `@changesets/cli` v2 should pin this workflow to `0c11c22d745695ae196865bca0d0cc177263bee9` until they migrate:

```yaml
uses: bombshell-dev/automation/.github/workflows/publish.yml@0c11c22d745695ae196865bca0d0cc177263bee9
```

## Inputs

None.

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `BOT_APP_ID` | Yes | GitHub App ID for authentication. |
| `BOT_PRIVATE_KEY` | Yes | GitHub App private key for authentication. |

## Usage

```yaml
name: Release

on:
  push:
    branches: [main]

jobs:
  publish:
    uses: bombshell-dev/automation/.github/workflows/publish.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```

> **Note:** This workflow only runs for the `bombshell-dev` organization. Commits and PRs are authored by `bombshell-bot[bot]`.
