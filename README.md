# Automation

Shared GitHub Actions for the `bombshell-dev` organization.

## mergebot

This workflow posts a celebratory message in a Discord channel of your choice for each commit. For example:

> 🥳 Merged! user-a: commit (#001)
> With essential contributions from user-b and user-c! 💣

### Usage
```yml
name: mergebot

on:
  push:
    branches: [main]

jobs:
  mergebot:
    if: ${{ github.repository_owner == 'bombshell-dev' }}
    uses: bombshell-dev/automation/mergebot.yml@main
    secrets:
      DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK_MERGEBOT }}
```

## Acknowledgements

This repository borrows heavily from [`withastro/automation`](https://github.com/withastro/automation), published under the MIT License&mdash;Copyright (c) 2023 Astro.
