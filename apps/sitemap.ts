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
        path: '/docs/getting-started/introduction',
      },
      {
        name: 'Installation',
        path: '/docs/getting-started/installation',
      },
      {
        name: 'Framework Guides',
        path: '/docs/getting-started/framework-guides',
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
        name: 'Bootstrap Grid',
        path: '/docs/layout/bootstrap-grid',
      },
      {
        name: 'Reboot',
        path: '/docs/content/reboot',
      },
      {
        name: 'Typography',
        path: '/docs/content/typography',
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
      {
        name: 'Validation',
        path: '/docs/components/validation',
      },
      {
        name: 'Advance Select',
        path: '/docs/components/advance-select',
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
        name: 'Date Time picker',
        path: '/docs/components/date-time-picker',
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
        name: 'Loader',
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
