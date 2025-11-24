import docsearch from '@docsearch/js';
import { getConfig } from '@libs/config';
import { Toast } from '../src/index.ts';
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
