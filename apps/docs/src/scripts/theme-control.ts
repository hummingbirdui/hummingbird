type Theme = string;

const THEME_KEY = 'theme';
const SYSTEM_THEME = 'system';
export const THEMES = ['light', 'dark', 'luxury', 'retro', 'arctic', 'nature', 'ember', 'dracula', 'midnight'];

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const getStoredTheme = (): Theme => localStorage.getItem(THEME_KEY) ?? SYSTEM_THEME;

const resolveTheme = (theme: Theme): string => (theme === SYSTEM_THEME ? getSystemTheme() : theme);

const applyTheme = (theme: Theme) => {
  const resolved = resolveTheme(theme);
  const html = document.documentElement;

  html.classList.add('disable-transition');
  html.classList.remove(...THEMES);
  html.classList.add(resolved);
  requestAnimationFrame(() => html.classList.remove('disable-transition'));
};

const setTheme = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
};

const themeControlInit = () => {
  applyTheme(getStoredTheme());

  // sync theme when os preference changes (only in "system" mode)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() !== SYSTEM_THEME) return;
    applyTheme(SYSTEM_THEME);
  });

  // theme toggle button
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const item = event.target.closest<HTMLElement>('[data-theme]');
    if (!item?.dataset.theme) return;
    setTheme(item.dataset.theme);
  });
};

export default themeControlInit;
