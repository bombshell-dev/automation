# preview

Publishes preview packages or deploys preview sites for pull requests. Automatically detects the preview type based on repo contents.

- **pkg.pr.new** — publishes packages to [pkg.pr.new](https://pkg.pr.new) and templates to StackBlitz (repos without wrangler config)
- **cloudflare** — deploys preview versions to Cloudflare Workers (repos with `wrangler.jsonc`, `wrangler.toml`, or `wrangler.json`)

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `string` | No | `"auto"` | Preview type: `"pkg.pr.new"`, `"cloudflare"`, or `"auto"` to detect. |
| `publish` | `string` | No | `"./packages/**"` | Glob for directories to publish to pkg.pr.new. |
| `template` | `string` | No | `"./examples/**"` | Glob for template directories to publish to StackBlitz. |

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | For `cloudflare` type | Cloudflare API token with Workers edit permissions. |
| `CLOUDFLARE_ACCOUNT_ID` | For `cloudflare` type | Cloudflare account ID. |

## Usage

### Node packages (auto-detected)

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

### Cloudflare sites (auto-detected)

```yaml
name: Preview

on:
  pull_request:

jobs:
  preview:
    uses: bombshell-dev/automation/.github/workflows/preview.yml@main
    secrets: inherit
```

All `wrangler.jsonc`, `wrangler.toml`, and `wrangler.json` files in the repo are discovered and deployed as separate preview versions.

> **Note:** This workflow only runs for the `bombshell-dev` organization.
