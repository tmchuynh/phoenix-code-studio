import { cssUnit } from "../constants";
import { LengthObject } from "../interfaces";
import { DateObject } from "../types";

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

export function convertToDate(dateObj: DateObject) {
  return new Date(dateObj.year, dateObj.month - 1, dateObj.day);
}
