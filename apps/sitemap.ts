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
        path: '#',
      },
      {
        name: 'Tutorial',
        path: '#',
      },
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
    ],
  },
  {
    subHeader: 'Customize',
    items: [
      {
        name: 'Colors',
        path: '/docs/customize/colors',
      },
    ],
  },
  {
    subHeader: 'Components',
    items: [
      {
        name: 'Buttons',
        path: '/docs/components/buttons',
      },
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
        name: 'Badge',
        path: '/docs/components/badge',
      },
      {
        name: 'Alert',
        path: '/docs/components/alert',
      },
      {
        name: 'Link',
        path: '/docs/components/link',
      },
      {
        name: 'Breadcrumb',
        path: '/docs/components/breadcrumb',
      },
      {
        name: 'Avatar',
        path: '/docs/components/avatar',
      },
      {
        name: 'Card',
        path: '/docs/components/card',
      },
      {
        name: 'Table',
        path: '/docs/components/table',
      },
      {
        name: 'List Group',
        path: '/docs/components/list-group',
      },
      {
        name: 'Dropdowns',
        path: '/docs/components/dropdowns',
      },
      {
        name: 'Tooltip',
        path: '/docs/components/tooltip',
      },
      {
        name: 'Collapse',
        path: '/docs/components/collapse',
      },
      {
        name: 'Accordion',
        path: '/docs/components/accordion',
      },
      {
        name: 'Offcanvas',
        path: '/docs/components/offcanvas',
      },
      {
        name: 'Modal',
        path: '/docs/components/modal',
      },
      {
        name: 'Carousel',
        path: '/docs/components/carousel',
      },
      {
        name: 'Navs & tabs',
        path: '/docs/components/navs-tabs',
      },
      {
        name: 'Navbar',
        path: '/docs/components/navbar',
      },
      {
        name: 'Input Group',
        path: '/docs/components/input-group',
      },
      {
        name: 'Button Group',
        path: '/docs/components/button-group',
      },
    ],
  },
];

export default sitemap;
