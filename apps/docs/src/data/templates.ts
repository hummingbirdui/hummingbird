import phoenix1 from '@assets/images/templates/phoenix-1.png';
import phoenix2 from '@assets/images/templates/phoenix-2.png';
import phoenix3 from '@assets/images/templates/phoenix-3.png';
import phoenix4 from '@assets/images/templates/phoenix-4.png';
import phoenix5 from '@assets/images/templates/phoenix-5.png';
import phoenix6 from '@assets/images/templates/phoenix-6.png';
import falcon1 from '@assets/images/templates/falcon-1.png';
import falcon2 from '@assets/images/templates/falcon-2.png';
import falcon3 from '@assets/images/templates/falcon-3.png';
import falcon4 from '@assets/images/templates/falcon-4.png';
import falcon5 from '@assets/images/templates/falcon-5.png';
import falcon6 from '@assets/images/templates/falcon-6.png';

interface Template {
  title: string;
  category: string;
  description: string;
  tags: string[];
  previewLink: string;
  buyLink: string;
  previewImages: ImageMetadata[];
}

const templates: Template[] = [
  {
    title: 'Phoenix Tailwind',
    category: 'Dashboard & Web app Template',
    description:
      'A modern template featuring reusable layouts, dedicated app modules, prebuilt pages, and thoughtfully crafted UI components.',
    tags: ['216 HTML files', '10 Layouts', '14 Apps', '27+ Components', 'Light & Dark mode'],
    previewLink: 'https://prium.github.io/phoenix-tailwind/v1.2.0/showcase.html',
    buyLink: 'https://themewagon.com/themes/phoenix-tailwind/',
    previewImages: [phoenix1, phoenix2, phoenix3, phoenix4, phoenix5, phoenix6],
  },
  {
    title: 'Falcon Tailwind',
    category: 'Dashboard & Web app Template',
    description:
      'A comprehensive template featuring reusable layouts, app modules, prebuilt pages, and a rich collection of UI components.',
    tags: ['200+ HTML files', '10+ Modules', '40+ Components', 'Light & Dark mode'],
    previewLink: 'https://prium.github.io/falcon-tailwind/v1.0.0-beta/',
    buyLink: 'https://themewagon.com/themes/falcon-tailwind/',
    previewImages: [falcon1, falcon2, falcon3, falcon4, falcon5, falcon6],
  },
];

export default templates;
