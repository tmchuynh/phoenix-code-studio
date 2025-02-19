import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cssUnit } from "./constants";
import { BlogPost, DateObject, LengthObject } from "./interfaces";

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

export const createAnimation = (
  loaderName: string,
  frames: string,
  suffix: string
): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`;

  if (typeof window == "undefined" || !window.document) {
    return animationName;
  }

  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const styleSheet = styleEl.sheet;

  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `;

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0);
  }

  return animationName;
};

export const sync = createAnimation(
  "SyncLoader",
  `33% {transform: translateY(40px)} 
   44% {transform: translateY(50px)} 
   66% {transform: translateY(20px)} 
   88% {transform: translateY(10px)} 
   100% {transform: translateY(0)}`,
  "sync"
);

export function parseLengthAndUnit(size: number | string): LengthObject {
  if (typeof size === "number") {
    return {
      value: size,
      unit: "px",
    };
  }
  let value: number;
  const valueString: string = (size.match(/^[0-9.]*/) || "").toString();
  if (valueString.includes(".")) {
    value = parseFloat(valueString);
  } else {
    value = parseInt(valueString, 10);
  }

  const unit: string = (size.match(/[^0-9]*$/) || "").toString();

  if (cssUnit[unit]) {
    return {
      value,
      unit,
    };
  }

  console.warn(
    `React Spinners: ${size} is not a valid css value. Defaulting to ${value}px.`
  );

  return {
    value,
    unit: "px",
  };
}

export function parseReadingTimeToMinutes(time: string): number {
  let totalMinutes = 0;

  const minutesMatch = time.match(/(\d+)m/);
  if (minutesMatch) {
    totalMinutes += parseInt(minutesMatch[1], 10);
  }

  const secondsMatch = time.match(/(\d+)s/);
  if (secondsMatch) {
    totalMinutes += Math.floor(parseInt(secondsMatch[1], 10) / 60);
  }

  return totalMinutes;
}

export function formatDecimalMinutes(value: number) {
  return `${value.toFixed(2)} min`;
}

export function formatSecondsToLabel(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s}s`;
}

export function cssValue(value: number | string): string {
  const lengthWithunit = parseLengthAndUnit(value);

  return `${lengthWithunit.value}${lengthWithunit.unit}`;
}

export function formatNumber(value: number | string): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function parseReadingTimeToSeconds(timeStr: string): number {
  let totalSeconds = 0;

  const mMatch = timeStr.match(/(\d+)m/);
  if (mMatch) {
    totalSeconds += parseInt(mMatch[1], 10) * 60;
  }

  const sMatch = timeStr.match(/(\d+)s/);
  if (sMatch) {
    totalSeconds += parseInt(sMatch[1], 10);
  }

  return totalSeconds;
}

export function parseReadingTimeToDecimalMinutes(str: string): number {
  let total = 0;
  const m = str.match(/(\d+)m/);
  if (m) total += parseInt(m[1], 10);
  const s = str.match(/(\d+)s/);
  if (s) total += parseInt(s[1], 10) / 60;
  return total;
}

export function formatSecondsToMmSs(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function generateSecondMarkers(
  numMarkers: number,
  minVal: number,
  maxVal: number
): { value: number; label: string }[] {
  if (numMarkers < 2) {
    throw new Error("Need at least 2 markers (start/end).");
  }

  const step = (maxVal - minVal) / (numMarkers - 1);

  const markers = [];
  for (let i = 0; i < numMarkers; i++) {
    const rawSeconds = minVal + step * i;

    const seconds = Math.round(rawSeconds);

    markers.push({
      value: convertSecondsToMinutes(seconds),

      label: formatSecondsToMmSs(seconds),
    });
  }

  return markers;
}

export function convertSecondsToMinutes(seconds: number): number {
  return Math.floor(seconds / 60);
}

export function decimalMinutesToMmSs(decimalMin: number): string {
  const secs = Math.round(decimalMin * 60);
  const mm = Math.floor(secs / 60);
  const ss = secs;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

export function sortBlogsByDate(array: BlogPost[]): BlogPost[] {
  const newArray = array.sort((a, b) => {
    const dateA = convertToDate(a.date);
    const dateB = convertToDate(b.date);

    return compareDates([dateA, dateB]);
  });

  return newArray;
}

function convertToDate(dateObj: DateObject) {
  return new Date(dateObj.year, dateObj.month - 1, dateObj.day);
}

export function compareDates([dateA, dateB]: Date[]): number {
  // Compare by year
  if (dateA.getFullYear() !== dateB.getFullYear()) {
    return dateB.getFullYear() - dateA.getFullYear(); // Sort by most recent year first
  }

  // Compare by month (if years are the same)
  if (dateA.getMonth() !== dateB.getMonth()) {
    return dateB.getMonth() - dateA.getMonth(); // Sort by most recent month first
  }

  // Compare by day (if both year and month are the same)
  return dateB.getDate() - dateA.getDate(); // Sort by most recent day first
}

export function getDaySuffix(day: number): string {
  // Get the last digit of the day to determine the suffix
  const lastDigit = day % 10;

  // Handle special cases for 11, 12, 13
  if (day >= 11 && day <= 13) {
    return "th";
  }

  // Return the correct suffix based on the last digit
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
