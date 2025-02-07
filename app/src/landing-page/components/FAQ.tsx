interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
};

export default function FAQ({ faqs }: { faqs: FAQ[] }) {
  const defaultFaqs: FAQ[] = [
    {
      id: 1,
      question: "How does API Hub pricing work?",
      answer: "We offer simple, usage-based pricing with no hidden fees. Pay only for the API calls you make, with volume discounts available. Start with our free tier to test the platform.",
    },
    {
      id: 2,
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support via email, chat, and priority phone support for enterprise customers. Our documentation is comprehensive and regularly updated.",
    },
    {
      id: 3,
      question: "How reliable is the API Hub platform?",
      answer: "We maintain 99.99% uptime with redundant infrastructure across multiple regions. All APIs are monitored 24/7 with automatic failover systems.",
    },
    {
      id: 4,
      question: "How do I get started?",
      answer: "Sign up for a free account, get your API key, and start making requests immediately. Our quick-start guides will help you integrate within minutes.",
      href: "/signup"
    },
    {
      id: 5,
      question: "Do you offer custom solutions?",
      answer: "Yes, we provide enterprise solutions with custom integrations, dedicated support, and SLA guarantees. Contact our sales team to learn more.",
      href: "/contact"
    },
    {
      id: 6,
      question: "What security measures are in place?",
      answer: "We use industry-standard encryption, regular security audits, and comply with SOC 2 and GDPR requirements. All data is encrypted in transit and at rest.",
    }
  ];

  return (
    <div className='mt-32 mx-auto max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
        Frequently asked questions
      </h2>
      <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
        {(faqs || defaultFaqs).map((faq) => (
          <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
            <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white'>
              {faq.question}
            </dt>
            <dd className='flex items-center justify-start gap-2 mt-4 lg:col-span-7 lg:mt-0'>
              <p className='text-base leading-7 text-gray-600 dark:text-white'>{faq.answer}</p>
              {faq.href && (
                <a href={faq.href} className='text-base leading-7 text-yellow-500 hover:text-yellow-600'>
                  Learn more →
                </a>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
