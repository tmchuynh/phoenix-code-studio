export interface FAQ {
  question: string;
  answer: string;
}

export interface CollapsibleItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface Menu {
  title: string;
  href: string;
  description: string;
}


export interface PricingTier {
  name: string;
  startingPrice: number;
  info: string;
}

export interface Services {
  name: string;
  startingPrice: number;
  info: string;
  details: string;
  pricingTiers: PricingTier[];
}

export interface PaymentPlan {
  title: string;
  description: string;
  details: string[];
  route: string;
}

export interface Testimonial {
  name: string;
  featured: boolean;
  position: string;
  image: string;
  quote: string;
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  img: string;
  featured: boolean;
  topics: string[];
  excerpt: string;
  slug: string;
}

export interface Project {
  title: string;
  img: string[];
  featured: boolean;
  description: string;
  short: string;
  tags: string[];
  languages: string[];
  frameworks?: string[];
  technologies?: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface JobPosition {
  title: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  information: string;
}