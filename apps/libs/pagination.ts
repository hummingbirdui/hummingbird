import type { SitemapItem } from 'apps/sitemap';

const normalizePath = (path: string) => path.replace(/\/$/, '');

export const getDocPagination = (
  items: SitemapItem[],
  currentPath: string,
): { prev: SitemapItem | null; next: SitemapItem | null } => {
  let prev: SitemapItem | null = null;
  let next: SitemapItem | null = null;

  const currPath = normalizePath(currentPath);

  const parentIndex = items.findIndex((item) => normalizePath(item.path) === currPath);

  if (parentIndex !== -1) {
    prev = parentIndex > 0 ? items[parentIndex - 1] : null;
    next = parentIndex < items.length - 1 ? items[parentIndex + 1] : null;

    return { prev, next };
  }

  for (let i = 0; i < items.length; i++) {
    const parent = items[i];
    if (!parent.children) continue;

    const childIndex = parent.children.findIndex((child) => normalizePath(child.path) === currPath);

    if (childIndex === -1) continue;

    if (childIndex === 0) {
      prev = parent;
    } else {
      prev = parent.children[childIndex - 1];
    }

    if (childIndex < parent.children.length - 1) {
      next = parent.children[childIndex + 1];
    } else {
      next = i < items.length - 1 ? items[i + 1] : null;
    }

    return { prev, next };
  }

  return { prev, next };
};
