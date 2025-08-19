import accordion from '@assets/images/landing/components/light/accordian.png';
import avatar from '@assets/images/landing/components/light/avatar.png';
import alert from '@assets/images/landing/components/light/alert.png';
import badge from '@assets/images/landing/components/light/badge.png';
import button from '@assets/images/landing/components/light/button.png';
import buttonGroup from '@assets/images/landing/components/light/button-group.png';
import breadcrumb from '@assets/images/landing/components/light/breadcrumb.png';
import card from '@assets/images/landing/components/light/card.png';
import chip from '@assets/images/landing/components/light/chip.png';

export interface Component {
  image: ImageMetadata;
  name: string;
  count: number;
  url: string;
}

export const components: Component[] = [
  { image: accordion, name: 'Accordion', count: 2, url: '#' },
  { image: alert, name: 'Alert', count: 3, url: '#' },
  { image: avatar, name: 'Avatar', count: 14, url: '#' },
  { image: badge, name: 'Badge', count: 14, url: '#' },
  { image: breadcrumb, name: 'Breadcrumb', count: 2, url: '#' },
  { image: button, name: 'Button', count: 20, url: '#' },
  { image: buttonGroup, name: 'Button Group', count: 2, url: '#' },
  { image: card, name: 'Card', count: 20, url: '#' },
  { image: chip, name: 'Chip', count: 20, url: '#' },
];
