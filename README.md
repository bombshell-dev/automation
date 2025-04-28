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

## ts down

This workflow verifies that your TypeScript project builds successfully. It runs on push and pull requests to ensure your project's build process is working correctly.

### Usage

Add the following to your repository's workflow:

```yml
name: Verify Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify:
    uses: bombshell-dev/automation/.github/workflows/tsdown.yml@main
```

The workflow will:
1. Set up Node.js and pnpm
2. Install project dependencies
3. Run the project's build script to verify it builds successfully

This ensures your project's build process is working correctly before merging changes.

## Acknowledgements

This repository borrows heavily from [`withastro/automation`](https://github.com/withastro/automation), published under the MIT License&mdash;Copyright (c) 2023 Astro.
