import React, { useState, useEffect, JSX } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";

/**
 * A React component that renders a "Back to Top" button which becomes visible
 * when the user scrolls down the page. Clicking the button smoothly scrolls
 * the page back to the top.
 *
 * @component
 * @example
 * // Usage example
 * <BackToTop />
 *
 * @returns {JSX.Element} The rendered "Back to Top" button component.
 *
 * @remarks
 * The visibility of the button is controlled by the `isVisible` state, which
 * is toggled based on the window's scroll position. The button appears when
 * the user scrolls down more than 300 pixels.
 *
 * @function
 * @name BackToTop
 */
const BackToTop = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <p className="sr-only">Scroll back to the top of the page</p>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size={"icon"}
          className="
            fixed bottom-4 right-4 
            bg-accent-1 text-accent-foreground 
            border-accent-1 rounded-full 
            shadow-lg
          "
          aria-label="Back to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
