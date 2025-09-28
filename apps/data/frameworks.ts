import django from '@assets/images/landing/frameworks/django.svg';
import angular from '@assets/images/landing/frameworks/angular.svg';
import laravel from '@assets/images/landing/frameworks/laravel.svg';
import nextjsL from '@assets/images/landing/frameworks/nextjs.svg';
import nextjsD from '@assets/images/landing/frameworks/nextjs-dark.svg';
import astroL from '@assets/images/landing/frameworks/astro.svg';
import astroD from '@assets/images/landing/frameworks/astro-dark.svg';
import reactL from '@assets/images/landing/frameworks/react.svg';
import reactD from '@assets/images/landing/frameworks/react-dark.svg';
import svelte from '@assets/images/landing/frameworks/svelte.svg';
import nuxt from '@assets/images/landing/frameworks/nuxt.svg';
import vue from '@assets/images/landing/frameworks/vue.svg';
import gatsby from '@assets/images/landing/frameworks/gatsby.svg';

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
    logo: { light: gatsby, dark: gatsby },
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
