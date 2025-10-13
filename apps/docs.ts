import docsearch from '@docsearch/js';

docsearch({
  container: '#docsearch',
  appId: '9WZCQJVTTL',
  indexName: 'hummingbird_docs',
  apiKey: 'b2804af869f12be7d3c1f06e61e48e0d',
  placeholder: 'Search',
});
docsearch({
  container: '#docsearch-mobile',
  appId: '9WZCQJVTTL',
  indexName: 'hummingbird_docs',
  apiKey: 'b2804af869f12be7d3c1f06e61e48e0d',
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

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  const initialTheme: Theme =
    savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  toggleTheme(initialTheme);
  const toggleThemeBtns = document.querySelectorAll('[data-theme-toggle-btn]');
  toggleThemeBtns.forEach((button) => {
    button?.addEventListener('click', () => {
      const current = (localStorage.getItem('theme') as Theme | null) ?? initialTheme;
      const newTheme: Theme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      toggleTheme(newTheme);
    });
  });

  // preventing browser default scroll to top behavior for a tag
  document.addEventListener('click', function (event) {
    const target = event.target instanceof Element ? event.target.closest('a') : null;
    if (target && target.getAttribute('href') === '#') {
      event.preventDefault();
    }
  });

  if (/Windows NT/i.test(navigator.userAgent)) {
    document.documentElement.setAttribute('data-os', 'windows');
  }
});
