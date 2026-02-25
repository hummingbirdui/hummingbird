interface Member {
  name: string;
  role: string;
  url: string;
}

interface CompanyInfo {
  title: string;
  content: string;
  subSections?: {
    subTitle: string;
    subContent: string;
  }[];
}

export const teamMembers: Member[] = [
  {
    name: 'Ashraful Islam Prium',
    role: 'Founder',
    url: 'https://github.com/prium',
  },
  {
    name: 'Muazzem Hussen Chowdhury',
    role: 'Engineering Manager',
    url: 'https://github.com/ovi003',
  },
  {
    name: 'Md. Khayrul Islam',
    role: 'Front-end Developer',
    url: 'https://github.com/khayrul25',
  },
  {
    name: 'Md. Riazul Islam',
    role: 'Software Engineer',
    url: 'https://github.com/riazul01',
  },
  {
    name: 'Pantha Sharma',
    role: 'UI/UX Designer',
    url: '#',
  },
  {
    name: 'Qurratul Aein Rafia',
    role: 'Editorial Strategist',
    url: 'https://github.com/RafiAein',
  },
];

export const aboutData: CompanyInfo[] = [
  {
    title: 'What is Hummingbird?',
    content: `Hummingbird is a comprehensive, open-source UI component library for Tailwind CSS, 
    designed to provide developers who refuse to compromise with a definitive toolset that's 
    both extensive and extensible. Each one of its efficiently designed components enable 
    rapid development of complex yet high-performing & scalable web apps.

    The rapid development of sophisticated, performant, and scalable web applications.`,
  },
  {
    title: 'Our Mission',
    content: `Our primary mission is to build the world's largest and most sensible UI library 
    with the belief that a massive, feature-rich library can and should be a joy to use. 
    We aim to eliminate the frustrating trade-off between development speed and code quality, 
    delivering an unparalleled developer experience that sets a new, higher standard for the 
    front-end industry. We are committed to empowering developers to build sophisticated, 
    scalable SaaS applications, e-commerce platforms, and data-rich dashboards without 
    the technical debt typically associated with large-scale UI frameworks.`,
  },
  {
    title: 'Why Hummingbird?',
    content: 'Four core principles guide our commitment to this philosophy:',
    subSections: [
      {
        subTitle: 'Unmatched Scale',
        subContent: `We are on a mission to build the most comprehensive collection of components, 
        layouts, and variants in the world. This ensures you have the right building block 
        for any scenario – from simple landing pages to complex applications as per your needs.`,
      },
      {
        subTitle: 'Sensible by Design',
        subContent: `Hummingbird's every design-consistent component is meticulously crafted 
        to be intuitive, accessible, and easily integrable. From our plug-and-play experience 
        and gentle learning curve, every aspect of Hummingbird is designed to be a joy to use, 
        allowing you to be productive in minutes, not days.`,
      },
      {
        subTitle: 'Performance as a Feature',
        subContent: `Hummingbird is designed to be incredibly lightweight, ensuring a minimal 
        bundle size and blazing-fast load times to ensure your applications are performant by default.`,
      },
      {
        subTitle: 'Uncompromised Creativity',
        subContent: `Hummingbird provides you with a vast library of beautifully designed elements, 
        but never at the expense of control. Hummingbird is fully extensible with Tailwind's 
        utility classes, providing complete creative freedom for customization and allowing you 
        to extend them to meet your exact needs.`,
      },
    ],
  },
  {
    title: '',
    content: `Hummingbird is more than a project; it is an ambitious, open-source effort 
    to set a new, more sensible standard for the entire front-end industry.`,
  },
];

export const privacyData: CompanyInfo[] = [
  {
    title: 'Introduction',
    content: `This Privacy Policy governs the way Hummingbird ("we," "us," or "our") 
    collects, uses, maintains, and discloses information from users (each, a "User") 
    of the hbui.dev website and the Hummingbird component library (collectively, the "Service").`,
  },
  {
    title: 'Information We Collect & How We Use It',
    content: `We are committed to user privacy and collect the absolute minimum 
    data necessary to operate and improve the Service.`,
    subSections: [
      {
        subTitle: 'Non-Personal Identification Information',
        subContent: `We may use privacy-respecting analytics tools to collect anonymous, 
        aggregated data about how the Service is used. This may include browser name, 
        device type, and technical information about the means of connection to our Service. 
        This data is not personally identifiable and helps us make informed decisions 
        about new features and improvements. We do not use tracking cookies or log 
        IP addresses for this purpose.`,
      },
      {
        subTitle: 'Personal Identification Information',
        subContent: `We only collect personal identification information (such as name 
        and email address) when voluntarily submitted to us, for example, when a User 
        contacts us via email. This information is used exclusively to respond to 
        the User's inquiry. We do not use this information for marketing or add you 
        to any mailing lists without your explicit, opt-in consent.`,
      },
    ],
  },
  {
    title: 'Data Security and Retention',
    content: `We adopt appropriate data collection, storage, and processing practices 
    and security measures to protect against unauthorized access or disclosure of 
    your information. We will retain your information only for as long as is 
    necessary for the purposes set out in this Privacy Policy.`,
  },
  {
    title: 'Sharing Personal Information',
    content: `We do not sell, trade, or rent Users' personal identification information to others.`,
  },
  {
    title: 'Links to Other Sites',
    content: `Our Service may contain links to other sites that are not operated by us, 
    such as our GitHub and Discord communities. If you click on a third-party link, 
    you will be directed to that third party's site. We strongly advise you to review 
    the Privacy Policy of every site you visit. We have no control over and assume 
    no responsibility for the content or privacy practices of any third-party sites 
    or services.`,
  },
  {
    title: 'Changes to This Privacy Policy',
    content: `Hummingbird has the discretion to update this privacy policy at any time. 
    We encourage Users to frequently check this page for any changes to stay informed 
    about how we are protecting the information we collect.`,
  },
];

export const termsData: CompanyInfo[] = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the Hummingbird website and component library 
    (the "Service"), you accept and agree to be bound by the terms and provisions of 
    this agreement ("Terms").`,
  },
  {
    title: 'Intellectual Property Rights',
    content: `A clear legal distinction exists between our open-source software and 
    our protected brand assets:`,
    subSections: [
      {
        subTitle: 'The Software',
        subContent: `The Hummingbird component library source code is made available under 
        the MIT License. All rights to use, modify, and distribute the software are governed 
        entirely by the terms of that license.`,
      },
      {
        subTitle: 'The Brand Assets',
        subContent: `The name "Hummingbird," the official logos, and any related brand assets 
        are the exclusive trademarks of the Hummingbird project. The MIT License does not grant 
        any rights to our trademarks. Their use is strictly governed by our Brand Guideline(s).`,
      },
    ],
  },
  {
    title: 'Acceptable Use Policy',
    content: `You agree not to use the Service for any unlawful purpose or in any way 
    that could damage, disable, or impair the Service.`,
  },
  {
    title: 'Disclaimer of Warranty',
    content: `The Service is provided "AS IS" and "AS AVAILABLE" without any warranty of any kind, 
    express or implied, including, but not limited to, the implied warranties of merchantability 
    or fitness for a particular purpose.`,
  },
  {
    title: 'Limitation of Liability',
    content: `In no event shall Hummingbird or its maintainers be liable for any claim, damages, 
    or other liability arising from, out of, or in connection with the Service.`,
  },
];
