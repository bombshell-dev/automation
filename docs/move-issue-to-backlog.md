# move-issue-to-backlog

Moves closed issues to the **Backlog** column in the `bombshell-dev` GitHub Project (V2).

## Inputs

None.

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `BOT_APP_ID` | Yes | GitHub App ID for authentication. |
| `BOT_PRIVATE_KEY` | Yes | GitHub App private key for authentication. |

## Usage

```yaml
name: Move issue to backlog

on:
  issues:
    types: [closed]

jobs:
  move-to-backlog:
    uses: bombshell-dev/automation/.github/workflows/move-issue-to-backlog.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```
