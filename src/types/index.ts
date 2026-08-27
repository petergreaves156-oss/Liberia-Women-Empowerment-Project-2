export interface ProjectComponent {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  objectives: string[];
  keyActivities: string[];
  metrics: { label: string; value: string }[];
  imageSrc: string;
  badgeColor: string;
}

export interface CountyData {
  id: string;
  name: string;
  capital: string;
  districtFocus: string[];
  beneficiariesCount: number;
  grantsDisbursed: number;
  activeVSLAs: number;
  schoolsAndClinicsSupported: number;
  highlight: string;
  leadCoordinator: string;
  contactOffice: string;
  coordinates: { x: number; y: number }; // Relative SVG positioning
}

export interface Story {
  id: string;
  name: string;
  age: number;
  county: string;
  role: string;
  quote: string;
  impact: string;
  category: 'livelihood' | 'education' | 'social_norms' | 'vsla';
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  readTime: string;
  author: string;
}

export interface ResourceDocument {
  id: string;
  title: string;
  category: 'Report' | 'Guidelines' | 'Procurement' | 'Brochure';
  fileSize: string;
  date: string;
  downloadUrl?: string;
}
