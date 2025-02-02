import { useState, useEffect } from "react";

/**
 * Custom hook to determine if the screen size is larger (between 1025px and 1440px).
 */
const useBetweenLargeAndXL = () => {
  const [isLargerScreen, setIsLargerScreen] = useState( false );

  useEffect( () => {
    const handleResize = () => {
      setIsLargerScreen( window.innerWidth > 1024 && window.innerWidth <= 1440 );
    };

    window.addEventListener( "resize", handleResize );

    handleResize();

    return () => {
      window.removeEventListener( "resize", handleResize );
    };
  }, [] );

  return isLargerScreen;
};

export default useBetweenLargeAndXL;
