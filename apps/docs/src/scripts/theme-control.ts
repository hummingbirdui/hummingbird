import { themes } from '@libs/utils';

type Theme = 'dark' | 'light' | 'system';

const THEME_KEY = 'theme';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

//  helpers for managing theme state
const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT);
const getStoredTheme = (): Theme => (localStorage.getItem(THEME_KEY) as Theme) ?? (THEMES.SYSTEM as Theme);
const resolveTheme = (theme: Theme) => (theme === THEMES.SYSTEM ? getSystemTheme() : theme);

const applyTheme = (theme: Theme) => {
  const html = document.documentElement;
  const resolvedTheme = resolveTheme(theme);
  html.classList.add('disable-transition');
  html.classList.toggle('dark', resolvedTheme === THEMES.DARK);
  requestAnimationFrame(() => html.classList.remove('disable-transition'));
};

const toggleTheme = () => {
  const currentTheme = resolveTheme(getStoredTheme());
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
};

// Main theme control logic (for main themes like "default", "luxury", etc.)
const applyMainTheme = (themeName: string) => {
  const theme = themes.find((t) => t === themeName);
  if (!theme) return;

  document.documentElement.setAttribute('data-theme', theme);

  localStorage.setItem('main-theme', themeName);
};

// Initialize theme on page load and set up event listeners for theme changes
const themeControlInit = () => {
  const themeToggleButton = document.querySelector<HTMLButtonElement>('[data-theme-dropdown]');
  const themeDropdownItems = document.querySelectorAll<HTMLAnchorElement>('.dropdown-item[data-theme]');
  const savedMainTheme = localStorage.getItem('main-theme');

  if (!themeToggleButton || themeDropdownItems.length === 0) return;

  let activeItem: HTMLAnchorElement | null = null;

  // Initialize
  if (savedMainTheme) {
    applyMainTheme(savedMainTheme);

    activeItem = Array.from(themeDropdownItems).find((item) => item.dataset.theme === savedMainTheme) || null;

    if (activeItem) {
      activeItem.classList.add('active');
      themeToggleButton.textContent = activeItem.textContent || 'Default';
    }
  }

  // Events
  themeDropdownItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      if (activeItem) activeItem.classList.remove('active');

      item.classList.add('active');
      activeItem = item;

      const theme = item.dataset.theme!;
      const label = item.textContent || 'Default';

      applyMainTheme(theme);
      localStorage.setItem('main-theme', theme);

      themeToggleButton.textContent = label;
    });
  });

  applyTheme(getStoredTheme());
  // sync theme when os preference changes (only in "system" mode)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    if (getStoredTheme() !== THEMES.SYSTEM) return;
    applyTheme(THEMES.SYSTEM);
  });
  // theme toggle button
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const toggleBtn = event.target.closest('[data-theme-toggle-btn]');
    if (!toggleBtn) return;
    toggleTheme();
  });
};

export default themeControlInit;
