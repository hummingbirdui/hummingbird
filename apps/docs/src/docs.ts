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

type Theme = string;

const THEME_KEY = 'theme';
const SYSTEM_THEME = 'system';

const THEMES = ['light', 'dark', 'luxury', 'retro', 'arctic', 'nature', 'ember', 'dracula', 'midnight'];

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

document.addEventListener('DOMContentLoaded', () => {
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
