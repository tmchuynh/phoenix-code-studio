export type AlertContentType = {
  title: string;
  description: string;
  icon: React.ComponentType;
  type: "filter" | "results";
} | null;

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type LengthType = number | string;

export type DateObject = {
  month: number;
  day: number;
  year: number;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Menu = {
  title: string;
  href: string;
  description: string;
};

export type StarRatingProps = {
  rating: number;
  maxStars?: number;
};

export type InquiryFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  inquiryType: InquiryTypes;
  message: string;
};

export type InquiryTypes = "General Inquiry" | WorkType;

export type FeedbackFormData = {
  isAnonymous: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  websiteName: string;
  workType: WorkType;
  rating: number;
  feedback: string;
  tags: string[];
  customTags: string;
  displayOnWebsite: boolean;
};

export type WorkType =
  | "Web Design"
  | "Custom Website Development"
  | "E-commerce Development"
  | "SEO Optimization"
  | "Website Maintenance"
  | "Company Rebranding"
  | "Content Management"
  | "Other";

export type FeedbackStep = 1 | 2 | 3;