import alert from '@assets/images/landing/interactive/alert.png';
import button from '@assets/images/landing/interactive/button.png';
import tooltip from '@assets/images/landing/interactive/tooltip.png';
import carousel from '@assets/images/landing/interactive/carousel.png';
import collapse from '@assets/images/landing/interactive/collapse.png';
import dropdown from '@assets/images/landing/interactive/dropdown.png';
import offcanvas from '@assets/images/landing/interactive/offcanvas.png';
import modal from '@assets/images/landing/interactive/modal.png';
import tab from '@assets/images/landing/interactive/tab.png';
import alertDark from '@assets/images/landing/interactive/alert-dark.png';
import buttonDark from '@assets/images/landing/interactive/button-dark.png';
import tooltipDark from '@assets/images/landing/interactive/tooltip-dark.png';
import carouselDark from '@assets/images/landing/interactive/carousel-dark.png';
import collapseDark from '@assets/images/landing/interactive/collapse-dark.png';
import dropdownDark from '@assets/images/landing/interactive/dropdown-dark.png';
import offcanvasDark from '@assets/images/landing/interactive/offcanvas-dark.png';
import modalDark from '@assets/images/landing/interactive/modal-dark.png';
import tabDark from '@assets/images/landing/interactive/tab-dark.png';

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
    description: 'Provide relevant notices and feedback users can quickly dismiss.',
    image: { light: alert, dark: alertDark },
    color: 'primary',
    link: '/docs/components/alert',
  },
  {
    title: 'Collapse',
    description: 'Easily show and hide sections of content with a toggle.',
    image: { light: collapse, dark: collapseDark },
    color: 'warning',
    link: '/docs/components/collapse',
  },
  {
    title: 'Offcanvas',
    description: 'Slide in side menus and panels from outside the browser viewport.',
    image: { light: offcanvas, dark: offcanvasDark },
    color: 'secondary',
    link: '/docs/components/offcanvas',
  },
  {
    title: 'Button',
    description: 'Add buttons to handle user clicks and trigger app actions.',
    image: { light: button, dark: buttonDark },
    color: 'secondary-dark',
    link: '/docs/components/buttons',
  },
  {
    title: 'Dropdown',
    description: 'Build accessible and easy-to-use menus for navigation or actions.',
    image: { light: dropdown, dark: dropdownDark },
    color: 'success-dark',
    link: '/docs/components/dropdowns',
  },
  {
    title: 'Tab',
    description: 'Organize content into switchable tabs for a cleaner interface.',
    image: { light: tab, dark: tabDark },
    color: 'primary-dark',
    link: '/docs/components/navs-tabs',
  },
  {
    title: 'Carousel',
    description: 'Create smooth, flexible sliders for showcasing images or content.',
    image: { light: carousel, dark: carouselDark },
    color: 'info-dark',
    link: '/docs/components/carousel',
  },
  {
    title: 'Modal',
    description: 'Open pop-up dialogs over content to focus user tasks.',
    image: { light: modal, dark: modalDark },
    color: 'error',
    link: '/docs/components/modal',
  },
  {
    title: 'Tooltip',
    description: 'Display small pop-ups with extra info when a user hovers on UI.',
    image: { light: tooltip, dark: tooltipDark },
    color: 'success',
    link: '/docs/components/tooltip',
  },
];
