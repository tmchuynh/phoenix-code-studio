import { LoaderSizeMarginProps } from "@/lib/interfaces";
import { cssValue, sync } from "@/lib/utils";
import * as React from "react";

import { JSX } from "react";

/**
 * SyncLoader component displays a loading spinner with three dots.
 * @param {boolean} loading - Determines if the loader should be visible. Defaults to true.
 * @returns {JSX.Element | null} The SyncLoader component or null if loading is false.
 */
function SyncLoader({
  loading = true,
  color = "var(--accent-5)",
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const wrapper: React.CSSProperties = {
    display: "inherit",
    ...cssOverride,
  };

  const style = (i: number): React.CSSProperties => {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: "100%",
      display: "inline-block",
      animation: `${sync} ${0.6 / speedMultiplier}s ${
        i * 0.07
      }s infinite ease-in-out`,
      animationFillMode: "both",
    };
  };

  if (!loading) {
    return null;
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
    </span>
  );
}

export default SyncLoader;
