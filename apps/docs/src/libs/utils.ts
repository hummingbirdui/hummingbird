export const onThemeChange = (callback: (theme: 'light' | 'dark') => void) => {
  if (typeof window === 'undefined') return;

  const getTheme = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  callback(getTheme());

  const observer = new MutationObserver(() => {
    callback(getTheme());
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    callback(getTheme());
  });
};

