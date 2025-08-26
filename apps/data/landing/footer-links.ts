interface FooterLink {
  title: string;
  links: { label: string; url: string }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Hummingbird',
    links: [
      { label: 'About Us', url: '#' },
      { label: 'Documentation', url: '#' },
      { label: 'Components', url: '#' },
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
      { label: 'Github', url: '#' },
      { label: 'Discord', url: '#' },
      { label: 'Twitter', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'License (EULA)', url: '#' },
      { label: 'Privacy policy', url: '#' },
      { label: 'Terms & conditions', url: '#' },
      { label: 'Brand guideline', url: '#' },
    ],
  },
];
