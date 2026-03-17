# mergebot

Posts a celebratory Discord message when a commit is pushed to a branch. Recognizes co-authors from `Co-authored-by` trailers.

> 🥳 **Merged!** user-a: [`commit message`](https://github.com/org/repo/commit/abc123)
> _With essential contributions from user-b & user-c! 💣_

## Inputs

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `EMOJIS` | `string` | No | `🎉,🥳,💣,💥,🫡,🙌,👏,🙏,🏆` | Comma-delimited set of emojis. One is picked at random per message. |
| `COAUTHOR_TEMPLATES` | `string` | No | _(see below)_ | JSON array of co-author recognition templates. Each must contain `<names>`. |

<details>
<summary>Default <code>COAUTHOR_TEMPLATES</code></summary>

```json
[
  "Thanks for the assist, <names>! 🙏",
  "<names> coming in clutch—thank you! 🙌",
  "<names> made it happen! 💪",
  "We couldn't have done it without <names>! 👏",
  "With essential contributions from <names>! 💣",
  "Teamwork makes the dream work… right <names>?! 🏆",
  "feat. <names>! 🫡"
]
```

</details>

## Secrets

| Name | Required | Description |
| --- | --- | --- |
| `DISCORD_WEBHOOK` | Yes | Discord webhook URL. Create one via Channel Settings > Integrations > Webhooks. |

## Usage

```yaml
name: mergebot

on:
  push:
    branches: [main]

jobs:
  mergebot:
    if: ${{ github.repository_owner == 'bombshell-dev' }}
    uses: bombshell-dev/automation/.github/workflows/mergebot.yml@main
    secrets:
      DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK_MERGEBOT }}
```

### Custom emojis

```yaml
jobs:
  mergebot:
    uses: bombshell-dev/automation/.github/workflows/mergebot.yml@main
    secrets:
      DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK_MERGEBOT }}
    with:
      EMOJIS: "🚀,✨,🔥"
```
