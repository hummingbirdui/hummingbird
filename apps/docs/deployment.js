/* eslint-disable no-undef */
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { loadEnv } from 'vite';
import { docVersions } from './deploy-config.js';
const {
  PUBLIC_STAGING_SITE_URL = 'https://staging.hbui.dev',
  PUBLIC_SITE_URL = 'https://hbui.dev',
} = loadEnv(process.env.NODE_ENV, process.cwd(), '');

const deployTargets = {
  production: {
    repo: 'https://github.com/hummingbirdui/hummingbird.git',
    branch: 'gh-pages',
    domain: PUBLIC_SITE_URL,
  },
  staging: {
    repo: 'https://github.com/hummingbirdui/staging.git',
    branch: 'gh-pages',
    domain: PUBLIC_STAGING_SITE_URL,
  },
};

function exec(command, options = {}) {
  console.log(`\n> ${command}`);
  try {
    return execSync(command, { stdio: 'inherit', ...options });
  } catch {
    throw new Error(`Command failed: ${command}`);
  }
}

function execQuiet(command) {
  try {
    return execSync(command, { encoding: 'utf8' }).trim();
  } catch {
    throw new Error(`Command failed: ${command}`);
  }
}

function getCurrentBranch() {
  return execQuiet('git rev-parse --abbrev-ref HEAD');
}

function hasUncommittedChanges() {
  const status = execQuiet('git status --porcelain');
  return status.length > 0;
}

function branchExists(branch) {
  try {
    execQuiet(`git rev-parse --verify ${branch}`);
    return true;
  } catch {
    return false;
  }
}

function getVersionFromBranch(branch) {
  const entry = Object.entries(docVersions).find(([b]) => b === branch);
  return entry ? { branch, ...entry[1] } : null;
}

function createCNAME(domain, buildPath) {
  const cnamePath = path.join(buildPath, 'CNAME');
  const hostname = new URL(domain).hostname;
  fs.writeFileSync(cnamePath, hostname);
  console.log(`✓ Created CNAME file with domain: ${hostname}`);
}

function deployVersion(targetBranch, environment) {
  console.log(`\n========================================`);
  console.log(`📦 Branch: ${targetBranch}`);
  console.log(`🌍 Environment: ${environment}`);
  console.log(`========================================`);

  if (!branchExists(targetBranch)) {
    console.error(`\n❌ Branch '${targetBranch}' does not exist`);
    process.exit(1);
  }

  const versionInfo = getVersionFromBranch(targetBranch);
  if (!versionInfo) {
    console.error(`\n❌ Branch '${targetBranch}' is not configured`);
    console.log('Available branches:', Object.keys(docVersions).join(', '));
    process.exit(1);
  }

  const target = deployTargets[environment];
  const currentBranch = getCurrentBranch();
  const needsCheckout = currentBranch !== targetBranch;

  try {
    if (needsCheckout) {
      console.log(`\n📌 Current branch: ${currentBranch}`);

      if (hasUncommittedChanges()) {
        console.log('💾 Stashing uncommitted changes...');
        exec('git stash');
      }

      console.log(`\n🔄 Checking out ${targetBranch}...`);
      exec(`git checkout ${targetBranch}`);

      console.log('📥 Pulling latest changes...');
      exec('git pull origin ' + targetBranch);
    }

    console.log('\n📦 Installing dependencies...');
    exec('pnpm install');

    console.log('\n🔨 Building...');
    const nodeEnv = environment === 'staging' ? 'staging' : 'production';
    exec(`NODE_ENV=${nodeEnv} pnpm run build`);

    console.log(`\n📝 Creating CNAME file...`);
    createCNAME(target.domain, 'dist');

    console.log(`\n🚀 Deploying...`);
    const destFlag = versionInfo.dest === '.' ? '' : `--dest ${versionInfo.dest}`;
    const repoFlag = `-r ${target.repo}`;
    const branchFlag = `-b ${target.branch}`;

    exec(`gh-pages -d dist ${repoFlag} ${branchFlag} ${destFlag} --add --nojekyll`);

    const deployUrl =
      versionInfo.base === '/' ? `${target.domain}` : `${target.domain}${versionInfo.base}`;

    console.log(`\n✅ Successfully deployed!`);
    console.log(`📍 Live at: ${deployUrl}`);
  } catch (error) {
    console.error(`\n❌ Deployment failed:`, error.message);
    process.exit(1);
  } finally {
    if (needsCheckout) {
      console.log(`\n🔄 Returning to ${currentBranch}...`);
      exec(`git checkout ${currentBranch}`);

      try {
        const stashList = execQuiet('git stash list');
        if (stashList) {
          console.log('📂 Restoring stashed changes...');
          exec('git stash pop');
        }
      } catch {
        // No stash to pop
      }
    }
  }

  console.log('\n========================================');
  console.log('🎉 Deployment complete!');
  console.log('========================================\n');
}

function deployAll(environment) {
  console.log(`\n🚀 Deploying all versions to ${environment}...\n`);

  const target = deployTargets[environment];

  console.log('Versions to deploy:\n');
  Object.keys(docVersions).forEach((branch) => {
    const info = getVersionFromBranch(branch);
    const url = info.base === '/' ? target.domain : `${target.domain}${info.base}`;
    console.log(`  ✓ ${branch} → ${url}`);
  });

  console.log('\n');

  for (const branch of Object.keys(docVersions)) {
    deployVersion(branch, environment);
  }

  console.log('\n========================================');
  console.log('✅ All versions deployed!');
  console.log('========================================\n');
}

function showHelp() {
  console.log(`
📚 Documentation Deployer

Usage:
  pnpm run deploy <options>
  pnpm run deploy:staging <options>

Options:
  --version <branch>    Deploy specific version (default: main)
  --all                 Deploy all configured versions
  --help                Show this help

Examples:
  pnpm run deploy                          # Deploy main to production
  pnpm run deploy --version docs-v2.0      # Deploy v2.0 to production
  pnpm run deploy --all                    # Deploy all to production

  pnpm run deploy:staging                  # Deploy main to staging
  pnpm run deploy:staging --version docs-v2.0
  pnpm run deploy:staging --all

Available versions:
${Object.entries(docVersions)
  .map(([branch, config]) => `  ${branch.padEnd(20)} → ${config.base}`)
  .join('\n')}
  `);
}

// Parse CLI arguments
const args = process.argv.slice(2);
const environment = args[0]; // 'production' or 'staging' passed from pnpm script

if (!environment || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

if (!deployTargets[environment]) {
  console.error(`❌ Invalid environment: ${environment}`);
  process.exit(1);
}

const restArgs = args.slice(1); // Remove environment arg

if (restArgs.includes('--all')) {
  deployAll(environment);
} else {
  let targetBranch = 'main'; // default

  const versionIndex = restArgs.indexOf('--version');
  if (versionIndex !== -1 && restArgs[versionIndex + 1]) {
    targetBranch = restArgs[versionIndex + 1];
  }

  deployVersion(targetBranch, environment);
}
