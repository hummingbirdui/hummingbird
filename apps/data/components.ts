import button from '@assets/images/components/light/button.svg';
import buttonGroup from '@assets/images/components/light/button-group.svg';
import link from '@assets/images/components/light/link.svg';

import avatar from '@assets/images/components/light/avatar.svg';
import badge from '@assets/images/components/light/badge.svg';
import card from '@assets/images/components/light/card.svg';
import listGroup from '@assets/images/components/light/list-group.svg';
import table from '@assets/images/components/light/table.svg';
import tooltip from '@assets/images/components/light/tooltip.svg';

import checkbox from '@assets/images/components/light/checkbox.svg';
import fileInput from '@assets/images/components/light/file-input.svg';
import floatingLabels from '@assets/images/components/light/floating-labels.svg';
import formControls from '@assets/images/components/light/form-controls.svg';
import inputGroup from '@assets/images/components/light/input-group.svg';
import radio from '@assets/images/components/light/radio.svg';
import range from '@assets/images/components/light/range.svg';
import select from '@assets/images/components/light/select.svg';
import swItch from '@assets/images/components/light/switch.svg';

import alert from '@assets/images/components/light/alert.svg';
import modal from '@assets/images/components/light/modal.svg';

import accordion from '@assets/images/components/light/accordion.svg';
import carousel from '@assets/images/components/light/carousel.svg';
import breadcrumb from '@assets/images/components/light/breadcrumb.svg';
import collapse from '@assets/images/components/light/collapse.svg';
import dropdown from '@assets/images/components/light/dropdown.svg';
import navsTabs from '@assets/images/components/light/navs-tabs.svg';
import navbar from '@assets/images/components/light/navbar.svg';
import offcanvas from '@assets/images/components/light/offcanvas.svg';

// dark images
import buttonDark from '@assets/images/components/dark/button-dark.svg';
import buttonGroupDark from '@assets/images/components/dark/button-group-dark.svg';
import linkDark from '@assets/images/components/dark/link-dark.svg';

import avatarDark from '@assets/images/components/dark/avatar-dark.svg';
import badgeDark from '@assets/images/components/dark/badge-dark.svg';
import cardDark from '@assets/images/components/dark/card-dark.svg';
import listGroupDark from '@assets/images/components/dark/list-group-dark.svg';
import tableDark from '@assets/images/components/dark/table-dark.svg';
import tooltipDark from '@assets/images/components/dark/tooltip-dark.svg';

import checkboxDark from '@assets/images/components/dark/checkbox-dark.svg';
import fileInputDark from '@assets/images/components/dark/file-input-dark.svg';
import floatingLabelsDark from '@assets/images/components/dark/floating-labels-dark.svg';
import formControlsDark from '@assets/images/components/dark/form-controls-dark.svg';
import inputGroupDark from '@assets/images/components/dark/input-group-dark.svg';
import radioDark from '@assets/images/components/dark/radio-dark.svg';
import rangeDark from '@assets/images/components/dark/range-dark.svg';
import selectDark from '@assets/images/components/dark/select-dark.svg';
import swItchDark from '@assets/images/components/dark/switch-dark.svg';

import alertDark from '@assets/images/components/dark/alert-dark.svg';
import modalDark from '@assets/images/components/dark/modal-dark.svg';

import accordionDark from '@assets/images/components/dark/accordion-dark.svg';
import carouselDark from '@assets/images/components/dark/carousel-dark.svg';
import breadcrumbDark from '@assets/images/components/dark/breadcrumb-dark.svg';
import collapseDark from '@assets/images/components/dark/collapse-dark.svg';
import dropdownDark from '@assets/images/components/dark/dropdown-dark.svg';
import navsTabsDark from '@assets/images/components/dark/navs-tabs-dark.svg';
import navbarDark from '@assets/images/components/dark/navbar-dark.svg';
import offcanvasDark from '@assets/images/components/dark/offcanvas-dark.svg';

import closeButton from '@assets/images/components/light/close-button.svg';
import closeButtonDark from '@assets/images/components/dark/close-button-dark.svg';
import video from '@assets/images/components/light/video.svg';
import videoDark from '@assets/images/components/dark/video-dark.svg';
import advancedSelect from '@assets/images/components/light/advanced-select.svg';
import advancedSelectDark from '@assets/images/components/dark/advanced-select-dark.svg';
import advancedRange from '@assets/images/components/light/advanced-range.svg';
import advancedRangeDark from '@assets/images/components/dark/advanced-range-dark.svg';
import validation from '@assets/images/components/light/validation.svg';
import validationDark from '@assets/images/components/dark/validation-dark.svg';
import uploader from '@assets/images/components/light/uploader.svg';
import uploaderDark from '@assets/images/components/dark/uploader-dark.svg';
import toast from '@assets/images/components/light/toast.svg';
import toastDark from '@assets/images/components/dark/toast-dark.svg';
import popover from '@assets/images/components/light/popover.svg';
import popoverDark from '@assets/images/components/dark/popover-dark.svg';
import scrollspy from '@assets/images/components/light/scrollspy.svg';
import scrollspyDark from '@assets/images/components/dark/scrollspy-dark.svg';
import pagination from '@assets/images/components/light/pagination.svg';
import paginationDark from '@assets/images/components/dark/pagination-dark.svg';
import loader from '@assets/images/components/light/loader.svg';
import loaderDark from '@assets/images/components/dark/loader-dark.svg';
import progress from '@assets/images/components/light/progress.svg';
import progressDark from '@assets/images/components/dark/progress-dark.svg';
import placeholder from '@assets/images/components/light/placeholder.svg';
import placeholderDark from '@assets/images/components/dark/placeholder-dark.svg';
import divider from '@assets/images/components/light/divider.svg';
import dividerDark from '@assets/images/components/dark/divider-dark.svg';
import customScrollbar from '@assets/images/components/light/custom-scrollbar.svg';
import customScrollbarDark from '@assets/images/components/dark/custom-scrollbar-dark.svg';

export interface Component {
  title: string;
  count: number;
  url: string;
  image: { light: ImageMetadata; dark: ImageMetadata };
}

export interface Section {
  section: string;
  items: Component[];
}

export const general: Component[] = [
  {
    title: 'Button',
    url: '/docs/components/buttons',
    count: 11,
    image: { light: button, dark: buttonDark },
  },
  {
    title: 'Button Group',
    url: '/docs/components/button-group',
    count: 12,
    image: { light: buttonGroup, dark: buttonGroupDark },
  },
  {
    title: 'Close Button',
    url: '/docs/components/close-button',
    count: 12,
    image: { light: closeButton, dark: closeButtonDark },
  },
  {
    title: 'Link',
    url: '/docs/components/link',
    count: 3,
    image: { light: link, dark: linkDark },
  },
];

export const dataDisplay: Component[] = [
  {
    title: 'Avatar',
    url: '/docs/components/avatar',
    count: 7,
    image: { light: avatar, dark: avatarDark },
  },
  {
    title: 'Badge',
    url: '/docs/components/badge',
    count: 10,
    image: { light: badge, dark: badgeDark },
  },
  {
    title: 'Card',
    url: '/docs/components/card',
    count: 6,
    image: { light: card, dark: cardDark },
  },
  {
    title: 'List Group',
    url: '/docs/components/list-group',
    count: 10,
    image: { light: listGroup, dark: listGroupDark },
  },
  {
    title: 'Table',
    url: '/docs/components/table',
    count: 13,
    image: { light: table, dark: tableDark },
  },
  {
    title: 'Tooltip',
    url: '/docs/components/tooltip',
    count: 4,
    image: { light: tooltip, dark: tooltipDark },
  },
  {
    title: 'Video',
    url: '/docs/components/video',
    count: 4,
    image: { light: video, dark: videoDark },
  },
];

export const dataEntry: Component[] = [
  {
    title: 'Advanced Range',
    url: '/docs/forms/advanced-forms/advanced-range',
    count: 6,
    image: { light: advancedRange, dark: advancedRangeDark },
  },
  {
    title: 'Advanced Select',
    url: '/docs/forms/advanced-forms/advanced-select',
    count: 6,
    image: { light: advancedSelect, dark: advancedSelectDark },
  },
  {
    title: 'Checkbox',
    url: '/docs/components/checkbox',
    count: 6,
    image: { light: checkbox, dark: checkboxDark },
  },
  {
    title: 'File Input',
    url: '/docs/components/file-input',
    count: 7,
    image: { light: fileInput, dark: fileInputDark },
  },
  {
    title: 'Floating labels',
    url: '/docs/components/floating-labels',
    count: 8,
    image: { light: floatingLabels, dark: floatingLabelsDark },
  },
  {
    title: 'Form Controls',
    url: '/docs/components/form-control',
    count: 8,
    image: { light: formControls, dark: formControlsDark },
  },
  {
    title: 'Form Validation',
    url: '/docs/components/form-validation',
    count: 8,
    image: { light: validation, dark: validationDark },
  },
  {
    title: 'Input Group',
    url: '/docs/components/input-group',
    count: 12,
    image: { light: inputGroup, dark: inputGroupDark },
  },
  {
    title: 'Radio',
    url: '/docs/components/radio',
    count: 6,
    image: { light: radio, dark: radioDark },
  },
  {
    title: 'Range',
    url: '/docs/components/range',
    count: 6,
    image: { light: range, dark: rangeDark },
  },
  {
    title: 'Select',
    url: '/docs/components/select',
    count: 6,
    image: { light: select, dark: selectDark },
  },
  {
    title: 'Switch',
    url: '/docs/components/switch',
    count: 4,
    image: { light: swItch, dark: swItchDark },
  },
  {
    title: 'File Uploader',
    url: '/docs/components/file-uploader',
    count: 4,
    image: { light: uploader, dark: uploaderDark },
  },
];

export const feedback: Component[] = [
  {
    title: 'Alert',
    url: '/docs/components/alert',
    count: 6,
    image: { light: alert, dark: alertDark },
  },
  {
    title: 'Modal',
    url: '/docs/components/modal',
    count: 8,
    image: { light: modal, dark: modalDark },
  },
  {
    title: 'Placeholder',
    url: '/docs/components/placeholder',
    count: 8,
    image: { light: placeholder, dark: placeholderDark },
  },
  {
    title: 'Popover',
    url: '/docs/components/popover',
    count: 8,
    image: { light: popover, dark: popoverDark },
  },
  {
    title: 'Progress',
    url: '/docs/components/progress',
    count: 8,
    image: { light: progress, dark: progressDark },
  },
  {
    title: 'Loader',
    url: '/docs/components/loader',
    count: 8,
    image: { light: loader, dark: loaderDark },
  },
  {
    title: 'Toast',
    url: '/docs/components/toast',
    count: 8,
    image: { light: toast, dark: toastDark },
  },
];

export const navigation: Component[] = [
  {
    title: 'Accordion',
    url: '/docs/components/accordion',
    count: 2,
    image: { light: accordion, dark: accordionDark },
  },
  {
    title: 'Breadcrumb',
    url: '/docs/components/breadcrumb',
    count: 5,
    image: { light: breadcrumb, dark: breadcrumbDark },
  },
  {
    title: 'Carousel',
    url: '/docs/components/carousel',
    count: 9,
    image: { light: carousel, dark: carouselDark },
  },
  {
    title: 'Collapse',
    url: '/docs/components/collapse',
    count: 3,
    image: { light: collapse, dark: collapseDark },
  },
  {
    title: 'Dropdown',
    url: '/docs/components/dropdowns',
    count: 15,
    image: { light: dropdown, dark: dropdownDark },
  },
  {
    title: 'Navs & Tabs',
    url: '/docs/components/navs-tabs',
    count: 7,
    image: { light: navsTabs, dark: navsTabsDark },
  },
  {
    title: 'Navbar',
    url: '/docs/components/navbar',
    count: 11,
    image: { light: navbar, dark: navbarDark },
  },
  {
    title: 'Offcanvas',
    url: '/docs/components/offcanvas',
    count: 7,
    image: { light: offcanvas, dark: offcanvasDark },
  },
  {
    title: 'Pagination',
    url: '/docs/components/pagination',
    count: 7,
    image: { light: pagination, dark: paginationDark },
  },
  {
    title: 'Scrollspy',
    url: '/docs/components/scrollspy',
    count: 7,
    image: { light: scrollspy, dark: scrollspyDark },
  },
];

export const layout: Component[] = [
  {
    title: 'Custom Scrollbar',
    url: '/docs/components/custom-scrollbar',
    count: 7,
    image: { light: customScrollbar, dark: customScrollbarDark },
  },
  {
    title: 'Divider',
    url: '/docs/components/divider',
    count: 7,
    image: { light: divider, dark: dividerDark },
  },
];

export const components = [...dataDisplay, ...dataEntry, ...feedback, ...navigation, ...layout].sort((a, b) =>
  a.title.localeCompare(b.title),
);
