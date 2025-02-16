import { DetailedHTMLProps, HTMLAttributes, CSSProperties } from "react";

export type LengthType = number | string;

export type ServiceTypeKeys =
  | "comprehensiveWebsiteSolutions"
  | "seoOptimizedContentCreationServices"
  | "corporateDigitalSolutions";

export interface FormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
  paymentPlan: string;
  comprehensiveWebsiteSolutions: string[];
  seoOptimizedContentCreationServices: string[];
  corporateDigitalSolutions: string[];
}

export interface CommonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: string;
  loading?: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
}

export interface LengthObject {
  value: number;
  unit: string;
}

export interface LoaderSizeProps extends CommonProps {
  size?: LengthType;
}

export interface LoaderSizeMarginProps extends CommonProps {
  size?: LengthType;
  margin?: LengthType;
}

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
  detail: string;
  short: string;
  intro: string;
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
  Icon: string;
  pricingTierIntro: {
    title: string;
    text: string;
  };
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
  title?: string;
  description?: string;
  list?: ListDetail[];
}

export interface CTA {
  title: string;
  intro?: string;
  text?: string;
  button: string;
  afterButtonText?: string;
}

export interface PaymentDetails {
  name: string;
  title: string;
  short: string;

  info: {
    intro: string[];
    description: string;
    short: string;
    features: string[];
    shortFeatures: ListDetail[];
  };

  explanation: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details: ListDetail[];
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
  excerpt: string;
  featured?: boolean;
  img: string;
  topics: string[];
  intro: string[];
  list?: ListDetail[];
  conclusions: string[];
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
