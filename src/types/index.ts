export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  tagline: string;
  details: string[];
  deliverables: string[];
  techStack: string[];
  metrics: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  challenges: string[];
  solutions: string[];
  stats: { label: string; value: string };
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: 'Alpha' | 'Beta' | 'Early Access' | 'GA';
  features: string[];
  metrics: string;
  badge: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  industry: string;
  summary: string;
  metrics: { value: string; label: string }[];
  technologies: string[];
  architectureHighlights: string[];
}

export interface PhilosophyPillar {
  letter: string;
  word: string;
  subtitle: string;
  description: string;
}

