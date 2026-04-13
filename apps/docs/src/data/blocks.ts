import layout from '@assets/images/blocks/layout.png';
import layoutDark from '@assets/images/blocks/layout-dark.png';
import hero from '@assets/images/blocks/hero.png';
import heroDark from '@assets/images/blocks/hero-dark.png';
import feature from '@assets/images/blocks/feature.png';
import featureDark from '@assets/images/blocks/feature-dark.png';
import pricing from '@assets/images/blocks/pricing.png';
import pricingDark from '@assets/images/blocks/pricing-dark.png';
import stats from '@assets/images/blocks/stats.png';
import statsDark from '@assets/images/blocks/stats-dark.png';
import testimonial from '@assets/images/blocks/testimonial.png';
import testimonialDark from '@assets/images/blocks/testimonial-dark.png';
import cta from '@assets/images/blocks/cta.png';
import ctaDark from '@assets/images/blocks/cta-dark.png';
import footer from '@assets/images/blocks/footer.png';
import footerDark from '@assets/images/blocks/footer-dark.png';
import auth from '@assets/images/blocks/auth.png';
import authDark from '@assets/images/blocks/auth-dark.png';

interface Block {
  title: string;
  count: number;
  href: string;
  image?: {
    light: string;
    dark: string;
  };
}

export const blocks: Block[] = [
  {
    title: 'Layouts',
    count: 5,
    href: '/layouts',
    image: { light: layout.src, dark: layoutDark.src },
  },
  {
    title: 'Hero sections',
    count: 5,
    href: '/hero-sections',
    image: { light: hero.src, dark: heroDark.src },
  },
  {
    title: 'Feature sections',
    count: 5,
    href: '/feature-sections',
    // image: { light: feature.src, dark: featureDark.src },
  },
  {
    title: 'Pricing plans',
    count: 5,
    href: '/pricing-plans',
    image: { light: pricing.src, dark: pricingDark.src },
  },
  {
    title: 'Stats',
    count: 5,
    href: '/stats',
    // image: { light: stats.src, dark: statsDark.src },
  },
  {
    title: 'Testimonials',
    count: 5,
    href: '/testimonials',
    image: { light: testimonial.src, dark: testimonialDark.src },
  },
  {
    title: 'CTA sections',
    count: 5,
    href: '/cta-sections',
    image: { light: cta.src, dark: ctaDark.src },
  },
  {
    title: 'Footers',
    count: 5,
    href: '/footers',
    image: { light: footer.src, dark: footerDark.src },
  },
  {
    title: 'Authentication',
    count: 5,
    href: '/authentication-forms',
    image: { light: auth.src, dark: authDark.src },
  },
];
