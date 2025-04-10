import React from "react";
import { SpinningText } from "../magicui/spinning-text";

/**
 * The `CannotFind` component is a functional React component that displays a message
 * indicating that the data on the page cannot be loaded at this time.
 *
 * It uses a `SpinningText` component to display the message in a spinning animation.
 * The main container is styled to be centered both vertically and horizontally
 * with some responsive width adjustments.
 *
 * @returns {JSX.Element} The rendered component.
 */
const CannotFind: React.FC = () => {
  return (
    <main className="flex justify-center items-center mx-auto -mt-28 w-10/12 md:w-11/12 h-svh">
      <SpinningText reverse className="text-4xl" duration={4} radius={6}>
        the data on this page • cannot be loaded • at this time •
      </SpinningText>
    </main>
  );
};

export default CannotFind;
