export interface Project {
  id: string;
  title: string;
  subtitle: string;
  devTime: string;
  scaleScore: string;
  lastUpdated: string;
  deploymentStatus?: string;
  statusBadge?: string;
  githubStars?: string;
  benchmarkFps: number;
  lighthouseScore: number;
  activityData?: { name: string; stars: number }[];
  description: string;
  link: string;
  demoUrl?: string;
  tags: string[];
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  architectureNotes: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  percent: string;
  deliverables: string[];
  techUsed: string[];
  turnaroundTime: string;
  showGauge?: boolean;
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
  project: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface ProjectEstimateConfig {
  projectType: 'ai-web' | 'react-saas' | 'performance-tune' | 'custom-enterprise';
  complexity: 'mvp' | 'standard' | 'enterprise';
  aiIntegration: boolean;
  speedOptimization: boolean;
  timeline: 'rush' | 'standard' | 'flexible';
}
