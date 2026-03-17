# publish

Creates release pull requests or publishes packages to npm using [changesets](https://github.com/changesets/changesets).

When pending changesets exist, this workflow opens a release PR. When that PR is merged, it publishes the packages to npm.

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
