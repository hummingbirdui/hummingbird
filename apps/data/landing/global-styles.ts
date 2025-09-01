export interface StyleSystem {
  title: string;
  description: string;
  code: string;
}

export const globalStyles: StyleSystem[] = [
  {
    title: 'Global CSS Core',
    description:
      'A smart core built on CSS variables, giving you a logical and flexible foundation for effortless customization.',
    code: `.btn {
  --btn-color: var(--text-color-default);
  --btn-font-weight: var(--font-weight-semibold);
  --btn-bg: var(--background-color-highlight);

  color: var(--btn-color);
  font-weight: var(--btn-font-weight);
  background-color: var(--btn-bg);
}`,
  },
  {
    title: 'Centralized Customization',
    description:
      'Change a root variable and watch your entire UI update instantly. Total consistency, zero repetitive work.',
    code: `@theme {
  --text-color-default: var(--color-gray-800);
  --border-color-light: var(--color-gray-300);
  --background-color-highlight: var(--color-gray-100);
}`,
  },
  {
    title: 'Component-Level Overrides',
    description:
      'Override styles on any component with a single, clean declaration. No more fighting with specificity.',
    code: `.btn {
  --btn-color: var(--text-color-emphasis);
  --btn-border-color: var(--border-color-base);
  --btn-bg: var(--background-color-emphasis);
}`,
  },
];
