import alert from '@assets/images/landing/interactive/alert.svg';
import button from '@assets/images/landing/interactive/button.svg';
import tooltip from '@assets/images/landing/interactive/tooltip.svg';
import carousel from '@assets/images/landing/interactive/carousel.svg';
import collapse from '@assets/images/landing/interactive/collapse.svg';
import dropdown from '@assets/images/landing/interactive/dropdown.svg';
import offcanvas from '@assets/images/landing/interactive/offcanvas.svg';
import modal from '@assets/images/landing/interactive/modal.svg';
import tab from '@assets/images/landing/interactive/tab.svg';
import alertDark from '@assets/images/landing/interactive/alert-dark.svg';
import buttonDark from '@assets/images/landing/interactive/button-dark.svg';
import tooltipDark from '@assets/images/landing/interactive/tooltip-dark.svg';
import carouselDark from '@assets/images/landing/interactive/carousel-dark.svg';
import collapseDark from '@assets/images/landing/interactive/collapse-dark.svg';
import dropdownDark from '@assets/images/landing/interactive/dropdown-dark.svg';
import offcanvasDark from '@assets/images/landing/interactive/offcanvas-dark.svg';
import modalDark from '@assets/images/landing/interactive/modal-dark.svg';
import tabDark from '@assets/images/landing/interactive/tab-dark.svg';
import scrollspy from '@assets/images/landing/interactive/scrollspy.svg';
import scrollspyDark from '@assets/images/landing/interactive/scrollspy-dark.svg';
import popover from '@assets/images/landing/interactive/popover.svg';
import popoverDark from '@assets/images/landing/interactive/popover-dark.svg';
import toast from '@assets/images/landing/interactive/toast.svg';
import toastDark from '@assets/images/landing/interactive/toast-dark.svg';

export interface JSComponent {
  image: {
    light: ImageMetadata;
    dark: ImageMetadata;
  };
  title: string;
  description: string;
  color: string;
  link: string;
}

export const jsComponents: JSComponent[] = [
  {
    title: 'Alert',
    description: 'Show important notices and feedback.',
    image: { light: alert, dark: alertDark },
    color: 'primary',
    link: '/docs/components/alerts#javascript-behavior',
  },
  {
    title: 'Dropdown',
    description: 'Build simple menus for selectable actions.',
    image: { light: dropdown, dark: dropdownDark },
    color: 'warning',
    link: '/docs/components/dropdowns',
  },
  {
    title: 'Scrollspy',
    description: 'Highlight navigation links while scrolling.',
    image: { light: scrollspy, dark: scrollspyDark },
    color: 'secondary',
    link: '/docs/components/scrollspy',
  },
  {
    title: 'Button',
    description: 'Control button states for interactions.',
    image: { light: button, dark: buttonDark },
    color: 'secondary-dark',
    link: '/docs/components/buttons#button-plugin',
  },
  {
    title: 'Modal',
    description: 'Present dialogs that focus attention.',
    image: { light: modal, dark: modalDark },
    color: 'success-dark',
    link: '/docs/components/modal',
  },
  {
    title: 'Tab',
    description: 'Organize content into separate sections.',
    image: { light: tab, dark: tabDark },
    color: 'error-dark',
    link: '/docs/components/navs-tabs',
  },
  {
    title: 'Carousel',
    description: 'Create slideshows for showcasing content.',
    image: { light: carousel, dark: carouselDark },
    color: 'primary-dark',
    link: '/docs/components/carousel',
  },
  {
    title: 'Offcanvas',
    description: 'Toggle sidebar panels from screen edges.',
    image: { light: offcanvas, dark: offcanvasDark },
    color: 'error',
    link: '/docs/components/offcanvas',
  },
  {
    title: 'Toast',
    description: 'Display quick feedback messages instantly.',
    image: { light: toast, dark: toastDark },
    color: 'success',
    link: '/docs/components/toasts',
  },
  {
    title: 'Collapse',
    description: 'Show or hide content with toggles.',
    image: { light: collapse, dark: collapseDark },
    color: 'warning',
    link: '/docs/components/collapse',
  },
  {
    title: 'Popover',
    description: 'Attach small contextual info popups.',
    image: { light: popover, dark: popoverDark },
    color: 'primary',
    link: '/docs/components/popovers',
  },
  {
    title: 'Tooltip',
    description: 'Reveal small descriptive text on hover.',
    image: { light: tooltip, dark: tooltipDark },
    color: 'secondary-dark',
    link: '/docs/components/tooltips',
  },
];
