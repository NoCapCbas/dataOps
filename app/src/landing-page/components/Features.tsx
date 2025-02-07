interface Feature {
  name: string;
  description: string;
  icon: string;
  href?: string;
};

export default function Features({ features }: { features: Feature[] }) {
  const defaultFeatures: Feature[] = [
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

  return (
    <div id='features' className='mx-auto mt-48 max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
          Why choose <span className='text-yellow-500'>API Toolbox</span>?
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
          One platform for all your API needs. Enterprise-grade reliability,
          developer-friendly experience, and predictable pricing.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {(features || defaultFeatures).map((feature) => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center border border-yellow-400 bg-yellow-100/50 dark:bg-boxdark rounded-lg'>
                  <div className='text-2xl'>{feature.icon}</div>
                </div>
                {feature.name}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-white'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
