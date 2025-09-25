import { createHighlighter } from 'shiki';

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export function getHighlighterSingleton() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['sass', 'css', 'html', 'js', 'ts', 'json', 'bash', 'python', 'vue', 'astro', 'svelte'],
    });
  }
  return highlighterPromise;
}
