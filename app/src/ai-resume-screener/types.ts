

export type Resume = {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: 'pdf' | 'doc' | 'docx';
  content: string;
  uploadedAt: Date;
  userId: string;
};

export type JobDescription = {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  createdAt: Date;
  userId: string;
};

export type ResumeScreeningResult = {
  id: string;
  resumeId: string;
  jobDescriptionId: string;
  candidateName: string;
  matchPercentage: number;
  analysis: string;
  keySkills: string[];
  skillMatches: {
    required: {
      skill: string;
      found: boolean;
      context?: string;
    }[];
    preferred: {
      skill: string;
      found: boolean;
      context?: string;
    }[];
  };
  experienceYears?: number;
  educationLevel?: string;
  highlights: string[];
  redFlags?: string[];
  createdAt: Date;
};

export type ScreeningStatus = 'pending' | 'processing' | 'completed' | 'failed';

export type BatchScreeningJob = {
  id: string;
  jobDescriptionId: string;
  resumeIds: string[];
  status: ScreeningStatus;
  progress: number;
  results: ResumeScreeningResult[];
  startedAt: Date;
  completedAt?: Date;
  error?: string;
};

// Request/Response types for the API
export type AnalyzeResumesRequest = {
  jobDescription: string;
  resumeIds?: string[];
};

export type AnalyzeResumesResponse = {
  jobId: string;
  results: ResumeScreeningResult[];
};

export type UploadResumeRequest = {
  file: File;
};

export type UploadResumeResponse = {
  resumeId: string;
  fileName: string;
  fileUrl: string;
};