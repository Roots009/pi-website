// src/hooks/useScroll.ts
import { useState, useEffect } from 'react';

/**
 * A custom hook to track the page's scroll position.
 * @param {number} threshold - The scroll position (in pixels) at which to trigger the 'scrolled' state.
 * @returns {boolean} - True if the page has been scrolled past the threshold, false otherwise.
 */
export const useScroll = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};