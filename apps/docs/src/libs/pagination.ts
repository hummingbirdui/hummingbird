import type { SitemapItem } from 'apps/sitemap';

const normalizePath = (path?: string) => (path ? path.replace(/\/$/, '') : '');

/**
 * Flattens the sitemap tree into an ordered list of leaf/navigable items.
 * - Items without a path are skipped (they're just grouping labels).
 * - Children are inlined in place of their parent when the parent has no path.
 * - Recursively handles any depth of nesting.
 */
const flattenItems = (items: SitemapItem[]): SitemapItem[] => {
  const result: SitemapItem[] = [];

  for (const item of items) {
    if (item.children?.length) {
      // If the parent itself has a path, include it before its children
      if (item.path) result.push(item);
      result.push(...flattenItems(item.children));
    } else if (item.path) {
      result.push(item);
    }
    // Items with no path and no children are silently skipped
  }

  return result;
};

export const getDocPagination = (
  items: SitemapItem[],
  currentPath: string,
): { prev: SitemapItem | null; next: SitemapItem | null } => {
  const currPath = normalizePath(currentPath);
  const flat = flattenItems(items);

  const index = flat.findIndex((item) => normalizePath(item.path) === currPath);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? flat[index - 1] : null,
    next: index < flat.length - 1 ? flat[index + 1] : null,
  };
};