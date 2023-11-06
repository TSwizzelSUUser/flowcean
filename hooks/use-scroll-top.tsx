// Importing useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Defining a custom hook called useScrollTop
export const useScrollTop = (threshold = 10) => {
  // useState hook to manage the state of whether the page has been scrolled past a certain threshold
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to add an event listener to the window for scroll events
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // If the vertical scroll position is greater than the threshold
      if (window.scrollY > threshold) {
        // Set scrolled state to true
        setScrolled(true);
      } else {
        // Otherwise, set scrolled state to false
        setScrolled(false);
      }
    };

    // Adding the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);  // The effect depends on the threshold value

  // The hook returns the current state of scrolled (true if scrolled past threshold, false otherwise)
  return scrolled;
}

// dont like this, too dumb to edit out tho for tutorial. broke everything on local when i took out