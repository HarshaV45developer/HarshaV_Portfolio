export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'professional' | 'personal';
  projectType: string;
  organization?: string;
  role: string;
  period: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  responsibilities: string[];
  features: {
    name: string;
    description: string;
    workflow?: string;
  }[];
  uiUxDesign: string[];
  techStack: {
    name: string;
    role: string;
  }[];
  architecture: string;
  implementationDetails: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  testing: string[];
  results: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isFork?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  projects: string[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & Tools' | 'Architecture';
  level: string;
  icon?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
  status: 'Certified' | 'Virtual Experience' | 'In Progress';
}
