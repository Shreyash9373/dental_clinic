// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top of the page on route change
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;