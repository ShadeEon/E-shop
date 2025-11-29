import { useState, useEffect } from "react";

export const useAutoSlider = (length, delay = 3000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);
    return () => clearInterval(interval);
  }, [length, delay]);

  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);
  const goTo = (i) => setIndex(i); // added

  return { index, next, prev, goTo };
};
