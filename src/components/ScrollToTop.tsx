"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed z-50
        bottom-4 right-4               /* mobile */
        sm:bottom-6 sm:right-6         /* ≥640 px  */
        lg:bottom-8 lg:right-8          /* ≥1024 px */

        flex items-center justify-center
        h-10 w-10 sm:h-10 sm:w-10 lg:h-12 lg:w-12
        rounded-full

        bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
        text-white

        shadow-lg hover:shadow-pink-400/50
        hover:scale-110 active:scale-95
        transition-all duration-300
      "
    >
      {/* icon scales with button */}
      <FaArrowUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
    </button>
  );
};
export default ScrollToTop;
