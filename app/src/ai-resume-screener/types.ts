export type Resume = {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
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
  resumeFileName: string;
  candidateName: string;
  matchPercentage: number;
  analysis: string;
  keySkills: string[];
  highlights: string[];
  redFlags?: string[];
  createdAt: Date;
  userId: string;
  phoneNumber?: string;
  email?: string;
  linkedinProfileUrl?: string; 
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
};

export type AnalyzeResumesResponse = {
  jobId: string;
  results: ResumeScreeningResult[];
};

export type UploadResumesRequest = {
  files: File[];
};

export type UploadResumesResponse = {
  resumeIds: string[];
};