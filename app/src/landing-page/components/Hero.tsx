import { routes } from 'wasp/client/router';

export default function Hero() {
  return (
    <div className='relative pt-14 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
            <h1 className='text-4xl font-bold text-gray-900 sm:text-6xl dark:text-white'>
              One <span className='text-yellow-600'>API Toolbox</span> for All Your <span className='text-yellow-600'>API Needs</span>
            </h1>
            <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white'>
              Access multiple APIs through a single unified platform. From data enrichment to automation services, 
              we provide reliable, scalable, and easy-to-integrate API solutions.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={routes.PricingPageRoute.to}
                className='rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600'
              >
                View APIs
              </a>
              <a
                href='#features'
                className='rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-200 hover:ring-2 hover:ring-yellow-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white'
              >
                Explore Features <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          {/* <div className='mt-14 flow-root sm:mt-14'>
            <div className='-m-2 flex justify-center rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <APICard 
                  title="Data Enrichment" 
                  description="Enhance your data with additional insights and information"
                />
                <APICard 
                  title="Automation Services" 
                  description="Streamline your workflows with powerful automation APIs"
                />
                <APICard 
                  title="Analytics APIs" 
                  description="Get deep insights from your data with advanced analytics"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function APICard({ title, description }: { title: string, description: string }) {
  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200'>
      <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{title}</h3>
      <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>{description}</p>
    </div>
  );
}

function TopGradient() {
  return (
    <div className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0' aria-hidden='true'>
      <div
        className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-amber-400 to-purple-300 opacity-40'
        style={{
          clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
        }}
      />
    </div>
  );
}

function BottomGradient() {
  return (
    <div className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl' aria-hidden='true'>
      <div
        className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-amber-400 to-purple-300 opacity-50 w-[72.1875rem]'
        style={{
          clipPath: 'ellipse(80% 30% at 80% 50%)',
        }}
      />
    </div>
  );
}