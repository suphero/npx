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

To release: bump the version and push.

```sh
npm version patch
git push --follow-tags
```

A push without a version bump runs the smoke test and skips publishing.
