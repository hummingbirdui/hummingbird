/* eslint-disable no-undef */

import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

(async () => {
  try {
    const ROOT = process.cwd();
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
    const version = String(pkg.version || '').trim();
    if (!/^\d+\.\d+\.\d+(-.+)?$/.test(version)) {
      throw new Error(`Invalid or missing semver version in package.json: "${version}"`);
    }

    const [major] = version.split('.');
    const majorTag = `v${major}.0.0`; // e.g. v1.0.0

    // --- Build Astro for the versioned subpath ---
    const REPO = 'hummingbird';
    const SITE_URL = 'https://hummingbirdui.github.io/hummingbird';
    const BASE_PATH = `/${REPO}/${majorTag}/`; // -> /hummingbird/v1.0.0/

    // Build (Astro outputs to ./build by default)
    execSync(`cross-env SITE_URL=${SITE_URL} BASE_PATH=${BASE_PATH} astro build`, {
      stdio: 'inherit',
    });

    // Confirm build output
    const sourceDir = path.join(ROOT, 'build'); // <- keep Astro default
    if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
      throw new Error('Astro build output not found at ./build. Did the build complete?');
    }

    // --- Stage to live/ ---
    const liveRoot = path.join(ROOT, 'live');
    const destDir = path.join(liveRoot, majorTag);
    await fse.ensureDir(liveRoot);
    await fse.writeFile(path.join(liveRoot, '.nojekyll'), ''); // disable Jekyll

    await fse.emptyDir(destDir);
    await fse.copy(sourceDir, destDir, { overwrite: true, recursive: true });
    await fse.writeJson(path.join(destDir, 'version.json'), { version }, { spaces: 2 });

    // --- Redirect-only index.html to newest major ---
    await generateRedirectIndex(liveRoot);

    console.log(`✅ Built for ${BASE_PATH} and staged at live/${majorTag}`);
    console.log(`🔗 Live URL: ${SITE_URL}/${majorTag}/`);
  } catch (err) {
    console.error('❌ create-live failed:', err.message);
    process.exit(1);
  }
})();

async function generateRedirectIndex(liveRoot) {
  const entries = await fs.promises.readdir(liveRoot, { withFileTypes: true });
  const versionDirs = entries.filter((e) => e.isDirectory() && /^v\d+\.0\.0$/.test(e.name)).map((e) => e.name);

  if (!versionDirs.length) {
    await fs.promises.writeFile(
      path.join(liveRoot, 'index.html'),
      '<!doctype html><meta charset="utf-8"><title>No builds yet</title><p>No builds available.</p>',
      'utf8',
    );
    return;
  }

  // Sort by major descending: v10.0.0 > v9.0.0 > v8.0.0
  versionDirs.sort((a, b) => parseInt(b.slice(1), 10) - parseInt(a.slice(1), 10));
  const latest = versionDirs[0];

  const html = `<!doctype html>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta http-equiv="refresh" content="0; url=./${latest}/">
<p>Redirecting to <a href="./${latest}/">${latest}</a>…</p>`;
  await fs.promises.writeFile(path.join(liveRoot, 'index.html'), html, 'utf8');
}
