export interface navItem {
  title: string;
  url?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items?: navItem[];
}

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