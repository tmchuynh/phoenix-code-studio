

import { useState, useEffect } from "react";

/**
 * Custom hook to determine if the medium size is small (>= 1024px).
 */
const useLargeScreensOnly = () => {
  const [IsLargeScreen, setIsLargeScreen] = useState( false );

  useEffect( () => {
    const handleResize = () => {
      setIsLargeScreen( window.innerWidth >= 1024 );
    };

    window.addEventListener( "resize", handleResize );

    handleResize();

    return () => {
      window.removeEventListener( "resize", handleResize );
    };
  }, [] );

  return IsLargeScreen;
};

export default useLargeScreensOnly;
