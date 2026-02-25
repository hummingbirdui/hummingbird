import hummingbird from '@assets/images/logos/hummingbird.svg';
import tailwindcss from '@assets/images/logos/tailwindcss.svg';
import bootstrap from '@assets/images/logos/bootstrap.svg';

export interface Framework {
  name: string;
  logo: ImageMetadata;
}

export interface Comparison {
  feature: string;
  hummingbird: string;
  tailwindcss: string;
  bootstrap: string;
}

export const frameworks: Framework[] = [
  { name: 'Hummingbird', logo: hummingbird },
  { name: 'Tailwind CSS', logo: tailwindcss },
  { name: 'Bootstrap', logo: bootstrap },
];

export const comparisons: Comparison[] = [
  { feature: 'Ready-to-use components', hummingbird: 'yes', tailwindcss: 'Partial', bootstrap: 'yes' },
  { feature: 'Clean, semantic HTML', hummingbird: 'yes', tailwindcss: 'Partial', bootstrap: 'yes' },
  { feature: 'Pre-built dark mode', hummingbird: 'yes', tailwindcss: 'Partial', bootstrap: 'no' },
  { feature: 'Utility-first approach', hummingbird: 'Enhanced', tailwindcss: 'yes', bootstrap: 'no' },
  { feature: 'Advanced customization', hummingbird: 'Enhanced', tailwindcss: 'no', bootstrap: 'Partial' },
  { feature: 'Accessibility-first design', hummingbird: 'yes', tailwindcss: 'Partial', bootstrap: 'yes' },
  { feature: 'Zero unused CSS', hummingbird: 'yes', tailwindcss: 'yes', bootstrap: 'no' },
];
