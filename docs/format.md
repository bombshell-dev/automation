# format

Auto-formats code on pull requests and commits the result. Runs a configurable `pnpm run` script, then commits any changes back to the PR branch.

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `command` | `string` | No | `"format"` | The `package.json` script to run via `pnpm run <command>`. |

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `BOT_APP_ID` | Yes | GitHub App ID for authentication. |
| `BOT_PRIVATE_KEY` | Yes | GitHub App private key for authentication. |

## Usage

```yaml
name: Format

on:
  pull_request:

jobs:
  format:
    uses: bombshell-dev/automation/.github/workflows/format.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```

### Custom script name

```yaml
jobs:
  format:
    uses: bombshell-dev/automation/.github/workflows/format.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
    with:
      command: "prettier"
```
