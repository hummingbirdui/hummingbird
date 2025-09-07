interface Sitemap {
  subHeader: string;
  items: {
    name: string;
    path: string;
  }[];
}

const sitemap: Sitemap[] = [
  {
    subHeader: 'Getting Started',
    items: [
      {
        name: 'Introduction',
        path: '#',
      },
      {
        name: 'Installation',
        path: '/docs/getting-started/installation',
      },
      {
        name: 'Tutorial',
        path: '#',
      },
    ],
  },
  {
    subHeader: 'Integration guides',
    items: [
      {
        name: 'React',
        path: '/docs/getting-started/react',
      },
      {
        name: 'Next',
        path: '/docs/getting-started/next',
      },
      {
        name: 'Vue',
        path: '/docs/getting-started/vue',
      },
      {
        name: 'Nuxt',
        path: '/docs/getting-started/nuxt',
      },
      {
        name: 'Angular',
        path: '/docs/getting-started/angular',
      },
      {
        name: 'Svelte',
        path: '/docs/getting-started/svelte',
      },
      {
        name: 'Gatsby',
        path: '/docs/getting-started/gatsby',
      },
      {
        name: 'Astro',
        path: '/docs/getting-started/astro',
      },
    ],
  },
  {
    subHeader: 'Customize',
    items: [
      {
        name: 'Customization',
        path: '/docs/customize/customization',
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
        path: '#',
      },
    ],
  },
  {
    subHeader: 'Forms',
    items: [
      {
        name: 'Form Control',
        path: '/docs/components/form-control',
      },
      {
        name: 'Floating labels',
        path: '/docs/components/floating-labels',
      },
      {
        name: 'Select',
        path: '/docs/components/select',
      },
      {
        name: 'File Input',
        path: '/docs/components/file-input',
      },
      {
        name: 'Checkbox',
        path: '/docs/components/checkbox',
      },
      {
        name: 'Radio',
        path: '/docs/components/radio',
      },
      {
        name: 'Switch',
        path: '/docs/components/switch',
      },
      {
        name: 'Range',
        path: '/docs/components/range',
      },
      {
        name: 'Input Group',
        path: '/docs/components/input-group',
      },
    ],
  },
  {
    subHeader: 'Components',
    items: [
      {
        name: 'Accordion',
        path: '/docs/components/accordion',
      },
      {
        name: 'Alert',
        path: '/docs/components/alert',
      },
      {
        name: 'Avatar',
        path: '/docs/components/avatar',
      },
      {
        name: 'Badge',
        path: '/docs/components/badge',
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
        name: 'Table',
        path: '/docs/components/table',
      },
      {
        name: 'Tooltip',
        path: '/docs/components/tooltip',
      },
    ],
  },
];

export default sitemap;
