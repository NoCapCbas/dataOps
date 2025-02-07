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
      name: "99.99% Uptime Guarantee",
      description: "Enterprise-grade reliability with redundant infrastructure and automatic failover. Your services stay running, guaranteed.",
      icon: "⚡"
    },
    {
      name: "Ultra-Low Latency",
      description: "Global CDN with edge locations worldwide ensures response times under 100ms. Speed you can count on.",
      icon: "🚀"
    },
    {
      name: "Single API Key",
      description: "Access all APIs with one key. Simple integration, unified billing, and centralized usage tracking across all services.",
      icon: "🔑"
    },
    {
      name: "Pay-As-You-Go",
      description: "Only pay for what you use. No minimum fees, no long-term contracts. Scale up or down as your needs change.",
      icon: "💳"
    },
    {
      name: "Real-Time Dashboard",
      description: "Monitor usage, performance, and costs in real-time. Clear analytics and insights for all your API consumption.",
      icon: "📊"
    },
    {
      name: "Support",
      description: "Expert support team available around the clock. Get help when you need it, no matter your time zone.",
      icon: "🛟"
    }
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
      question: "How does API Toolbox pricing work?",
      answer: "We offer simple, usage-based pricing with no hidden fees. Pay only for the API calls you make, with volume discounts available. Start with our free tier to test the platform.",
    },
    {
      id: 2,
      question: "What kind of support do you provide?",
      answer: "We offer technical support via email, chat, and priority phone support for enterprise customers. Our documentation is comprehensive and regularly updated. We get back to you within 24 hours.",
    },
    {
      id: 3,
      question: "How reliable is the API Toolbox platform?",
      answer: "We maintain 99.99% uptime with redundant infrastructure across multiple regions. All APIs are monitored 24/7 with automatic failover systems.",
    },
    {
      id: 4,
      question: "How do I get started?",
      answer: "Sign up and get free credits, get your API key, and start making requests immediately. Our quick-start guides will help you integrate within minutes.",
      href: "/signup"
    },
    {
      id: 5,
      question: "Do you offer custom solutions?",
      answer: "Yes, we provide enterprise solutions with custom integrations, dedicated support, and SLA guarantees. Contact us to learn more.",
      href: "/#contact"
    },
    {
      id: 6,
      question: "What security measures are in place?",
      answer: "We use industry-standard encryption, regular security audits, and comply with SOC 2 and GDPR requirements. All data is encrypted in transit and at rest.",
    }
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
