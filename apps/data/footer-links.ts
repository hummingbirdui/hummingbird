interface FooterLink {
  title: string;
  links: { label: string; url: string }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Hummingbird',
    links: [
      { label: 'About Us', url: '/about' },
      { label: 'Documentation', url: '/docs/getting-started/installation' },
      { label: 'Components', url: '/docs/components' },
      { label: 'Examples', url: '#' },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { label: 'Contact us', url: '#' },
      { label: 'Support us', url: '#' },
      { label: 'Hire us', url: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Github', url: 'https://github.com/hummingbirdui/hummingbird' },
      { label: 'Discord', url: '#' },
      { label: 'Twitter', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'License', url: 'https://github.com/hummingbirdui/hummingbird?tab=MIT-1-ov-file' },
      { label: 'Privacy policy', url: '/privacy-policy' },
      { label: 'Terms & conditions', url: '/terms-and-conditions' },
      { label: 'Brand guideline', url: '/brand-guideline' },
    ],
  },
];
