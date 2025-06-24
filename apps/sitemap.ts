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
    ],
  },
  {
    subHeader: 'Components',
    items: [
      {
        name: 'Buttons',
        path: '/components/buttons',
      },
      {
        name: 'Form Control',
        path: '/components/form-control',
      },
      {
        name: 'Floating labels',
        path: '/components/floating-labels',
      },
      {
        name: 'Select',
        path: '/components/select',
      },
      {
        name: 'File Input',
        path: '/components/file-input',
      },
      {
        name: 'Checkbox',
        path: '/components/checkbox',
      },
      {
        name: 'Radio',
        path: '/components/radio',
      },
      {
        name: 'Switch',
        path: '/components/switch',
      },
      {
        name: 'Range',
        path: '/components/range',
      },
      {
        name: 'Badge',
        path: '/components/badge',
      },
      {
        name: 'Alert',
        path: '/components/alert',
      },
      {
        name: 'Link',
        path: '/components/link',
      },
      {
        name: 'Breadcrumb',
        path: '/components/breadcrumb',
      },
      {
        name: 'Avatar',
        path: '/components/avatar',
      },
      {
        name: 'Card',
        path: '/components/card',
      },
      {
        name: 'Table',
        path: '/components/table',
      },
      {
        name: 'List Group',
        path: '/components/list-group',
      },
      {
        name: 'Dropdowns',
        path: '/components/dropdowns',
      },
      {
        name: 'Tooltip',
        path: '/components/tooltip',
      },
      {
        name: 'Collapse',
        path: '/components/collapse',
      },
      {
        name: 'Accordion',
        path: '/components/accordion',
      },
      {
        name: 'Offcanvas',
        path: '/components/offcanvas',
      },
      {
        name: 'Modal',
        path: '/components/modal',
      },
      {
        name: 'Carousel',
        path: '/components/carousel',
      },
      {
        name: 'Navs & tabs',
        path: '/components/navs-tabs',
      },
      {
        name: 'Navbar',
        path: '/components/navbar',
      },
      {
        name: 'Input Group',
        path: '/components/input-group',
      },
    ],
  },
];

export default sitemap;
