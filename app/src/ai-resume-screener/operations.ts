import type { Resume, ResumeScreeningResult, AnalyzeResumesRequest, UploadResumesRequest } from './types';
import { HttpError } from 'wasp/server';
import OpenAI from 'openai';
import PDFParser from 'pdf2json';
import * as mammoth from 'mammoth';

let openai: OpenAI | null = null;

function setupOpenAI(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new HttpError(500, 'OpenAI API key is not set');
  }
  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openai;
}

export const analyzeResumes = async (args: AnalyzeResumesRequest, context: any): Promise<ResumeScreeningResult[]> => {
  if (!context.user) {
    throw new HttpError(401);
  }

  try {
    const openaiClient = setupOpenAI();
    const resumes = await context.entities.Resume.findMany({
      where: { userId: context.user.id }
    });

    const hasCredits = context.user.credits > 0;
    const hasValidSubscription = 
      !!context.user.subscriptionStatus && 
      context.user.subscriptionStatus !== 'deleted' &&
      context.user.subscriptionStatus !== 'past_due';
    const canUserContinue = hasCredits || hasValidSubscription;

    if (!canUserContinue) {
      throw new HttpError(402, 'User has not paid or is out of credits');
    }

    const results = await Promise.all(resumes.map(async (resume: Resume) => {
      const completion = await openaiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert resume screener. Analyze the resume against the job description and provide detailed feedback. Focus on matching skills, experience level, and potential fit. IMPORTANT: Only extract and include information that is explicitly present in the resume text. Do not infer, generate, or make assumptions about any information. If a field is not explicitly present in the resume, omit it from your response.'
          },
          {
            role: 'user',
            content: `Job Description: ${args.jobDescription}\n\nResume Content: ${resume.content}`
          }
        ],
        functions: [{
          name: 'analyzeResume',
          description: 'Analyze resume against job description',
          parameters: {
            type: 'object',
            properties: {
              candidateName: { type: 'string' },
              matchPercentage: { type: 'number', description: 'Match percentage between 0-100' },
              analysis: { type: 'string', description: 'Detailed analysis of the match' },
              keySkills: { type: 'array', items: { type: 'string' }, description: 'Key skills found in resume' },
              highlights: { type: 'array', items: { type: 'string' }, description: 'Key highlights and strengths' },
              redFlags: { type: 'array', items: { type: 'string' }, description: 'Potential concerns or missing requirements' },
              phoneNumber: { type: 'string', description: 'Phone number of the candidate' },
              email: { type: 'string', description: 'Email of the candidate' },
              linkedinProfileUrl: { type: 'string', description: 'LinkedIn profile URL of the candidate' }
            },
            required: ['candidateName', 'matchPercentage', 'analysis', 'keySkills', 'highlights']
          }

        }],
        function_call: { name: 'analyzeResume' }
      });

      const functionCall = completion.choices[0].message.function_call;
      if (!functionCall?.arguments) {
        throw new Error('Failed to get analysis from OpenAI');
      }
      
      const result = JSON.parse(functionCall.arguments);
      
      return context.entities.ResumeScreeningResult.create({
        data: {
          candidateName: result.candidateName,
          matchPercentage: result.matchPercentage,
          analysis: result.analysis,
          keySkills: result.keySkills,
          highlights: result.highlights,
          redFlags: result.redFlags || [],
          phoneNumber: result.phoneNumber || null,
          email: result.email || null,
          linkedinProfileUrl: result.linkedinProfileUrl || null,
          resumeId: resume.id,
          userId: context.user.id
        }
      });
    }));

    if (!hasValidSubscription) {
      await context.entities.User.update({
        where: { id: context.user.id },
        data: { credits: { decrement: 1 } }
      });
    }

    return results;
  } catch (error: any) {
    console.error(error);
    throw new HttpError(500, error.message || 'Failed to analyze resumes');
  }
};

export const uploadResumes = async ({ files }: UploadResumesRequest, context: any): Promise<Resume[]> => {
  if (!context.user) {
    throw new HttpError(401);
  }

  try {
    const createPromises = files.map(async file => {
      const fileName = file?.name || 'unnamed';
      const fileType = fileName.split('.').pop()?.toLowerCase() || '';
      
      let content = '';
      const buffer = await file.arrayBuffer();

      if (fileType === 'pdf') {
        const pdfParser = new PDFParser();
        content = await new Promise((resolve, reject) => {
          pdfParser.on('pdfParser_dataReady', (pdfData) => {
            resolve(decodeURIComponent(pdfData.Pages.map(page => 
              page.Texts.map(text => text.R.map(r => r.T).join(' ')).join(' ')
            ).join('\n')));
          });
          pdfParser.on('pdfParser_dataError', reject);
          pdfParser.parseBuffer(Buffer.from(buffer));
        });
      } else if (fileType === 'docx') {
        const result = await mammoth.extractRawText({ arrayBuffer: buffer });
        content = result.value;
      } else {
        throw new Error('Unsupported file format. Please upload PDF or DOCX files.');
      }

      return context.entities.Resume.create({
        data: {
          fileName,
          fileUrl: 'temp-url',
          fileType,
          content,
          userId: context.user.id
        }
      });
    });

    return Promise.all(createPromises);
  } catch (error: any) {
    console.error('Resume upload error:', error);
    throw new HttpError(500, `Failed to upload resumes: ${error.message}`);
  }
};

export const getAllResumes = async (_args: void, context: any): Promise<Resume[]> => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Resume.findMany({
    where: {
      userId: context.user.id
    },
    orderBy: {
      uploadedAt: 'desc'
    }
  });
};
