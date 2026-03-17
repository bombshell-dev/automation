# add-issue-to-project

Automatically adds newly created issues to the `bombshell-dev` GitHub Project (V2) and sets their status to **Needs triage**.

## Inputs

None.

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `BOT_APP_ID` | Yes | GitHub App ID for authentication. |
| `BOT_PRIVATE_KEY` | Yes | GitHub App private key for authentication. |

## Usage

```yaml
name: Add issue to project

on:
  issues:
    types: [opened]

jobs:
  add-to-project:
    uses: bombshell-dev/automation/.github/workflows/add-issue-to-project.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```
