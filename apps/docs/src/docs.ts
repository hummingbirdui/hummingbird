import docsearch from '@docsearch/js';
import { getConfig } from '@libs/config';
import themeControlInit from '@scripts/theme-control';
import flatpickrInit from '@scripts/plugins/flatpickr';
import dropzoneInit from '@scripts/plugins/dropzone';
import noUiSliderInit from '@scripts/plugins/noUISlider';
import choicesInit from '@scripts/plugins/choices';
import toastInit from '@scripts/plugins/toast';
import formValidationInit from '@scripts/form-validation';

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

document.addEventListener('DOMContentLoaded', () => {
  themeControlInit();
  toastInit();
  formValidationInit();
  choicesInit();
  dropzoneInit();
  flatpickrInit();
  noUiSliderInit();

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
