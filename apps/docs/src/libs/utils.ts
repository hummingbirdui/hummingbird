import { THEMES } from '@scripts/theme-control';

type Theme = (typeof THEMES)[number];

const getTheme = (): Theme => {
  const classes = document.documentElement.classList;
  for (const theme of THEMES) {
    if (classes.contains(theme)) {
      return theme;
    }
  }
  return 'light';
};

export const onThemeChange = (callback: (theme: Theme) => void) => {
  if (typeof window === 'undefined') return;

  const observer = new MutationObserver(() => {
    callback(getTheme());
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
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
