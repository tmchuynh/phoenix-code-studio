/**
 * Clips a string to a specified maximum length.
 *
 * @param {string} text - The string to be clipped
 * @param {number} maxLength - The maximum length allowed for the string
 * @returns {string} The original string if its length is less than or equal to maxLength,
 *                   otherwise the string truncated to maxLength characters
 */
export function clipString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength);
}

/**
 * Compares the word count of a string against a maximum threshold.
 *
 * @param text - The string to check word count for
 * @param maxWords - The maximum number of words allowed
 * @returns `true` if the text contains fewer or equal words than the maximum, `false` otherwise
 * @throws {Error} When maxWords is negative
 *
 * @example
 * ```typescript
 * // Returns true as the string has 5 words
 * compareStringWordCount("This is a simple example", 5);
 *
 * // Returns false as the string has 5 words
 * compareStringWordCount("This is a simple example", 4);
 * ```
 */
export function compareStringWordCount(
  text: string,
  maxWords: number
): boolean {
  if (maxWords < 0) {
    throw new Error("Maximum words must be a non-negative number.");
  }

  const words = text.trim().split(/\s+/);
  return words.length <= maxWords;
}

/**
 * Formats a number as currency with proper formatting.
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns The formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

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
 * Converts a string from kebab-case or camelCase to Title Case.
 * @param str - The string to convert to title case
 * @returns The title case string
 */
export function toTitleCase(str: string): string {
  if (!str) return str;

  return str
    .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

export function formatDecimalMinutes(value: number) {
  return `${value.toFixed(2)} min`;
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

export function kebabToTitle(str: string): string {
  if (!str) return str;

  return str
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Formats a string into title case with special formatting rules.
 *
 * This function applies title case formatting with the following rules:
 * - Always capitalizes the first and last word
 * - Keeps minor words (articles, conjunctions, short prepositions) lowercase unless they're the first or last word
 * - Preserves special cases like "jQuery"
 * - Transforms "UX-UI-Design" to "UX/UI Design"
 * - Keeps words starting with "use" (except "user") in their original case
 * - Handles hyphenated words by capitalizing both parts
 * - Converts hyphens in the input string to spaces in the output
 *
 * @param str - The input string to be formatted
 * @returns The formatted string with title case applied according to the rules
 *
 * @example
 * capitalize("hello-world")       // "Hello World"
 * capitalize("the-quick-fox")     // "The Quick Fox"
 * capitalize("a-day-in-the-life") // "A Day in the Life"
 * capitalize("use-query")         // "use-query" (unchanged)
 * capitalize("jQuery")            // "jQuery" (unchanged)
 * capitalize("UX-UI-Design")      // "UX/UI Design"
 */
export function capitalize(str: string): string {
  // Define words to be lowercased (articles, conjunctions, short prepositions)
  const minorWords = new Set([
    "a",
    "an",
    "and",
    "the",
    "and",
    "but",
    "or",
    "nor",
    "as",
    "at",
    "by",
    "for",
    "in",
    "of",
    "on",
    "per",
    "to",
    "via",
    "vs",
    "v",
    "vs.",
    "v.",
  ]);

  if (str.startsWith("use") && !str.startsWith("user")) {
    return str;
  }

  if (str === "jQuery") {
    return "jQuery"; // Keep jQuery as is
  }
  if (str === "UX-UI-Design") {
    return "UX/UI Design"; // Format UX-UI-Design to UX/UI Design
  }

  return str
    .split("-")
    .map((word, index, array) => {
      // Always capitalize the first word of the title
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      // Always capitalize the last word of the title
      if (index === array.length - 1) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

      // Handle hyphenated words (capitalize both parts)
      if (word.includes("-")) {
        return word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("-");
      }

      // Lowercase minor words unless they are the first or last word
      if (minorWords.has(word)) {
        return word;
      }

      // Capitalize the first letter of other words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
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