import React, { JSX } from "react";
import SyncLoader from "./SyncLoader";

/**
 * LoadingIndicator component renders a loading spinner using SyncLoader.
 * It centers the spinner both vertically and horizontally within the main container.
 *
 * @returns {JSX.Element} The JSX code for the loading indicator.
 */
const LoadingIndicator: React.FC = (): JSX.Element => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6 h-lvh flex justify-center items-center">
      <SyncLoader
        size={50}
        aria-label="Loading Spinner"
        cssOverride={{
          display: "flex",
          gap: 30,
          height: "15rem",
        }}
        speedMultiplier={0.7}
      />
    </main>
  );
};

export default LoadingIndicator;
