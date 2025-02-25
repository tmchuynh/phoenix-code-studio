import { useState, useEffect } from "react";
import { debounce } from "./debounce";

const useMediumScreen = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768);
    };

    const debouncedHandleResize = debounce(handleResize, 200);

    window.addEventListener("resize", debouncedHandleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return isMediumScreen;
};

export default useMediumScreen;
