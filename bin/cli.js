#!/usr/bin/env node
'use strict';

const { execFile } = require('child_process');
const { links, en, tr } = require('../src/data');
const pkg = require('../package.json');

const args = process.argv.slice(2);
const has = (...flags) => flags.some((f) => args.includes(f));

// Language: explicit flag wins, otherwise follow the terminal locale.
const envLang = process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || '';
const lang = has('--tr', '-tr') ? 'tr' : has('--en', '-en') ? 'en' : /^tr/i.test(envLang) ? 'tr' : 'en';
const d = lang === 'tr' ? tr : en;
const L = d.labels;

// ---------- tiny ANSI helpers (zero dependencies) ----------
const useColor = process.stdout.isTTY && !('NO_COLOR' in process.env) && process.env.TERM !== 'dumb';
const sgr = (open, close) => (s) => (useColor ? `\x1b[${open}m${s}\x1b[${close}m` : String(s));
const c = {
  bold: sgr(1, 22),
  dim: sgr(2, 22),
  italic: sgr(3, 23),
  cyan: sgr(36, 39),
  green: sgr(32, 39),
  yellow: sgr(33, 39),
  magenta: sgr(35, 39),
  gray: sgr(90, 39),
};
const link = (url, text = url) =>
  useColor ? `\x1b]8;;${url}\x07${c.cyan(text)}\x1b]8;;\x07` : text;
const visible = (s) => s.replace(/\x1b\][^\x07]*\x07/g, '').replace(/\x1b\[[0-9;]*m/g, '');

const width = Math.max(40, Math.min(process.stdout.columns || 80, 90) - 2);
const INDENT = '  ';

function wrap(text, indent = INDENT, firstIndent = indent) {
  const max = width - indent.length;
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && visible(line).length + 1 + visible(word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines.map((l, i) => (i === 0 ? firstIndent : indent) + l).join('\n');
}

const rule = () => c.gray('─'.repeat(width));
const heading = (title) => `\n${c.bold(c.magenta(title.toLocaleUpperCase(lang)))}\n`;
const bullet = (text) => wrap(text, INDENT + '  ', INDENT + c.green('• '));
const row = (left, right) => {
  const gap = width - INDENT.length - visible(left).length - visible(right).length;
  if (gap < 2) return `${INDENT}${left}\n${INDENT}${right}`;
  return INDENT + left + ' '.repeat(gap) + right;
};

function box(lines) {
  const inner = Math.max(...lines.map((l) => visible(l).length));
  const pad = (l) => l + ' '.repeat(inner - visible(l).length);
  return [
    c.cyan(`╭${'─'.repeat(inner + 4)}╮`),
    ...lines.map((l) => `${c.cyan('│')}  ${pad(l)}  ${c.cyan('│')}`),
    c.cyan(`╰${'─'.repeat(inner + 4)}╯`),
  ].join('\n');
}

// ---------- sections ----------
function header() {
  return box([
    c.bold(d.name),
    c.green(d.title),
    c.gray(d.location),
  ]);
}

function summary() {
  return heading(L.summary) + wrap(d.summary);
}

function highlights() {
  return heading(L.highlights) + d.highlights.map(bullet).join('\n');
}

function experience(full = true) {
  const items = d.experience.map((e) => {
    const top = row(c.bold(e.role), c.gray(e.date));
    const sub = INDENT + c.yellow(e.company) + c.gray(` · ${e.place}`);
    const body = full ? '\n' + e.bullets.map(bullet).join('\n') : '';
    return `${top}\n${sub}${body}`;
  });
  return heading(L.experience) + items.join('\n\n');
}

function projects() {
  const items = d.projects.map(
    (p) => `${row(c.bold(p.name) + c.gray(` · ${p.where}`), c.gray(p.date))}\n${wrap(p.text, INDENT + '  ')}`
  );
  return heading(L.projects) + items.join('\n\n');
}

function education() {
  const items = d.education.map(
    (e) => `${row(c.bold(e.degree), c.gray(e.date))}\n${INDENT}${c.yellow(e.school)}\n${INDENT}  ${c.dim(e.note)}`
  );
  return heading(L.education) + items.join('\n\n');
}

function skills() {
  const labelWidth = Math.max(...d.skills.map(([k]) => k.length)) + 2;
  const items = d.skills.map(([k, v]) =>
    wrap(v, INDENT + ' '.repeat(labelWidth), INDENT + c.green(k.padEnd(labelWidth)))
  );
  return heading(L.skills) + items.join('\n');
}

function contact() {
  const items = [
    ['Email', link(`mailto:${links.email}`, links.email)],
    [L.web, link(links.web)],
    ['GitHub', link(links.github)],
    ['LinkedIn', link(links.linkedin)],
    ['X', link(links.x)],
  ];
  return heading(L.contact) + items.map(([k, v]) => `${INDENT}${c.bold(k.padEnd(10))}${v}`).join('\n');
}

function footer() {
  return `\n${rule()}\n${INDENT}${c.dim(L.hint)}\n${INDENT}${c.dim(L.langHint)}`;
}

function help() {
  const name = pkg.name;
  const opts = [
    ['-a, --all', 'Full CV'],
    ['-e, --experience', 'Work experience'],
    ['-p, --projects', 'Independent products'],
    ['-d, --education', 'Education'],
    ['-s, --skills', 'Skills'],
    ['-c, --contact', 'Contact info'],
    ['-w, --web', 'Open harunsokullu.com'],
    ['-g, --github', 'Open GitHub profile'],
    ['-l, --linkedin', 'Open LinkedIn profile'],
    ['--tr / --en', 'Türkçe / English'],
    ['-v, --version', 'Show version'],
    ['-h, --help', 'Show this help'],
  ];
  return [
    `\n${c.bold(`npx ${name}`)} ${c.gray('[options]')}\n`,
    ...opts.map(([f, t]) => `${INDENT}${c.green(f.padEnd(20))}${t}`),
    `\n${INDENT}${c.gray('Also available as: npx harun · npx sokullu · npx suphero · npx harunsokullu')}\n`,
  ].join('\n');
}

function open(url) {
  const [cmd, cmdArgs] =
    process.platform === 'darwin'
      ? ['open', [url]]
      : process.platform === 'win32'
        ? ['cmd', ['/c', 'start', '', url]]
        : ['xdg-open', [url]];
  console.log(`\n${INDENT}${L.opening} ${link(url)}\n`);
  execFile(cmd, cmdArgs, () => {});
}

// ---------- main ----------
const print = (...parts) => console.log('\n' + parts.join('\n').replace(/^\n+/, '') + '\n');

if (has('--help', '-h')) console.log(help());
else if (has('--version', '-v')) console.log(pkg.version);
else if (has('--web', '-w')) open(links.web);
else if (has('--github', '-g')) open(links.github);
else if (has('--linkedin', '-l')) open(links.linkedin);
else if (has('--all', '-a'))
  print(header(), summary(), skills(), experience(), projects(), education(), contact(), footer());
else if (has('--experience', '-e')) print(experience());
else if (has('--projects', '-p')) print(projects());
else if (has('--education', '-d')) print(education());
else if (has('--skills', '-s')) print(skills());
else if (has('--contact', '-c')) print(contact());
else print(header(), summary(), highlights(), experience(false), contact(), footer());
