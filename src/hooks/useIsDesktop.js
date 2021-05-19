import { useState, useEffect } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true);

   useEffect(() => {
    const showNavBarOnDesktop = () => {
      const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

      if (isDesktop) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    showNavBarOnDesktop();

    window.addEventListener("resize", showNavBarOnDesktop);

    return () => {
      window.removeEventListener("resize", showNavBarOnDesktop);
    };
  });

  return isDesktop
}

export default useIsDesktop