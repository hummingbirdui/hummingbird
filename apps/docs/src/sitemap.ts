import django from '@assets/images/landing/frameworks/django.svg';
import angular from '@assets/images/landing/frameworks/angular.svg';
import laravel from '@assets/images/landing/frameworks/laravel.svg';
import nextjsL from '@assets/images/landing/frameworks/nextjs.svg';
import nextjsD from '@assets/images/landing/frameworks/nextjs-dark.svg';
import astroL from '@assets/images/landing/frameworks/astro.svg';
import astroD from '@assets/images/landing/frameworks/astro-dark.svg';
import reactL from '@assets/images/landing/frameworks/react.svg';
import reactD from '@assets/images/landing/frameworks/react-dark.svg';
import svelte from '@assets/images/landing/frameworks/svelte.svg';
import nuxt from '@assets/images/landing/frameworks/nuxt.svg';
import vue from '@assets/images/landing/frameworks/vue.svg';
import gatsby from '@assets/images/landing/frameworks/gatsby.svg';

export interface SitemapItem {
  name: string;
  path: string;
  icon?: string | { light: ImageMetadata; dark: ImageMetadata };
  children?: SitemapItem[];
}

interface Sitemap {
  subHeader: string;
  items: SitemapItem[];
}

const sitemap: Sitemap[] = [
  {
    subHeader: 'Getting Started',
    items: [
      {
        name: 'Introduction',
        path: '/docs/getting-started/introduction',
      },
      {
        name: 'Installation',
        path: '/docs/getting-started/installation',
      },
      {
        name: 'Framework Guides',
        path: '/docs/getting-started/framework-guides',
        children: [
          {
            name: 'React',
            icon: { light: reactL, dark: reactD },
            path: '/docs/getting-started/framework-guides/react',
          },
          {
            name: 'Next',
            icon: { light: nextjsL, dark: nextjsD },
            path: '/docs/getting-started/framework-guides/next',
          },
          {
            name: 'Laravel',
            icon: { light: laravel, dark: laravel },
            path: '/docs/getting-started/framework-guides/laravel',
          },
          {
            name: 'Vue',
            icon: { light: vue, dark: vue },
            path: '/docs/getting-started/framework-guides/vue',
          },
          {
            name: 'Nuxt',
            icon: { light: nuxt, dark: nuxt },
            path: '/docs/getting-started/framework-guides/nuxt',
          },
          {
            name: 'Angular',
            icon: { light: angular, dark: angular },
            path: '/docs/getting-started/framework-guides/angular',
          },
          {
            name: 'Svelte',
            icon: { light: svelte, dark: svelte },
            path: '/docs/getting-started/framework-guides/svelte',
          },
          {
            name: 'Gatsby',
            icon: { light: gatsby, dark: gatsby },
            path: '/docs/getting-started/framework-guides/gatsby',
          },
          {
            name: 'Astro',
            icon: { light: astroL, dark: astroD },
            path: '/docs/getting-started/framework-guides/astro',
          },
          {
            name: 'Django',
            icon: { light: django, dark: django },
            path: '/docs/getting-started/framework-guides/django',
          },
        ],
      },
      {
        name: 'JavaScript',
        path: '/docs/getting-started/javascript',
      },
      {
        name: 'Accessibility',
        path: '/docs/getting-started/accessibility',
      },
      {
        name: 'RTL',
        path: '/docs/getting-started/rtl',
      },
      {
        name: 'CLI',
        path: '/docs/getting-started/cli',
      },
    ],
  },
  {
    subHeader: 'Customize',
    items: [
      {
        name: 'Component',
        path: '/docs/customize/component',
      },
      {
        name: 'Theming',
        path: '/docs/customize/theming',
      },
      {
        name: 'Colors',
        path: '/docs/customize/colors',
      },
      {
        name: 'Dark mode',
        path: '/docs/customize/dark-mode',
      },
      {
        name: 'Reboot',
        path: '/docs/customize/reboot',
      },
    ],
  },
  {
    subHeader: 'Layout & content',
    items: [
      {
        name: 'Container',
        path: '/docs/layout/container',
      },
      {
        name: 'Columns',
        path: '/docs/layout/columns',
      },
      {
        name: 'Grid',
        path: '/docs/layout/grid',
      },
      {
        name: 'Typography',
        path: '/docs/content/typography',
      },
      {
        name: 'Background',
        path: '/docs/content/background',
      },
      {
        name: 'Images',
        path: '/docs/content/images',
      },
      {
        name: 'Video',
        path: '/docs/content/video',
      },
      {
        name: 'Shadows',
        path: '/docs/content/shadows',
      },
    ],
  },
  {
    subHeader: 'Forms',
    items: [
      {
        name: 'Form Control',
        path: '/docs/forms/form-control',
      },
      {
        name: 'Floating labels',
        path: '/docs/forms/floating-labels',
      },
      {
        name: 'Select',
        path: '/docs/forms/select',
      },
      {
        name: 'File Input',
        path: '/docs/forms/file-input',
      },
      {
        name: 'Checkbox',
        path: '/docs/forms/checkbox',
      },
      {
        name: 'Radio',
        path: '/docs/forms/radio',
      },
      {
        name: 'Switch',
        path: '/docs/forms/switch',
      },
      {
        name: 'Range',
        path: '/docs/forms/range',
      },
      {
        name: 'Input Group',
        path: '/docs/forms/input-group',
      },
      {
        name: 'Validation',
        path: '/docs/forms/validation',
      },
    ],
  },
  {
    subHeader: 'Advanced Forms',
    items: [
      {
        name: 'Advanced Select',
        path: '/docs/forms/advanced-forms/advanced-select',
      },
      {
        name: 'Date Time Picker',
        path: '/docs/forms/advanced-forms/date-time-picker',
      },
      {
        name: 'File Uploader',
        path: '/docs/forms/advanced-forms/file-uploader',
      },
      {
        name: 'Advanced Range',
        path: '/docs/forms/advanced-forms/advanced-range',
      },
    ],
  },
  {
    subHeader: 'Components',
    items: [
      {
        name: 'Overview',
        path: '/docs/components/overview',
      },
      {
        name: 'Accordion',
        path: '/docs/components/accordion',
      },
      {
        name: 'Alerts',
        path: '/docs/components/alerts',
      },
      {
        name: 'Avatars',
        path: '/docs/components/avatars',
      },
      {
        name: 'Badges',
        path: '/docs/components/badges',
      },
      {
        name: 'Breadcrumb',
        path: '/docs/components/breadcrumb',
      },
      {
        name: 'Buttons',
        path: '/docs/components/buttons',
      },
      {
        name: 'Button Group',
        path: '/docs/components/button-group',
      },
      {
        name: 'Card',
        path: '/docs/components/card',
      },
      {
        name: 'Carousel',
        path: '/docs/components/carousel',
      },
      {
        name: 'Collapse',
        path: '/docs/components/collapse',
      },
      {
        name: 'Close Button',
        path: '/docs/components/close-button',
      },
      {
        name: 'Custom Scrollbar',
        path: '/docs/components/custom-scrollbar',
      },
      {
        name: 'Divider',
        path: '/docs/components/divider',
      },
      {
        name: 'Dropdowns',
        path: '/docs/components/dropdowns',
      },
      {
        name: 'List Group',
        path: '/docs/components/list-group',
      },
      {
        name: 'Link',
        path: '/docs/components/link',
      },
      {
        name: 'Loaders',
        path: '/docs/components/loaders',
      },
      {
        name: 'Modal',
        path: '/docs/components/modal',
      },
      {
        name: 'Navbar',
        path: '/docs/components/navbar',
      },
      {
        name: 'Navs & tabs',
        path: '/docs/components/navs-tabs',
      },
      {
        name: 'Offcanvas',
        path: '/docs/components/offcanvas',
      },
      {
        name: 'Pagination',
        path: '/docs/components/pagination',
      },
      {
        name: 'Placeholders',
        path: '/docs/components/placeholders',
      },
      {
        name: 'Popovers',
        path: '/docs/components/popovers',
      },
      {
        name: 'Progress',
        path: '/docs/components/progress',
      },
      {
        name: 'Scrollspy',
        path: '/docs/components/scrollspy',
      },
      {
        name: 'Tables',
        path: '/docs/components/tables',
      },
      {
        name: 'Toasts',
        path: '/docs/components/toasts',
      },
      {
        name: 'Tooltips',
        path: '/docs/components/tooltips',
      },
    ],
  },
];

export default sitemap;
