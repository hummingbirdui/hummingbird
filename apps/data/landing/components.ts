import accordion from '@assets/images/landing/components/light/accordian.png';
import avatar from '@assets/images/landing/components/light/avatar.png';
import alert from '@assets/images/landing/components/light/alert.png';
import badge from '@assets/images/landing/components/light/badge.png';
import button from '@assets/images/landing/components/light/button.png';
import buttonGroup from '@assets/images/landing/components/light/button-group.png';
import breadcrumb from '@assets/images/landing/components/light/breadcrumb.png';
import card from '@assets/images/landing/components/light/card.png';
import chip from '@assets/images/landing/components/light/chip.png';

import accordionDark from '@assets/images/landing/components/dark/accordian.png';
import avatarDark from '@assets/images/landing/components/dark/avatar.png';
import alertDark from '@assets/images/landing/components/dark/alert.png';
import badgeDark from '@assets/images/landing/components/dark/badge.png';
import buttonDark from '@assets/images/landing/components/dark/button.png';
import buttonGroupDark from '@assets/images/landing/components/dark/button-group.png';
import breadcrumbDark from '@assets/images/landing/components/dark/breadcrumb.png';
import cardDark from '@assets/images/landing/components/dark/card.png';
import chipDark from '@assets/images/landing/components/dark/chip.png';

export interface Component {
  image: { light: ImageMetadata; dark: ImageMetadata };
  name: string;
  count: number;
  url: string;
}

export const components: Component[] = [
  { image: { light: accordion, dark: accordionDark }, name: 'Accordion', count: 2, url: '/docs/components/accordion' },
  { image: { light: alert, dark: alertDark }, name: 'Alert', count: 3, url: '/docs/components/alert' },
  { image: { light: avatar, dark: avatarDark }, name: 'Avatar', count: 14, url: '/docs/components/avatar' },
  { image: { light: badge, dark: badgeDark }, name: 'Badge', count: 14, url: '/docs/components/badge' },
  {
    image: { light: breadcrumb, dark: breadcrumbDark },
    name: 'Breadcrumb',
    count: 2,
    url: '/docs/components/breadcrumb',
  },
  { image: { light: button, dark: buttonDark }, name: 'Button', count: 20, url: '/docs/components/buttons' },
  {
    image: { light: buttonGroup, dark: buttonGroupDark },
    name: 'Button Group',
    count: 2,
    url: '/docs/components/button-group',
  },
  { image: { light: card, dark: cardDark }, name: 'Card', count: 20, url: '/docs/components/card' },
  { image: { light: chip, dark: chipDark }, name: 'Chip', count: 20, url: '/docs/components/badge' },
];
