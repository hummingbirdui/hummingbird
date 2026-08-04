// Generates src/safelist.txt from every `@utility` name in src/**/*.css.
// Tailwind v4 only emits utilities whose class names appear in scanned
// sources, so the standalone dist/hummingbird.css build needs this file
// (referenced via `@source` in src/index.build.css) to include the full
// component library. Runs automatically as part of `build:styles`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');
const outFile = path.join(srcDir, 'safelist.txt');

const names = new Set();

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith('.css')) {
      const css = fs.readFileSync(full, 'utf8');
      for (const match of css.matchAll(/@utility\s+([A-Za-z0-9_-]+)/g)) {
        names.add(match[1]);
      }
    }
  }
};

walk(srcDir);

if (names.size === 0) {
  console.error('generate-safelist: no @utility declarations found in src/**/*.css');
  process.exit(1);
}

fs.writeFileSync(outFile, [...names].sort().join('\n') + '\n');
console.log(`generate-safelist: wrote ${names.size} utility names to ${path.relative(process.cwd(), outFile)}`);
