import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';
// import { sendInquiryEmail } from '@wasp/server/sendInquiryEmail';

const sendInquiryEmail = async (data: ContactFormData) => {
  console.log(data);
};

type ContactFormData = {
  fullName: string;
  email: string;
  apiType: string;
  useCase: string;
  expectedVolume: string;
  requirements: string;
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
      await sendInquiryEmail(data);
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
            Request Custom API Solution
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Tell us about your API needs and we'll explore adding it to our toolbox.
          </p>
        </div>

        {submitted ? (
          <div className='bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center'>
            <h3 className='text-lg font-medium text-green-800 dark:text-green-100'>
              Thank you for your request!
            </h3>
            <p className='text-green-700 dark:text-green-200 mt-2'>
              We'll review your requirements and contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className='mt-4 text-green-600 dark:text-green-300 underline'
            >
              Submit another request
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
              <label htmlFor='useCase' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Type of API and Use Case Description *
              </label>
              <textarea
                id='useCase'
                {...register('useCase', { required: 'Please describe your use case' })}
                rows={3}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                placeholder='Describe how you plan to use this API...'
              />
              {errors.useCase && (
                <p className='mt-1 text-sm text-red-600'>{errors.useCase.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='expectedVolume' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Expected Monthly Volume *
              </label>
              <select
                id='expectedVolume'
                {...register('expectedVolume', { required: 'Please select expected volume' })}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              >
                <option value=''>Select volume range</option>
                <option value='1-1000'>1 - 1,000 calls</option>
                <option value='1001-10000'>1,001 - 10,000 calls</option>
                <option value='10001-100000'>10,001 - 100,000 calls</option>
                <option value='100001-1000000'>100,001 - 1,000,000 calls</option>
                <option value='1000000+'>1,000,000+ calls</option>
              </select>
              {errors.expectedVolume && (
                <p className='mt-1 text-sm text-red-600'>{errors.expectedVolume.message}</p>
              )}
            </div>

            <div>
              <label htmlFor='requirements' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                Specific Requirements *
              </label>
              <textarea
                id='requirements'
                {...register('requirements', { required: 'Please provide specific requirements' })}
                rows={4}
                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                placeholder='Include details about response time requirements, data format, security needs, etc...'
              />
              {errors.requirements && (
                <p className='mt-1 text-sm text-red-600'>{errors.requirements.message}</p>
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
                  'Submit Request'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}