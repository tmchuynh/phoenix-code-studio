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

export type ServiceTypeKeys = "service" | "contract";

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

export type PricingTier = {
  name: string;
  startingPrice: number;
  info: string;
};

export type StarRatingProps = {
  rating: number;
  maxStars?: number;
};
