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
    count: 20,
    image: { light: button, dark: buttonDark },
  },
  {
    title: 'Button Group',
    url: '/docs/components/button-group',
    count: 2,
    image: { light: buttonGroup, dark: buttonGroupDark },
  },
  {
    title: 'Link',
    url: '/docs/components/link',
    count: 20,
    image: { light: link, dark: linkDark },
  },
];

export const dataDisplay: Component[] = [
  {
    title: 'Avatar',
    url: '/docs/components/avatar',
    count: 14,
    image: { light: avatar, dark: avatarDark },
  },
  {
    title: 'Badge',
    url: '/docs/components/badge',
    count: 14,
    image: { light: badge, dark: badgeDark },
  },
  {
    title: 'Card',
    url: '/docs/components/card',
    count: 20,
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
    count: 20,
    image: { light: table, dark: tableDark },
  },
  {
    title: 'Tooltip',
    url: '/docs/components/tooltip',
    count: 20,
    image: { light: tooltip, dark: tooltipDark },
  },
];

export const dataEntry: Component[] = [
  {
    title: 'Checkbox',
    url: '/docs/components/checkbox',
    count: 2,
    image: { light: checkbox, dark: checkboxDark },
  },
  {
    title: 'File Input',
    url: '/docs/components/file-input',
    count: 1,
    image: { light: fileInput, dark: fileInputDark },
  },
  {
    title: 'Floating labels',
    url: '/docs/components/floating-labels',
    count: 14,
    image: { light: floatingLabels, dark: floatingLabelsDark },
  },
  {
    title: 'Form controls',
    url: '/docs/components/form-controls',
    count: 14,
    image: { light: formControls, dark: formControlsDark },
  },
  {
    title: 'Input Group',
    url: '/docs/components/input-group',
    count: 10,
    image: { light: inputGroup, dark: inputGroupDark },
  },
  {
    title: 'Radio',
    url: '/docs/components/radio',
    count: 20,
    image: { light: radio, dark: radioDark },
  },
  {
    title: 'Range',
    url: '/docs/components/range',
    count: 2,
    image: { light: range, dark: rangeDark },
  },
  {
    title: 'Select',
    url: '/docs/components/select',
    count: 20,
    image: { light: select, dark: selectDark },
  },
  {
    title: 'Switch',
    url: '/docs/components/switch',
    count: 20,
    image: { light: swItch, dark: swItchDark },
  },
];

export const feedback: Component[] = [
  {
    title: 'Alert',
    url: '/docs/components/alert',
    count: 3,
    image: { light: alert, dark: alertDark },
  },
  {
    title: 'Modal',
    url: '/docs/components/modal',
    count: 20,
    image: { light: modal, dark: modalDark },
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
    count: 2,
    image: { light: breadcrumb, dark: breadcrumbDark },
  },
  {
    title: 'Carousel',
    url: '/docs/components/carousel',
    count: 2,
    image: { light: carousel, dark: carouselDark },
  },
  {
    title: 'Collapse',
    url: '/docs/components/collapse',
    count: 20,
    image: { light: collapse, dark: collapseDark },
  },
  {
    title: 'Dropdown',
    url: '/docs/components/dropdown',
    count: 20,
    image: { light: dropdown, dark: dropdownDark },
  },
  {
    title: 'Navs & Tabs',
    url: '/docs/components/navs-tabs',
    count: 20,
    image: { light: navsTabs, dark: navsTabsDark },
  },
  {
    title: 'Navbar',
    url: '/docs/components/navbar',
    count: 20,
    image: { light: navbar, dark: navbarDark },
  },
  {
    title: 'Offcanvas',
    url: '/docs/components/offcanvas',
    count: 20,
    image: { light: offcanvas, dark: offcanvasDark },
  },
];

export const components: Section[] = [
  {
    section: 'Navigation',
    items: [],
  },
];
