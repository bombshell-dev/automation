# detect-agent

Detects automated (bot/agent) PR authors using [`voight-kampff-test`](https://www.npmx.dev/package/voight-kampff-test) which powers [AgentScan](https://agentscan.netlify.app/). Analyzes public GitHub activity to classify accounts as `organic`, `mixed`, or `automation`.

- `[bot]` accounts are labeled immediately without analysis
- Organization members and collaborators are bypassed by default
- Regular accounts are analyzed and, if flagged, labeled and commented on with a breakdown of signals
- Results are cached per PR to avoid redundant scans

## Inputs

| Name             | Type      | Required | Default       | Description                                                   |
| ---------------- | --------- | -------- | ------------- | ------------------------------------------------------------- |
| `LABEL`          | `string`  | No       | `"automated"` | Label to apply when the PR author is classified as automated. |
| `BYPASS_MEMBERS` | `boolean` | No       | `true`        | Skip scanning for org members and collaborators.              |

## Outputs

| Name             | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `classification` | The classification result: `organic`, `mixed`, or `automation`    |
| `score`          | The raw score from voight-kampff-test                             |
| `is_agent`       | Whether the PR author is classified as automated (`true`/`false`) |

## Secrets

None beyond the default `github.token`.

## Usage

```yaml
name: Detect agent

on:
  pull_request_target:
    types: [opened]

jobs:
  detect:
    uses: bombshell-dev/automation/.github/workflows/detect-agent.yml@main
```

### With backfill support

Scan new PRs automatically and backfill all open PRs on demand via `workflow_dispatch`.

```yaml
name: Detect agent

on:
  pull_request_target:
    types: [opened]
  workflow_dispatch: {}

jobs:
  detect:
    if: github.event_name != 'workflow_dispatch'
    uses: bombshell-dev/automation/.github/workflows/detect-agent.yml@main

  backfill:
    if: github.event_name == 'workflow_dispatch'
    uses: bombshell-dev/automation/.github/workflows/detect-agent-backfill.yml@main
```

### Custom label

```yaml
jobs:
  detect:
    uses: bombshell-dev/automation/.github/workflows/detect-agent.yml@main
    with:
      LABEL: "bot"
```

### Using outputs

```yaml
jobs:
  detect:
    uses: bombshell-dev/automation/.github/workflows/detect-agent.yml@main

  review:
    needs: detect
    if: needs.detect.outputs.is_agent != 'true'
    runs-on: ubuntu-latest
    steps:
      - run: echo "PR is from a human (${{ needs.detect.outputs.classification }})"
```
