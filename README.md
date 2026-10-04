# Harun Sokullu — CV in your terminal

```sh
npx harunsokullu
# or
npx sokullu
npx suphero
```

| Flag | |
|---|---|
| `-a, --all` | Full CV |
| `-e, --experience` | Work experience |
| `-p, --projects` | Independent products |
| `-d, --education` | Education |
| `-s, --skills` | Skills |
| `-c, --contact` | Contact info |
| `-w, --web` / `-g, --github` / `-l, --linkedin` | Open in browser |
| `--tr` / `--en` | Türkçe / English (defaults to your terminal locale) |

Zero dependencies. Content lives in [`src/data.js`](src/data.js).

## Publishing

Pushing to `main` runs `.github/workflows/publish.yml`. It publishes every name
(`harunsokullu`, `sokullu`, `suphero`) whose current version is not on npm yet,
using npm trusted publishing (OIDC), so no token is stored anywhere.

To release, edit [`src/data.js`](src/data.js), commit, then bump the version and push:

```sh
npm version patch && git push --follow-tags
```

`npm version` bumps `package.json`, commits, and tags `vX.Y.Z`; use `minor` or `major`
instead of `patch` for bigger changes. The new version shows up on npm a few minutes
after the workflow finishes.

A push without a version bump runs the smoke test and skips publishing.

To stage a release for 2FA approval on npmjs.com instead of publishing it directly:

```sh
gh workflow run publish.yml -f stage=true
```
