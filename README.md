# Automation

Shared GitHub Actions for the `bombshell-dev` organization.

## Workflows

All workflows are [reusable](https://docs.github.com/en/actions/sharing-automations/reusing-workflows) and called via `workflow_call`.

| Workflow | Description |
| --- | --- |
| [mergebot](docs/mergebot.md) | Post celebratory Discord messages on merge, with co-author recognition |
| [run](docs/run.md) | Run package.json scripts in parallel via matrix |
| [format](docs/format.md) | Auto-format code on PRs and commit the result |
| [preview](docs/preview.md) | Publish preview packages to pkg.pr.new |
| [publish](docs/publish.md) | Create release PRs or publish to npm via changesets |
| [add-issue-to-project](docs/add-issue-to-project.md) | Add new issues to the GitHub Project with "Needs triage" status |
| [move-issue-to-backlog](docs/move-issue-to-backlog.md) | Move closed issues to "Backlog" in the GitHub Project |
| [detect-agent](docs/detect-agent.md) | Detect automated PR authors and label them |

## Acknowledgements

This repository borrows heavily from [`withastro/automation`](https://github.com/withastro/automation), published under the MIT License&mdash;Copyright (c) 2023 Astro.
