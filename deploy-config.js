import { execSync } from 'child_process';

export const docVersions = {
  main: { base: '/', dest: '.' },
  'v1.0': { base: '/v1.0', dest: 'v1.0' },
  'v3.0': { base: '/v3.0', dest: 'v3.0' },
};

function getCurrentBranch() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  } catch {
    return 'main';
  }
}

export function getBasePath(isDev) {
  if (isDev) return '/';

  const currentBranch = getCurrentBranch();
  if (docVersions[currentBranch]) {
    return docVersions[currentBranch].base;
  } else {
    return '/';
  }
}
