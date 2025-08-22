import alert from '@assets/images/landing/js-showcase/alert.png';
import button from '@assets/images/landing/js-showcase/button.png';
import tooltip from '@assets/images/landing/js-showcase/tooltip.png';
import carousel from '@assets/images/landing/js-showcase/carousel.png';
import collapse from '@assets/images/landing/js-showcase/collapse.png';
import dropdown from '@assets/images/landing/js-showcase/dropdown.png';
import offcanvas from '@assets/images/landing/js-showcase/offcanvas.png';
import modal from '@assets/images/landing/js-showcase/modal.png';
import tab from '@assets/images/landing/js-showcase/tab.png';

export interface Component {
  image: ImageMetadata;
  title: string;
  description: string;
  color: string;
  link: string;
}

export const interactiveComponents: Component[] = [
  {
    image: alert,
    title: 'Alert',
    description: 'Provide relevant notices and feedback users can quickly dismiss.',
    color: 'primary',
    link: '#',
  },
  {
    image: collapse,
    title: 'Collapse',
    description: 'Easily show and hide sections of content with a toggle.',
    color: 'warning',
    link: '#',
  },
  {
    image: offcanvas,
    title: 'Offcanvas',
    description: 'Slide in side menus and panels from outside the browser viewport.',
    color: 'secondary',
    link: '#',
  },
  {
    image: button,
    title: 'Button',
    description: 'Add buttons to handle user clicks and trigger app actions.',
    color: 'secondary-dark',
    link: '#',
  },
  {
    image: dropdown,
    title: 'Dropdown',
    description: 'Build accessible and easy-to-use menus for navigation or actions.',
    color: 'success-dark',
    link: '#',
  },
  {
    image: tab,
    title: 'Tab',
    description: 'Organize content into switchable tabs for a cleaner interface.',
    color: 'primary-dark',
    link: '#',
  },
  {
    image: carousel,
    title: 'Carousel',
    description: 'Create smooth, flexible sliders for showcasing images or content.',
    color: 'info-main',
    link: '#',
  },
  {
    image: modal,
    title: 'Modal',
    description: 'Open pop-up dialogs over content to focus user tasks.',
    color: 'error',
    link: '#',
  },
  {
    image: tooltip,
    title: 'Tooltip',
    description: 'Display small pop-ups with extra info when a user hovers on UI.',
    color: 'success',
    link: '#',
  },
];
