import docsearch from '@docsearch/js';
import { getConfig } from '@libs/config';
import { Toast } from '@hummingbirdui/hummingbird/src/index';
import flatpickrInit from './plugins/flatpickr';
import dropzoneInit from './plugins/dropzone';
import noUiSliderInit from './plugins/noUISlider';
import choicesInit from './plugins/choices';

docsearch({
  container: '#docsearch',
  appId: getConfig().algolia.appId,
  indexName: getConfig().algolia.indexName,
  apiKey: getConfig().algolia.apiKey,
  placeholder: 'Search',
  maxResultsPerGroup: 15,
});
docsearch({
  container: '#docsearch-mobile',
  appId: getConfig().algolia.appId,
  indexName: getConfig().algolia.indexName,
  apiKey: getConfig().algolia.apiKey,
  placeholder: 'Search',
  maxResultsPerGroup: 15,
});

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
  console.log(currentTheme);
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
};

document.addEventListener('DOMContentLoaded', () => {
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

  // Toast examples
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast') as HTMLElement;
  const toastPlacement = document.getElementById('toastPlacement');
  const toastPlacementSelect = document.getElementById('selectToastPlacement') as HTMLSelectElement;
  if (toastTrigger) {
    const hbToast = Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
      hbToast.show();
    });
  }
  if (toastPlacement) {
    toastPlacementSelect.addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className;
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`;
    });
  }

  // Form validation
  const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });

  choicesInit();
  dropzoneInit();
  flatpickrInit();
  noUiSliderInit();
});
