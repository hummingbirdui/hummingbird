export interface StyleSystem {
  title: string;
  description: string;
  code: string;
}

export const styleSystems: StyleSystem[] = [
  {
    title: 'Global CSS Core',
    description:
      'A smart core built on CSS variables, giving you a logical and flexible foundation for effortless customization.',
    code: `.table {
  color: var(--table-color);
  background-color: var(--table-bg);
  border: 1px solid var(--table-border-color);
  border-radius: 0.25rem;
}`,
  },
  {
    title: 'Centralized Customization',
    description:
      'Change a root variable and watch your entire UI update instantly. Total consistency, zero repetitive work.',
    code: `.table {
  color: var(--table-color);
  background-color: var(--table-bg);
  border: 1px solid var(--table-border-color);
  border-radius: 0.25rem;
}`,
  },
  {
    title: 'Component-Level Overrides',
    description:
      'Override styles on any component with a single, clean declaration. No more fighting with specificity.',
    code: `.table {
  color: var(--table-color);
  background-color: var(--table-bg);
  border: 1px solid var(--table-border-color);
  border-radius: 0.25rem;
}`,
  },
];
