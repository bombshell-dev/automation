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

## tsdown

This workflow provides a standardized build process for TypeScript libraries using tsdown. It includes:

- Automatic building on push and pull requests
- Node.js setup with caching
- Automatic tsdown configuration generation
- Build artifact uploads

### Usage

Add the following to your repository's workflow:

```yml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    uses: bombshell-dev/automation/.github/workflows/tsdown.yml@main
```

The workflow will automatically:
1. Generate a standard tsdown configuration
2. Install necessary dependencies (tsdown and @types/node)
3. Build your TypeScript project
4. Upload the build artifacts

The generated configuration includes:
- ESM output format
- TypeScript declaration file generation
- Source maps
- Minification
- Node.js platform targeting
- Tree shaking optimization

If you need to customize the configuration, you can create your own `tsdown.config.ts` file in your project root, and the workflow will use that instead of generating one.

## Acknowledgements

This repository borrows heavily from [`withastro/automation`](https://github.com/withastro/automation), published under the MIT License&mdash;Copyright (c) 2023 Astro.
