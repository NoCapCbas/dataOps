import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { TiDelete } from 'react-icons/ti';
import type { ResumeScreeningResult } from './types';
import { cn } from '../client/cn';
import {
  analyzeResumes,
  deleteResume,
  uploadResume,
  useQuery,
  getAllResumes,
} from 'wasp/client/operations';

export default function ResumeScreenerPage() {
  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
            <span className='text-yellow-500'>AI</span> Resume Screener
          </h2>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-white'>
          Upload resumes and paste a job description to get AI-powered analysis of candidate qualifications.
        </p>
        <div className='my-8 border rounded-3xl border-gray-900/10 dark:border-gray-100/10'>
          <div className='sm:w-[90%] md:w-[70%] lg:w-[50%] py-10 px-6 mx-auto my-8 space-y-10'>
            <ResumeUploadForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeUploadForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [results, setResults] = useState<ResumeScreeningResult[]>([]);

  const { data: existingResumes, isLoading: isLoadingResumes } = useQuery(getAllResumes);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleAnalyze = async () => {
    if (!files.length || !jobDescription) return;

    setIsAnalyzing(true);
    try {
      // First upload all resumes
      const uploadPromises = files.map(file => uploadResume({ file }));
      await Promise.all(uploadPromises);

      // Then analyze them against the job description
      const results = await analyzeResumes({ jobDescription });
      setResults(results);
    } catch (err: any) {
      window.alert('Error: ' + (err.message || 'Something went wrong'));
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Upload Resumes (PDF, DOC, DOCX)
          </label>
          <input
            type='file'
            multiple
            accept='.pdf,.doc,.docx'
            onChange={handleFileChange}
            className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-gray-700 hover:file:bg-yellow-100'
          />
        </div>

        {files.length > 0 && (
          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>Selected Files:</p>
            {files.map((file, index) => (
              <div key={index} className='flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-2'>
                <span className='text-sm text-gray-600 dark:text-gray-300'>{file.name}</span>
                <button
                  onClick={() => handleDeleteFile(index)}
                  className='text-red-500 hover:text-red-700'
                >
                  <TiDelete size='20' />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder='Paste the job description here...'
            rows={6}
            className='w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-yellow-500 focus:border-yellow-500'
          />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !files.length || !jobDescription}
          className={cn(
            'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500',
            {
              'opacity-50 cursor-not-allowed': isAnalyzing || !files.length || !jobDescription
            }
          )}
        >
          {isAnalyzing ? (
            <>
              <CgSpinner className='animate-spin -ml-1 mr-2 h-5 w-5' />
              Analyzing Resumes...
            </>
          ) : (
            'Analyze Resumes'
          )}
        </button>
      </div>

      {results.length > 0 && (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white'>Analysis Results</h3>
          {results.map((result, index) => (
            <div
              key={index}
              className='p-4 rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700'
            >
              <div className='flex justify-between items-center mb-2'>
                <h4 className='font-medium text-gray-900 dark:text-white'>{result.candidateName}</h4>
                <span className={cn(
                  'px-3 py-1 rounded-full text-sm font-medium',
                  result.matchPercentage >= 80 ? 'bg-green-100 text-green-800' :
                  result.matchPercentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                )}>
                  {result.matchPercentage}% Match
                </span>
              </div>
              <p className='text-sm text-gray-600 dark:text-gray-300'>{result.analysis}</p>
              <div className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
                <strong>Key Skills:</strong> {result.keySkills.join(', ')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
