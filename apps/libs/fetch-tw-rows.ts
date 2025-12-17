import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const CACHE_DIR = path.resolve('.astro-cache/tw');
const ONE_DAY = 1000 * 60 * 60 * 24;

type CacheEntry = {
  timestamp: number;
  data: string[][];
};

function getCachePath(key: string) {
  const hash = crypto.createHash('sha1').update(key).digest('hex');
  return path.join(CACHE_DIR, `${hash}.json`);
}

export async function fetchTwRows(url: string): Promise<string[][]> {
  try {
    const parsedUrl = new URL(url);
    const cachePath = getCachePath(parsedUrl.href);

    try {
      const cached = JSON.parse(await fs.readFile(cachePath, 'utf8')) as CacheEntry;

      if (Date.now() - cached.timestamp < ONE_DAY) {
        return cached.data;
      }
    } catch {}

    const res = await fetch(parsedUrl.href);

    if (!res.ok) {
      console.warn(`[fetchTwRows] Fetch failed: ${res.status} ${parsedUrl.href}`);
      return [];
    }

    const text = await res.text();
    const match = text.match(/rows=\{\[(.*?)\]\}/s);

    if (!match) {
      console.warn('[fetchTwRows] rows content not found');
      return [];
    }

    const rowsSource = `[${match[1]}]`;
    const data = Function(`"use strict"; return (${rowsSource})`)();

    try {
      await fs.mkdir(CACHE_DIR, { recursive: true });
      await fs.writeFile(cachePath, JSON.stringify({ timestamp: Date.now(), data }, null, 2));
    } catch {}

    return data;
  } catch (err) {
    console.warn('[fetchTwRows] Ignored error:', err);
    return [];
  }
}
