import { ServiceTypeKeys } from "@/app/contact-us/page";

export interface FAQ {
  question: string;
  answer: string;
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

export interface ServiceCategory {
  name: string;
  type: ServiceTypeKeys;
  title: string;
  short: string;
  info: ServiceInfo;
}

export interface ServiceInfo {
  description: string[];
  short: string;
  subServices: string[];
}

export interface SubServiceItem {
  category: string;
  name: string;
  info: SubServiceInfo;
  details: SubServiceDetail[];
  cta: CTA;
}

export interface SubServiceInfo {
  name: string;
  description: string;
  startingPrice: number;
  info: string;
  details: string;
  short: string;
  featured: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  pricingTiers: PricingTier[];
}

export interface SubServiceDetail {
  title: string;
  intro?: string[];
  lists?: {
    title?: string;
    description: string;
    info?: ListDetail[];
  }[];
}

export interface ListDetail {
  title: string;
  description: string;
}

export interface CTA {
  title: string;
  intro?: string;
  text?: string;
  button: string;
  afterButtonText?: string;
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
  description: string;
  excerpt: string;
  featured?: boolean;
  img: string;
  topics: string[];
  intro: string[];
  list?: {
    title: string;
    description?: string[];
    details: {
      title?: string;
      info: string[];
    }[];
  };
  categories: {
    category: string;
    intro?: string[];
    items?: {
      title?: string;
      description: string[];
      details?: string[];
    }[];
  }[];
  conculsions: string[];
}

export interface Project {
  title: string;
  name: string;
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
