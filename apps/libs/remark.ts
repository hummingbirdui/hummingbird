import { visit } from 'unist-util-visit';
import type { Node } from 'unist';
import type { VFile } from 'vfile';

// Add base path to internal URLs
function addBasePath(url: string | null | undefined, base: string): string | null | undefined {
  // Skip if not an internal path
  if (!url || !url.startsWith('/') || url.startsWith('//')) {
    return url;
  }

  // If base is root, return as-is
  if (!base || base === '/') {
    return url;
  }

  // Remove trailing slash from base and prepend to URL
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${cleanBase}${url}`;
}

// Replace base paths in text (for frontmatter)
function replaceBasePathInText(text: unknown, base: string): unknown {
  if (typeof text !== 'string') return text;

  // Match markdown links: [text](/path)
  return text.replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (match, linkText, url) => {
    return `[${linkText}](${addBasePath(url, base)})`;
  });
}

// Replace base paths in frontmatter recursively
function replaceInFrontmatter(record: unknown, base: string): unknown {
  if (!record || typeof record !== 'object') return record;

  // record is an object at this point
  const obj = record as Record<string, unknown>;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      obj[key] = replaceBasePathInText(value, base) as string;
    } else if (Array.isArray(value)) {
      obj[key] = value.map((arrayValue) => {
        if (typeof arrayValue === 'string') {
          return replaceBasePathInText(arrayValue, base) as string;
        } else if (typeof arrayValue === 'object' && arrayValue !== null) {
          return replaceInFrontmatter(arrayValue, base);
        }
        return arrayValue;
      });
    } else if (typeof value === 'object' && value !== null) {
      obj[key] = replaceInFrontmatter(value, base);
    }
  }
  return obj;
}

// Check if file has frontmatter
function containsFrontmatter(data: unknown): boolean {
  return data != null && typeof data === 'object' && 'frontmatter' in (data as Record<string, unknown>);
}

// Types for MDX/Markdown nodes we care about (minimal)
type AnyNode = Node & {
  type?: string;
  url?: string;
  attributes?: any[];
  [k: string]: any;
};

// Main remark plugin
export function remarkBasePath(base = '/') {
  return function remarkBasePathPlugin(ast: Node, file: VFile & { data?: any }) {
    console.log(`🔧 remarkBasePath processing with base: "${base}"`);

    // Handle frontmatter
    if (containsFrontmatter(file?.data?.astro)) {
      replaceInFrontmatter(file.data.astro.frontmatter, base);
    }

    // Visit and transform nodes
    visit(ast as AnyNode, (node: AnyNode) => {
      // Handle link nodes
      if (node.type === 'link' || node.type === 'definition') {
        if (node.url) {
          const oldUrl = node.url;
          node.url = addBasePath(node.url, base) as string;
          if (oldUrl !== node.url) {
            console.log(`  ✓ Link: ${oldUrl} → ${node.url}`);
          }
        }
      }

      // Handle image nodes
      if (node.type === 'image') {
        if (node.url) {
          const oldUrl = node.url;
          node.url = addBasePath(node.url, base) as string;
          if (oldUrl !== node.url) {
            console.log(`  ✓ Image: ${oldUrl} → ${node.url}`);
          }
        }
      }

      // Handle MDX JSX elements (components in MDX)
      if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        if (node.attributes && Array.isArray(node.attributes)) {
          node.attributes = node.attributes.map((attr: any) => {
            if (
              attr.type === 'mdxJsxAttribute' &&
              (attr.name === 'href' || attr.name === 'src') &&
              typeof attr.value === 'string'
            ) {
              const oldValue = attr.value;
              attr.value = addBasePath(attr.value, base) as string;
              if (oldValue !== attr.value) {
                console.log(`  ✓ JSX ${attr.name}: ${oldValue} → ${attr.value}`);
              }
            }
            return attr;
          });
        }
      }
    });
  };
}
