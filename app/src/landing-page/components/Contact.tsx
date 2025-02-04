import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';

type ContactFormData = {
  fullName: string;
  email: string;
  budget: string;
  urls: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement your form submission logic here
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='py-10 px-6 sm:px-10'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Custom Web Scraping Solution
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Tell us about your data extraction needs and we'll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className='bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center'>
            <h3 className='text-lg font-medium text-green-800 dark:text-green-100'>
              Thank you for your inquiry!
            </h3>
            <p className='text-green-700 dark:text-green-200 mt-2'>
              We'll review your requirements and contact you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className='mt-4 text-green-600 dark:text-green-300 underline'
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Full Name *
              </label>
              <input
                type='text'
                id='fullName'
                {...register('fullName', { required: 'Full name is required' })}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
              {errors.fullName && (
                <p className='mt-1 text-sm text-red-600'>{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='budget' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Budget (USD) *
              </label>
              <select
                id='budget'
                {...register('budget', { required: 'Please select a budget range' })}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              >
                <option value=''>Select a range</option>
                <option value='100-500'>$100 - $500</option>
                <option value='500-1000'>$500 - $1,000</option>
                <option value='1000-2500'>$1,000 - $2,500</option>
                <option value='2500-5000'>$2,500 - $5,000</option>
                <option value='5000-10000'>$5,000 - $10,000</option>
                <option value='10000+'>$10,000+</option>
              </select>
              {errors.budget && (
                <p className='mt-1 text-sm text-red-600'>{errors.budget.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='urls' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                URLs to Scrape * <span className='text-gray-500'>(separate by comma)</span>
              </label>
              <textarea
                id='urls'
                {...register('urls', { required: 'Please provide URLs to scrape' })}
                rows={3}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                placeholder='https://example1.com, https://example2.com'
              />
              {errors.urls && (
                <p className='mt-1 text-sm text-red-600'>{errors.urls.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Additional Details *
              </label>
              <textarea
                id='message'
                {...register('message', { required: 'Please provide project details' })}
                rows={4}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                placeholder='Please describe what data you need and any specific requirements...'
              />
              {errors.message && (
                <p className='mt-1 text-sm text-red-600'>{errors.message.message}</p>
              )}
            </div>

            <div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <>
                    <CgSpinner className='animate-spin -ml-1 mr-2 h-5 w-5' />
                    Submitting...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}