import React, { useRef, useEffect, useState } from "react";

const useOnScreen = (elementRef, onScreenOptions) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);
  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      setIsOnScreen(entry.isIntersecting);
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      handleObserver,
      onScreenOptions
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(elementRef.current);
    return () => {
      observerRef.current.disconnect();
    };
  }, [elementRef]);
  return isOnScreen;
};
export default useOnScreen;
