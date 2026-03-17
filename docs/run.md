# run

Runs one or more `package.json` scripts in parallel using a matrix strategy. Useful for lint, test, and type-check jobs.

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `commands` | `string` | Yes | &mdash; | JSON array of script names, e.g. `'["lint","test","types"]'` |

## Secrets

None.

## Usage

```yaml
name: CI

on:
  pull_request:

jobs:
  check:
    uses: bombshell-dev/automation/.github/workflows/run.yml@main
    with:
      commands: '["lint","test","types"]'
```

Each command runs as a separate matrix job, so they execute in parallel.
