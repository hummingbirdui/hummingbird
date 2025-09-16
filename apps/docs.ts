import docsearch from '@docsearch/js';

docsearch({
  container: '#docsearch',
  appId: '07LKLL0LSI',
  indexName: 'humming_docs',
  apiKey: '9b81cd758669ab6de5219db657938910',
  placeholder: 'Search',
});
docsearch({
  container: '#docsearch-mobile',
  appId: '07LKLL0LSI',
  indexName: 'humming_docs',
  apiKey: '9b81cd758669ab6de5219db657938910',
  placeholder: 'Search',
});

type Theme = 'dark' | 'light';

const toggleTheme = (theme: Theme) => {
  const s = document.createElement('style');
  s.textContent = '*,*::before,*::after{transition:none!important;animation:none!important}';
  document.head.appendChild(s);
  const html = document.documentElement;
  if (theme === 'dark') html.classList.add('dark');
  else html.classList.remove('dark');
  requestAnimationFrame(() => requestAnimationFrame(() => s.remove()));
};

const updateToggleThemeButton = (theme: Theme) => {
  const moonIcon = document.querySelector('[data-theme-toggle="dark"]');
  const sunIcon = document.querySelector('[data-theme-toggle="light"]');
  if (theme === 'dark') {
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
  } else {
    moonIcon?.classList.remove('hidden');
    sunIcon?.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  const initialTheme: Theme =
    savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  toggleTheme(initialTheme);
  updateToggleThemeButton(initialTheme);
  const toggleThemeBtn = document.querySelector('[data-theme-toggle-btn]');
  toggleThemeBtn?.addEventListener('click', () => {
    const current = (localStorage.getItem('theme') as Theme | null) ?? initialTheme;
    const newTheme: Theme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    toggleTheme(newTheme);
    updateToggleThemeButton(newTheme);
  });

  // preventing browser default scroll to top behavior for a tag
  document.addEventListener('click', function (event) {
    const target = event.target instanceof Element ? event.target.closest('a') : null;
    if (target && target.getAttribute('href') === '#') {
      event.preventDefault();
    }
  });
});
