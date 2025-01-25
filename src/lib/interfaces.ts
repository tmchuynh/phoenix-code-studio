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

export interface TopicFilterProps {
  topics: string[];
  selectedTopics: string[];
  handleTopicChange: ( topics: string[] ) => void;
  handleOpen: ( filterType: string ) => void;
  handleMouseLeave: () => void;
}

export interface DateFilterProps {
  dates: string[];
  selectedDates: string[];
  setSelectedDate: ( dates: string[] ) => void;
  handleOpen: ( filterType: string ) => void;
  handleMouseLeave: () => void;
}