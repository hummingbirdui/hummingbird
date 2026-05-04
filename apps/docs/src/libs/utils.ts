export const themes = ['default', 'luxury', 'retro', 'arctic', 'nature', 'ember', 'dracula', 'midnight'];

type Theme = (typeof themes)[number];

const getMainTheme = (): Theme => {
  return document.documentElement.dataset.theme || 'default';
};
const getTheme = (): Theme => {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

export const onThemeChange = (callback: (mainTheme: Theme, isDark: boolean) => void) => {
  if (typeof window === 'undefined') return;

  const observer = new MutationObserver(() => {
    callback(getMainTheme(), getTheme() === 'dark');
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'class'],
  });
};

export const getColor = (variableName: string, opacity?: number): string => {
  if (typeof window === 'undefined') return '';

  const name = variableName.startsWith('--') ? variableName : `--${variableName}`;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  if (!value) return '';
  if (opacity === undefined) return value;

  const alpha = Math.max(0, Math.min(1, opacity));
  return `color-mix(in srgb, ${value} ${alpha * 100}%, transparent)`;
};
