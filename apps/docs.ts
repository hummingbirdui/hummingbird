import docsearch from '@docsearch/js';
import flatpickrInit from './plugins/flatpickr';
import dropzoneInit from './plugins/dropzone';
import { getConfig } from '@libs/config';
import Choices from 'choices.js';
import noUiSliderInit from './plugins/noUISlider';

declare global {
  interface Window {
    hummingbird: {
      Toast: any;
    };
  }
}

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
  const toastLiveExample = document.getElementById('liveToast');
  const toastPlacement = document.getElementById('toastPlacement');
  const toastPlacementSelect = document.getElementById('selectToastPlacement') as HTMLSelectElement;
  if (toastTrigger) {
    const toastBootstrap = window.hummingbird.Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show();
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
  
  dropzoneInit();
});

  flatpickrInit();

  // Choices
  const hbChoices = document.querySelectorAll('[data-choices="data-choices"]');
  hbChoices.forEach((choice) => new Choices(choice, { removeItemButton: true }));

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

  // Plugin initialization
  noUiSliderInit();
});
