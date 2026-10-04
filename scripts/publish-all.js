#!/usr/bin/env node
'use strict';

// Publishes the same package under every name in NAMES.
// Names whose current version is already on npm are skipped, so it is safe to
// run on every push; bump the version in package.json to release.
// With --stage, versions are staged (`npm stage publish`) and go live only after
// approval with 2FA on npmjs.com or `npm stage approve <id>`.
// Usage: npm run publish:all            (real publish)
//        npm run publish:all -- --stage
//        npm run publish:all -- --dry-run
//        npm run publish:all -- --otp=123456

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const NAMES = ['harunsokullu', 'sokullu', 'suphero'];
const REGISTRY = 'https://registry.npmjs.org/';

const root = path.resolve(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const stage = process.argv.includes('--stage');
const extra = process.argv.slice(2).filter((a) => a !== '--stage');

function isPublished(name, version) {
  try {
    execFileSync('npm', ['view', `${name}@${version}`, 'version', '--registry', REGISTRY], { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

for (const name of NAMES) {
  if (isPublished(name, pkg.version)) {
    console.log(`\n• ${name}@${pkg.version} already published, skipping`);
    continue;
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), `npx-cv-${name}-`));
  for (const entry of [...pkg.files, 'README.md', 'LICENSE']) {
    const src = path.join(root, entry);
    if (fs.existsSync(src)) fs.cpSync(src, path.join(dir, entry), { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ ...pkg, name }, null, 2) + '\n');

  console.log(`\n▶ ${name}@${pkg.version}`);
  try {
    const cmd = stage ? ['stage', 'publish', '.'] : ['publish'];
    execFileSync('npm', [...cmd, '--registry', REGISTRY, '--access', 'public', ...extra], {
      cwd: dir,
      stdio: 'inherit',
    });
  } catch {
    console.error(`✖ ${name} failed`);
    process.exitCode = 1;
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
