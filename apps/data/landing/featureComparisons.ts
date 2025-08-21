import hummingbird from '@assets/images/logos/hummingbird.png';
import tailwindcss from '@assets/images/logos/tailwindcss.png';
import bootstrap from '@assets/images/logos/bootstrap.png';

export interface Framework {
  name: string;
  logo: ImageMetadata;
}

export interface FeatureComparison {
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

export const featureComparisons: FeatureComparison[] = [
  { feature: 'Ready-to-use components', hummingbird: 'yes', tailwindcss: 'partial', bootstrap: 'yes' },
  { feature: 'Clean, semantic HTML', hummingbird: 'yes', tailwindcss: 'partial', bootstrap: 'yes' },
  { feature: 'Pre-built dark mode', hummingbird: 'yes', tailwindcss: 'partial', bootstrap: 'no' },
  { feature: 'Utility-first approach', hummingbird: 'highlight', tailwindcss: 'yes', bootstrap: 'no' },
  { feature: 'Advanced customization', hummingbird: 'highlight', tailwindcss: 'no', bootstrap: 'partial' },
  { feature: 'Accessibility-first design', hummingbird: 'yes', tailwindcss: 'partial', bootstrap: 'yes' },
  { feature: 'Zero unused CSS', hummingbird: 'yes', tailwindcss: 'yes', bootstrap: 'no' },
];
