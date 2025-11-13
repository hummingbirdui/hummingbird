interface Config {
  title: string;
  description: string;
  currentVersion: string;
  docVersion: string;
  algolia: {
    appId: string;
    apiKey: string;
    indexName: string;
  };
}

const config: Config = {
  title: 'Hummingbird',
  description: 'The most sensible component system for Tailwind.',
  currentVersion: 'v1.0.0-beta',
  docVersion: 'v2.0',
  algolia: {
    appId: '9WZCQJVTTL',
    apiKey: 'b2804af869f12be7d3c1f06e61e48e0d',
    indexName: 'hummingbird_docs',
  },
};

export function getConfig(): Config {
  return config;
}

export function getVersionedPath() {
  return `/${getConfig().docVersion}`;
}
