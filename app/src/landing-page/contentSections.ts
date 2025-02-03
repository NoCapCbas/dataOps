import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Contact', to: '#contact' },
  // { name: 'Documentation', to: DocsUrl },
  // { name: 'Blog', to: BlogUrl },
];
export const features = [
  {
    name: 'Custom Data Extraction',
    description: 'We can build tailored data extraction solutions for your business.',
    icon: '🎯',
  },
  {
    name: 'Multiple Data Formats',
    description: 'Get your data in the format you need JSON, CSV, Excel, etc.',
    icon: '📊',
  },
  {
    name: 'On Time Delivery',
    description: 'We value your time and will deliver on time.',
    icon: '🕒',
  },
  {
    name: 'Any Public Data Source',
    description: 'We can scrape any public data source.',
    icon: '🌐',
  },
  {
    name: 'Compliance First',
    description: 'Ethical scraping practices that respect robots.txt and website terms of service.',
    icon: '🛡️',
  },
  {
    name: 'No Code Required',
    description: 'No code required. We handle the scraping and data extraction.',
    icon: '🤖',
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];


export const faqs = [
  {
    id: 1,
    question: 'How quickly can you set up a new scraping project?',
    answer: 'Most projects can be set up within 2-3 business days. Complex projects might take up to a week.',
  },
  {
    id: 2,
    question: 'What about rate limiting and IP blocking?',
    answer: 'We use advanced proxy rotation and respect rate limits to ensure reliable data collection.',
  },
  {
    id: 3,
    question: 'Is scraping legal?',
    answer: 'We follow ethical scraping practices, respect robots.txt, and only scrape publicly available data. If scraping was illegal, google would not exist.',
  },
  {
    id: 4,
    question: 'What happens if website structure changes?',
    answer: 'We monitor all scrapers 24/7 and quickly adapt to any website changes to ensure continuous data flow.',
  },
];

export const footerNavigation = {
  app: [
    { name: 'Pricing', href: routes.PricingPageRoute.to },
    { name: 'Features', href: '/#features' },
    { name: 'Contact', href: '/#contact' },
    // { name: 'Documentation', href: DocsUrl },
    // { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
