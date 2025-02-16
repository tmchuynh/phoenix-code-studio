import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";

  return "$" + value.toLocaleString(undefined);
};

export const capitalize = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatQuotes = (quote: string): string[] => {
  return quote
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");
};

export const formatQuote = (quote: string): string[] => {
  return quote
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export function setSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[!@#$?%,:/^&*]/g, "")
    .replace(/[\s-]+/g, "-");
  return slug;
}

export function formatName(name: string): string {
  const formattedName = name.replace(/-/g, " ");
  return capitalize(formattedName);
}
