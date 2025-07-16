import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  convertSecondsToMinutes,
  formatSecondsToMmSs,
  parseLengthAndUnit,
} from "./utils/convert";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
