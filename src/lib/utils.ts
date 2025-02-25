import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { cssUnit } from "./constants";
import { BlogPost, DateObject, LengthObject } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The numeric value to format.
 * @returns A string representing the formatted currency value.
 *          If the input is not a number, it returns "$0.00".
 */
export const formatCurrency = (value: number) => {
  if (isNaN(value)) return "$0.00";

  return "$" + value.toLocaleString(undefined);
};

export const capitalize = (str: string) => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Splits a given string by newline characters and trims each resulting line.
 * Empty lines are excluded from the resulting array.
 *
 * @param quote - The string to be split and trimmed.
 * @returns An array of non-empty, trimmed strings.
 */
export const splitAndTrimQuotes = (quote: string): string[] => {
  return quote.split("\n").reduce((acc, paragraph) => {
    const trimmed = paragraph.trim();
    if (trimmed) acc.push(trimmed);
    return acc;
  }, [] as string[]);
};

/**
 * Formats a given date string into the format 'YYYY-MM-DD'.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in 'YYYY-MM-DD' format.
 * @throws Will throw an error if the provided date string is invalid.
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Converts a given title string into a URL-friendly slug.
 *
 * The function performs the following transformations:
 * - Converts the string to lowercase.
 * - Removes all non-alphanumeric characters except spaces and hyphens.
 * - Replaces spaces and consecutive hyphens with a single hyphen.
 *
 * @param title - The title string to be converted into a slug.
 * @returns The URL-friendly slug.
 */
export function setSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-");
  return slug;
}

/**
 * Formats a given name by replacing hyphens with spaces and capitalizing the result.
 *
 * @param name - The name to be formatted.
 * @returns The formatted name with spaces instead of hyphens and capitalized.
 */
export function formatName(name: string): string {
  const formattedName = name.replace(/-/g, " ");
  return capitalize(formattedName);
}

/**
 * Creates a CSS animation for a given loader.
 *
 * This function generates a unique animation name based on the provided
 * loader name and suffix. It then creates a `<style>` element and appends
 * it to the document's head, inserting the keyframes for the animation.
 *
 * @param loaderName - The name of the loader for which the animation is created.
 * @param frames - The keyframes of the animation as a string.
 * @param suffix - A suffix to ensure the animation name is unique.
 * @returns The generated animation name.
 */
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

/**
 * Parses a given size value (number or string) and returns an object containing the numeric value and its unit.
 *
 * @param size - The size value to parse. It can be a number or a string.
 * @returns An object containing the parsed numeric value and its unit.
 *
 * @example
 * ```typescript
 * parseLengthAndUnit(10); // { value: 10, unit: "px" }
 * parseLengthAndUnit("10px"); // { value: 10, unit: "px" }
 * parseLengthAndUnit("2.5em"); // { value: 2.5, unit: "em" }
 * ```
 *
 * @remarks
 * If the provided size is a number, the unit defaults to "px".
 * If the provided size is a string and the unit is not recognized, a warning is logged and the unit defaults to "px".
 */
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

/**
 * Parses a reading time string and converts it to the total number of minutes.
 *
 * The input string can contain minutes and seconds in the format "Xm Ys",
 * where X is the number of minutes and Y is the number of seconds.
 * For example, "5m 30s" will be converted to 5 minutes.
 *
 * @param time - The reading time string to parse.
 * @returns The total number of minutes.
 */
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

/**
 * Converts a total number of seconds into a formatted string with minutes and seconds.
 *
 * @param totalSeconds - The total number of seconds to format.
 * @returns A string representing the formatted time in the format "Xm Ys".
 */
export function formatSecondsToLabel(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s}s`;
}

/**
 * Converts a numeric or string value to a CSS length value with units.
 *
 * @param value - The value to be converted. It can be a number or a string.
 * @returns A string representing the CSS length value with units.
 */
export function cssValue(value: number | string): string {
  const lengthWithunit = parseLengthAndUnit(value);

  return `${lengthWithunit.value}${lengthWithunit.unit}`;
}

/**
 * Formats a number by rounding it to the nearest hundred and adding commas as thousand separators.
 *
 * @param value - The number to format.
 * @returns The formatted number as a string.
 */
export function formatNumber(value: number): string {
  return (Math.round(value / 100) * 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Parses a reading time string in the format of "Xm Ys" (where X is minutes and Y is seconds)
 * and converts it to the total number of seconds.
 *
 * @param timeStr - The reading time string to parse, e.g., "5m 30s".
 * @returns The total number of seconds represented by the input string.
 */
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

/**
 * Parses a reading time string and converts it to decimal minutes.
 *
 * The input string should contain minutes and/or seconds in the format "Xm Ys",
 * where X is the number of minutes and Y is the number of seconds.
 *
 * @param str - The reading time string to parse.
 * @returns The total reading time in decimal minutes.
 *
 * @example
 * ```typescript
 * parseReadingTimeToDecimalMinutes("2m 30s"); // returns 2.5
 * parseReadingTimeToDecimalMinutes("1m"); // returns 1
 * parseReadingTimeToDecimalMinutes("45s"); // returns 0.75
 * ```
 */
export function parseReadingTimeToDecimalMinutes(str: string): number {
  let total = 0;
  const m = str.match(/(\d+)m/);
  if (m) total += parseInt(m[1], 10);
  const s = str.match(/(\d+)s/);
  if (s) total += parseInt(s[1], 10) / 60;
  return total;
}

/**
 * Converts a total number of seconds into a string formatted as MM:SS.
 *
 * @param totalSeconds - The total number of seconds to format.
 * @returns A string representing the formatted time in MM:SS format.
 */
export function formatSecondsToMmSs(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Generates an array of markers with values and labels based on the given parameters.
 *
 * @param numMarkers - The number of markers to generate. Must be at least 2.
 * @param minVal - The minimum value for the markers.
 * @param maxVal - The maximum value for the markers.
 * @returns An array of objects, each containing a `value` and a `label`.
 * @throws Will throw an error if `numMarkers` is less than 2.
 */
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

/**
 * Converts a decimal representation of minutes into a string formatted as "MM:SS".
 *
 * @param decimalMin - The decimal number representing minutes.
 * @returns A string representing the time in "MM:SS" format.
 */
export function decimalMinutesToMmSs(decimalMin: number): string {
  const secs = Math.round(decimalMin * 60);
  const mm = Math.floor(secs / 60);
  const ss = secs;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

/**
 * Sorts an array of blog posts by their date in ascending order.
 *
 * @param array - The array of blog posts to be sorted.
 * @returns A new array of blog posts sorted by date.
 */
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

/**
 * Compares two dates and returns a number indicating their relative order.
 * The comparison is done in the following order: year, month, and day.
 *
 * @param dates - An array containing two Date objects to be compared.
 * @returns A negative number if the first date is more recent,
 *          a positive number if the second date is more recent,
 *          or zero if both dates are the same.
 */
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

/**
 * Returns the appropriate suffix for a given day of the month.
 *
 * The suffixes are:
 * - "st" for 1, 21, 31
 * - "nd" for 2, 22
 * - "rd" for 3, 23
 * - "th" for all other numbers
 *
 * @param day - The day of the month (1-31).
 * @returns The suffix for the given day.
 */
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
