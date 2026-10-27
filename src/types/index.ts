export interface Discipline {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  dailyLifeApplication: string;
  ageRange: string;
  category: 'terapia' | 'medica' | 'evaluacion';
  benefits: string[];
}

export interface Workshop {
  id: string;
  name: string;
  shortDesc: string;
  targetGroup: string;
  focus: string;
  benefits: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface QuickMessage {
  id: string;
  title: string;
  text: string;
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string;
  childInfo: string;
  therapy: string;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tag: string;
}
