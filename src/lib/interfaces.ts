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
  description: string;
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
  position?: string;
  rating?: number;
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

export interface BlogContent {
  category: string;
  description?: string;
  keyTopics?: { title: string; description: string; }[];
  items?: { title: string; description: string; }[];
  items_?: { title: string; description?: string; details: string[]; }[];
  _items_?: { title: string; details: string; }[];
  trends?: string[];
}

export interface Project {
  title: string;
  featured: boolean;
  description: string;
  short: string;
  tags: string[];
  languages: string[];
  frameworks?: string[];
  libraries?: string[];
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

export interface StarRatingProps {
  rating: number;
  maxStars?: number;
}
