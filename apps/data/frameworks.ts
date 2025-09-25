import django from '@assets/images/landing/frameworks/django.png';
import angular from '@assets/images/landing/frameworks/angular.png';
import laravel from '@assets/images/landing/frameworks/laravel.png';
import nextjsL from '@assets/images/landing/frameworks/nextjs.png';
import nextjsD from '@assets/images/landing/frameworks/nextjs-dark.png';
import astroL from '@assets/images/landing/frameworks/astro.png';
import astroD from '@assets/images/landing/frameworks/astro-dark.png';
import reactL from '@assets/images/landing/frameworks/react.png';
import reactD from '@assets/images/landing/frameworks/react-dark.png';
import svelte from '@assets/images/landing/frameworks/svelte.png';
import nuxt from '@assets/images/landing/frameworks/nuxt.png';
import vue from '@assets/images/landing/frameworks/vue.png';

interface Framework {
  name: string;
  logo: { light: ImageMetadata; dark: ImageMetadata };
  url: string;
}

export const frameworks: Framework[] = [
  {
    name: 'React',
    logo: { light: reactL, dark: reactD },
    url: '/docs/getting-started/framework-guides/react',
  },
  {
    name: 'Next',
    logo: { light: nextjsL, dark: nextjsD },
    url: '/docs/getting-started/framework-guides/next',
  },
  {
    name: 'Laravel',
    logo: { light: laravel, dark: laravel },
    url: '/docs/getting-started/framework-guides/laravel',
  },
  {
    name: 'Vue',
    logo: { light: vue, dark: vue },
    url: '/docs/getting-started/framework-guides/vue',
  },
  {
    name: 'Nuxt',
    logo: { light: nuxt, dark: nuxt },
    url: '/docs/getting-started/framework-guides/nuxt',
  },
  {
    name: 'Angular',
    logo: { light: angular, dark: angular },
    url: '/docs/getting-started/framework-guides/angular',
  },
  {
    name: 'Svelte',
    logo: { light: svelte, dark: svelte },
    url: '/docs/getting-started/framework-guides/svelte',
  },
  {
    name: 'Gatsby',
    logo: { light: reactL, dark: reactD },
    url: '/docs/getting-started/framework-guides/gatsby',
  },
  {
    name: 'Astro',
    logo: { light: astroL, dark: astroD },
    url: '/docs/getting-started/framework-guides/astro',
  },
  {
    name: 'Django',
    logo: { light: django, dark: django },
    url: '/docs/getting-started/framework-guides/django',
  },
];
