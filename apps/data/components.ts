import accordion from '@assets/images/landing/components/light/accordian.png';
import avatar from '@assets/images/landing/components/light/avatar.png';
import alert from '@assets/images/landing/components/light/alert.png';
import badge from '@assets/images/landing/components/light/badge.png';
import button from '@assets/images/landing/components/light/button.png';
import buttonGroup from '@assets/images/landing/components/light/button-group.png';
import breadcrumb from '@assets/images/landing/components/light/breadcrumb.png';
import card from '@assets/images/landing/components/light/card.png';

import accordionDark from '@assets/images/landing/components/dark/accordian.png';
import avatarDark from '@assets/images/landing/components/dark/avatar.png';
import alertDark from '@assets/images/landing/components/dark/alert.png';
import badgeDark from '@assets/images/landing/components/dark/badge.png';
import buttonDark from '@assets/images/landing/components/dark/button.png';
import buttonGroupDark from '@assets/images/landing/components/dark/button-group.png';
import breadcrumbDark from '@assets/images/landing/components/dark/breadcrumb.png';
import cardDark from '@assets/images/landing/components/dark/card.png';

export interface Component {
  section: string;
  title: string;
  count: number;
  url: string;
  image: { light: ImageMetadata | string; dark: ImageMetadata | string };
}

export const components: Component[] = [
  // General
  {
    section: 'general',
    title: 'Button',
    url: '/docs/components/button',
    count: 20,
    image: { light: button, dark: buttonDark },
  },
  {
    section: 'general',
    title: 'Button Group',
    url: '/docs/components/button-group',
    count: 2,
    image: { light: buttonGroup, dark: buttonGroupDark },
  },
  { section: 'general', title: 'Link', url: '/docs/components/link', count: 20, image: { light: '', dark: '' } },

  // Data Display
  {
    section: 'data-display',
    title: 'Avatar',
    url: '/docs/components/avatar',
    count: 14,
    image: { light: avatar, dark: avatarDark },
  },
  {
    section: 'data-display',
    title: 'Badge',
    url: '/docs/components/badge',
    count: 14,
    image: { light: badge, dark: badgeDark },
  },
  {
    section: 'data-display',
    title: 'Card',
    url: '/docs/components/card',
    count: 20,
    image: { light: card, dark: cardDark },
  },
  {
    section: 'data-display',
    title: 'List Group',
    url: '/docs/components/list-group',
    count: 10,
    image: { light: '', dark: '' },
  },
  { section: 'data-display', title: 'Table', url: '/docs/components/table', count: 20, image: { light: '', dark: '' } },
  {
    section: 'data-display',
    title: 'Tooltip',
    url: '/docs/components/tooltip',
    count: 20,
    image: { light: '', dark: '' },
  },

  // Data Entry
  {
    section: 'data-entry',
    title: 'Checkbox',
    url: '/docs/components/checkbox',
    count: 2,
    image: { light: '', dark: '' },
  },
  {
    section: 'data-entry',
    title: 'File Input',
    url: '/docs/components/file-input',
    count: 1,
    image: { light: '', dark: '' },
  },
  {
    section: 'data-entry',
    title: 'Floating labels',
    url: '/docs/components/floating-labels',
    count: 14,
    image: { light: '', dark: '' },
  },
  {
    section: 'data-entry',
    title: 'Form controls',
    url: '/docs/components/form-controls',
    count: 14,
    image: { light: '', dark: '' },
  },
  {
    section: 'data-entry',
    title: 'Input Group',
    url: '/docs/components/input-group',
    count: 10,
    image: { light: '', dark: '' },
  },
  { section: 'data-entry', title: 'Radio', url: '/docs/components/radio', count: 20, image: { light: '', dark: '' } },
  { section: 'data-entry', title: 'Range', url: '/docs/components/range', count: 2, image: { light: '', dark: '' } },
  { section: 'data-entry', title: 'Select', url: '/docs/components/select', count: 20, image: { light: '', dark: '' } },
  { section: 'data-entry', title: 'Switch', url: '/docs/components/switch', count: 20, image: { light: '', dark: '' } },

  // Feedback
  {
    section: 'feedback',
    title: 'Alert',
    url: '/docs/components/alert',
    count: 3,
    image: { light: alert, dark: alertDark },
  },
  { section: 'feedback', title: 'Modal', url: '/docs/components/modal', count: 20, image: { light: '', dark: '' } },

  // Navigation
  {
    section: 'navigation',
    title: 'Accordion',
    url: '/docs/components/accordion',
    count: 2,
    image: { light: accordion, dark: accordionDark },
  },
  {
    section: 'navigation',
    title: 'Breadcrumb',
    url: '/docs/components/breadcrumb',
    count: 2,
    image: { light: breadcrumb, dark: breadcrumbDark },
  },
  {
    section: 'navigation',
    title: 'Carousel',
    url: '/docs/components/carousel',
    count: 2,
    image: { light: '', dark: '' },
  },
  {
    section: 'navigation',
    title: 'Collapse',
    url: '/docs/components/collapse',
    count: 20,
    image: { light: '', dark: '' },
  },
  {
    section: 'navigation',
    title: 'Dropdown',
    url: '/docs/components/dropdown',
    count: 20,
    image: { light: '', dark: '' },
  },
  {
    section: 'navigation',
    title: 'Navs & Tabs',
    url: '/docs/components/navs-tabs',
    count: 20,
    image: { light: '', dark: '' },
  },
  { section: 'navigation', title: 'Navbar', url: '/docs/components/navbar', count: 20, image: { light: '', dark: '' } },
  {
    section: 'navigation',
    title: 'Offcanvas',
    url: '/docs/components/offcanvas',
    count: 20,
    image: { light: '', dark: '' },
  },
  { section: 'navigation', title: 'Switch', url: '/docs/components/switch', count: 20, image: { light: '', dark: '' } },
].sort((a, b) => a.title.localeCompare(b.title));
