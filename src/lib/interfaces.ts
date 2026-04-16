import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import { LengthType } from "./types";

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

export interface Testimonial {
  name: string;
  featured: boolean;
  position?: string;
  rating?: number;
  quote: string;
}


export interface SearchResultsProps {
  results: SearchResult[];
  searchQuery: string;
  onResultClick: () => void;
}

export interface SearchResult {
  title: string;
  href: string;
  section: string;
  breadcrumb: string[];
  searchableText: string;
}

export interface NavigationSectionProps {
  title: string;
  items: NavigationItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
  order?: number;
  isExpanded?: boolean;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}
