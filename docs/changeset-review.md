# changeset-review

Uses [GitHub Models](https://github.blog/ai-and-ml/generative-ai/automate-your-project-with-github-models-in-actions/) to analyze PR diffs for semver impact and review changesets. Posts a review as `bombshell-bot[bot]`.

- Classifies changes as `none`, `patch`, `minor`, or `major`
- If no changeset is needed, exits silently
- If a changeset is missing, comments with a suggested changeset following [changeset guidelines](https://docs.astro.build/en/contribute/#changesets)
- If a changeset exists and looks good, exits silently
- If a changeset exists but could be improved, comments with a suggested revision
- Skips PRs that only modify `.changeset/` files
- Idempotent: exits if `bombshell-bot` has already reviewed the PR
- Results are cached per PR + commit SHA to avoid redundant analysis

## Inputs

| Name    | Type     | Required | Default               | Description                             |
| ------- | -------- | -------- | --------------------- | --------------------------------------- |
| `MODEL` | `string` | No       | `openai/gpt-4.1-mini` | GitHub Models model ID for LLM analysis |

## Outputs

| Name              | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `review_event`    | The review event type: `COMMENT` or `none`                     |
| `semver_impact`   | The detected semver impact: `none`, `patch`, `minor`, `major`  |
| `needs_changeset` | Whether the PR needs a changeset (`true`/`false`)              |

## Secrets

| Name              | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `BOT_APP_ID`      | The GitHub App ID for authenticating as bombshell-bot   |
| `BOT_PRIVATE_KEY` | The GitHub App Private Key for authenticating           |

## Permissions

The calling workflow must grant `models: read` permission for the GitHub Models API.

## Usage

```yaml
name: Changeset review

on:
  pull_request_target:
    types: [opened, synchronize]

jobs:
  changeset:
    uses: bombshell-dev/automation/.github/workflows/changeset-review.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```

### Custom model

```yaml
jobs:
  changeset:
    uses: bombshell-dev/automation/.github/workflows/changeset-review.yml@main
    with:
      MODEL: "openai/gpt-4.1"
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}
```

### Using outputs

```yaml
jobs:
  changeset:
    uses: bombshell-dev/automation/.github/workflows/changeset-review.yml@main
    secrets:
      BOT_APP_ID: ${{ secrets.BOT_APP_ID }}
      BOT_PRIVATE_KEY: ${{ secrets.BOT_PRIVATE_KEY }}

  block:
    needs: changeset
    if: needs.changeset.outputs.needs_changeset == 'true' && needs.changeset.outputs.review_event == 'COMMENT'
    runs-on: ubuntu-latest
    steps:
      - run: echo "PR needs a changeset (semver impact: ${{ needs.changeset.outputs.semver_impact }})"
```
