# preview

Publishes preview packages to [pkg.pr.new](https://pkg.pr.new) and templates to StackBlitz for pull requests.

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `publish` | `string` | No | `"./packages/**"` | Glob for directories to publish to pkg.pr.new. |
| `template` | `string` | No | `"./examples/**"` | Glob for template directories to publish to StackBlitz. |

## Secrets

None.

## Usage

```yaml
name: Preview

on:
  pull_request:

jobs:
  preview:
    uses: bombshell-dev/automation/.github/workflows/preview.yml@main
```

### Custom paths

```yaml
jobs:
  preview:
    uses: bombshell-dev/automation/.github/workflows/preview.yml@main
    with:
      publish: "./lib/**"
      template: "./templates/**"
```

> **Note:** This workflow only runs for the `bombshell-dev` organization.
