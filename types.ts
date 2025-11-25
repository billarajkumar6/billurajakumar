export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'legal' | 'media';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
  grade?: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}
