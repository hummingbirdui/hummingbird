import hbLogo1 from '@assets/images/logos/hb-logo1.svg';
import hbLogo2 from '@assets/images/logos/hb-logo2.svg';
import hbLogo3 from '@assets/images/logos/hb-logo3.svg';
import hbTextLogo1 from '@assets/images/logos/hb-txt-logo1.svg';
import hbTextLogo2 from '@assets/images/logos/hb-txt-logo2.svg';
import hbTextLogo3 from '@assets/images/logos/hb-txt-logo3.svg';
import hbRestrictLogo1 from '@assets/images/logos/hb-restrict-logo1.svg';
import hbRestrictLogo2 from '@assets/images/logos/hb-restrict-logo2.svg';
import hbRestrictLogo3 from '@assets/images/logos/hb-restrict-logo3.svg';
import hbRestrictLogo4 from '@assets/images/logos/hb-restrict-logo4.svg';
import hbRestrictLogo5 from '@assets/images/logos/hb-restrict-logo5.svg';

export interface HbRestrictLogo {
  img: ImageMetadata;
  title: string;
}

export interface Color {
  name?: string;
  role?: string;
  hex?: string;
  span: string;
  bgColor?: string;
  items?: {
    name: string;
    hex: string;
    bgColor: string;
  }[];
}

export interface Typography {
  label: string;
  weight: number;
  class: string;
}

export const hbLogos: ImageMetadata[] = [hbTextLogo1, hbTextLogo2, hbTextLogo3, hbLogo1, hbLogo2, hbLogo3];
export const hbRestrictLogos: HbRestrictLogo[] = [
  {
    img: hbRestrictLogo1,
    title: "Don't adjust the logo.",
  },
  {
    img: hbRestrictLogo2,
    title: "Don't rotate the logo.",
  },
  {
    img: hbRestrictLogo3,
    title: "Don't add effects to the logo.",
  },
  {
    img: hbRestrictLogo4,
    title: "Don't use the logo as a mask.",
  },
  {
    img: hbRestrictLogo5,
    title: "Don't use the logo as a keyline.",
  },
];

export const colors: Color[] = [
  {
    name: 'Dodger Blue',
    role: 'Primary Color',
    hex: '#1E90FF',
    span: 'col-span-10 sm:col-span-6 lg:col-span-4',
    bgColor: 'bg-primary',
  },
  {
    name: 'Purple Orchid',
    role: 'Secondary Color',
    hex: '#AC49FC',
    span: 'col-span-10 sm:col-span-4 lg:col-span-3',
    bgColor: 'bg-secondary',
  },
  {
    name: 'Dark Charcoal',
    role: 'Neutral Base',
    hex: '#1D2025',
    span: 'col-span-10 sm:col-span-4 lg:col-span-3',
    bgColor: 'bg-[var(--color-gray-800)]',
  },
  {
    name: 'Crimson Red',
    role: 'Error color',
    hex: '#F24455',
    span: 'col-span-10 sm:col-span-3 lg:col-span-2',
    bgColor: 'bg-danger',
  },
  {
    name: 'Amber Orange',
    role: 'Warning color',
    hex: '#FFA40B',
    span: 'col-span-10 sm:col-span-3 lg:col-span-2',
    bgColor: 'bg-warning',
  },
  {
    name: 'Sky Cyan',
    role: 'Info color',
    hex: '#03A5D9',
    span: 'col-span-10 sm:col-span-3 lg:col-span-2',
    bgColor: 'bg-info',
  },
  {
    name: 'Emerald Green',
    role: 'Success color',
    hex: '#07B577',
    span: 'col-span-10 sm:col-span-3 lg:col-span-2',
    bgColor: 'bg-success',
  },
  {
    span: 'col-span-10 sm:col-span-4 lg:col-span-2',
    items: [
      { name: 'White', hex: '#FFFFFF', bgColor: 'bg-white' },
      {
        name: 'Black',
        hex: '#000000',
        bgColor: 'bg-black',
      },
    ],
  },
];

export const typography: Typography[] = [
  { label: 'Bold', weight: 700, class: 'font-bold' },
  { label: 'Semibold', weight: 600, class: 'font-semibold' },
  { label: 'Medium', weight: 500, class: 'font-medium' },
  { label: 'Regular', weight: 400, class: 'font-normal' },
  { label: 'Light', weight: 300, class: 'font-light' },
];
